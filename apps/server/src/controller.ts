import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { createMachine } from "./create-machine";
import { deleteMachines } from "./delete-machines";
import { verifyMachine } from "./verify-machine";
import { expressMetrics } from "./metrics";
import {
  flyAppsPrefix,
  queueSize,
  appUptimeLimitInSeconds,
  appStaleLimitInSeconds,
  rateLimitWindowInSeconds,
  rateLimitMaxRequests
} from "./config";

const queue: string[] = [];

export async function startController() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  const port = 3000;

  const limiter = rateLimit({
    windowMs: rateLimitWindowInSeconds * 1000,
    max: rateLimitMaxRequests,
    standardHeaders: true,
    legacyHeaders: false,
  })

  app.post("/create", limiter, async (req, res) => {
    try {
      if (queue.length > 0) {
        do {
          const machine = queue.pop();
          if (machine && await verifyMachine(machine)) {
            console.log("serving machine...", machine)
            res.json({ machine });
            return fillQueue();
          }
        } while (queue.length > 0);
      }

      const startTime = Date.now();
      const machine = await createMachine(req.header("Fly-Region"));
      console.log(`Machine created in ${Date.now() - startTime}ms`, machine);
      res.json({ machine });
      return fillQueue();
    } catch (err) {
      console.error("create machine failed", err)
      return res.status(500);
    }
  });

  expressMetrics(queue, app);

  app.listen(port, () => {
    console.log(`Controller server is listening on port ${port}`)
  });

  deleteApps();
  fillQueue();
  setTimeout(() => {
    verifyMachines();
  }, 1000 * 60 * 3);
}

const deleteApps = async () => {
  try {
    await deleteMachines(flyAppsPrefix, appStaleLimitInSeconds, appUptimeLimitInSeconds);
  } catch (err) {
    console.error("deleting apps failed", err)
  }
  setTimeout(() => {
    deleteApps();
  }, 60000);
}

async function fillQueue() {
  const numToFill = queueSize - queue.length;
  console.log("filling queue...", numToFill);
  for (let i = 0; i < numToFill; i++) {
    createMachine().then((machine) => {
      queue.push(machine);
      console.log("enqueued machine...", machine);
    }).catch((err) => {
      console.error("failed to enqueue machine...", err);
    });
  }
}

const verifyMachines = async () => {
  console.log("verifying machines in queue...");
  let i = queue.length;
  while (i--) {
    const machine = queue[i];
    if (!await verifyMachine(machine)) {
      const idx = queue.findIndex(m => m === machine);
      if (idx > -1) {
        queue.splice(idx, 1);
        console.log("machine not verified, removed from queue", machine);
      }
    }
  }
  fillQueue();
  setTimeout(() => {
    verifyMachines();
  }, 1000 * 60 * 3);
}
