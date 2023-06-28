// import { createConsoleApp } from "@wingconsole/app";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { writeFile } from "fs/promises";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { createConsoleApp } = require("./disttt/index.js");

export async function startConsole() {
  const app = express();
  app.post('/update-code', cors(), bodyParser.json(), async (req, res) => {
    console.log("writing code to file", req.body);
    await writeFile("wing/test.w", req.body.code, "utf-8");
    res.sendStatus(200);
  })

  const server = await createConsoleApp({
    wingfile: "wing/test.w",
    requestedPort: 3000,
    express: app
  });
  
  setTimeout(() => {
    console.log("machine timed out, killing process.")
    process.exit(0);
  }, 1000 * 60)
  console.log(`Console server is running on http://localhost:${server.port}.`);
}
