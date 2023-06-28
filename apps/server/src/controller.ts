import express from "express";
import bodyParser from "body-parser";
import { createMachine } from "./create-machine";
import { deleteMachines } from "./delete-machines";
import cors from "cors";

const queue: string[] = [];
const limit = 5;

export async function startController() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  const port = 3000

  app.post("/create", async (req, res) => {
    if (queue.length > 0) {
      console.log("serving machine...")
      const machine = queue.pop();
      res.json({ machine });
      return fillQueue();
    } else {
      console.log("creating machine...")
      const startTime = Date.now();
      const machine = await createMachine();
      console.log(`Machine created in ${Date.now() - startTime}ms`, machine);
      return res.json({ machine });
    }
  });

  app.listen(port, () => {
    console.log(`Controller server is listening on port ${port}`)
  })

  const deleteApps = async () => {
    await deleteMachines("test-play-test-", 1000 * 60 * 15);
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