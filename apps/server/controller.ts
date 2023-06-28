import express from "express";
import bodyParser from "body-parser";
import { createMachine } from "./create-machine";
import { deleteMachines } from "./delete-machines";

const cors = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
}

export async function startController() {
  const app = express();
  app.use(bodyParser.json());
  const port = 3000

  app.post("/create", async (req, res) => {
    console.log("creating machine...")
    const machine = await createMachine();
    console.log("Machine created", machine);
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    return res.json({ machine });
  });

  app.listen(port, () => {
    console.log(`Controller server is listening on port ${port}`)
  })

  const deleteApps = async () => {
    await deleteMachines("test-play-test-", 1000 * 60 * 5);
    setTimeout(() => {
      deleteApps();
    }, 60000);
  }

  deleteApps();
}