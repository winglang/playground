import express from "express";
import bodyParser from "body-parser";
import { createMachine } from "./create-machine";
import { deleteMachines } from "./delete-machines";
import cors from "cors";
import { verifyMachine } from "./verify-machine";

const queue: string[] = [];
const limit = 5;

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
          if (await verifyMachine(machine)) {
            console.log("serving machine...")
            res.json({ machine });
            return fillQueue();
          }
        } while (queue.length > 0);
      }

      const startTime = Date.now();
      const machine = await createMachine();
      console.log(`Machine created in ${Date.now() - startTime}ms`, machine);
      res.json({ machine });
      return fillQueue();
    } catch (err) {
      console.error("create machine failed", err)
      return res.status(500);
    }
  });

  app.listen(port, () => {
    console.log(`Controller server is listening on port ${port}`)
  })

  const deleteApps = async () => {
    try {
      await deleteMachines("test-play-test-", 1000 * 60 * 30, 1000 * 60 * 60 * 24);
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
  const numToFill = limit - queue.length;
  console.log("filling queue...", numToFill);
  for (let i = 0; i < numToFill; i++) {
    createMachine().then((machine) => {
      queue.push(machine);
      console.log("enqueued machine...", machine);
    });
  }
}