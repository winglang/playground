import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createMachine } from "./create-machine";
import { deleteMachines } from "./delete-machines";
import { verifyMachine } from "./verify-machine";
import { expressMetrics } from "./metrics";
import { flyAppsPrefix, queueSize, appUptimeLimitInSeconds, appStaleLimitInSeconds } from "./config";

const queue: string[] = [];

export async function startController() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  const port = 3000

  app.post("/create", async (req, res) => {
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
  })

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

  deleteApps();
  fillQueue();
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