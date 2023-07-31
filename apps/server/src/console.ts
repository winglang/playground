import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from "express";
import bodyParser from "body-parser";
import { writeFile } from "fs/promises";
import { machineIdleLimitInSeconds } from "./config";
import { createConsoleServer } from "@wingconsole/server";

export interface StartConsoleProps {
  wingfile: string;
}

export async function startConsole({ wingfile }: StartConsoleProps) {
  let killTimeout: NodeJS.Timeout;

  const staticDir = join(dirname(fileURLToPath(import.meta.url)),"../app/dist");

  const server = await createConsoleServer({
    wingfile,
    requestedPort: 3000,
    config: {
      addEventListener(event, listener) {},
      removeEventListener(event, listener) {},
      get(key) {
        return undefined as any;
      },
      set(key, value) {},
    },
    log: {
      info: (...args) => {
        console.log(...args);
      },
      verbose: (...args) => {
        console.log(...args);
      },
      error: (...args) => {
        console.error(...args);
      }
    },
    onExpressCreated(app) {
      app.post("/update-code", bodyParser.json(), async (req, res) => {
        console.log("writing code to file", req.body);
        await writeFile(wingfile, req.body.code, "utf-8");
        return res.sendStatus(200);
      });
      app.get("/heartbeat", (req, res, next) => {
        if (killTimeout) {
          clearTimeout(killTimeout);
        }
        killTimeout = setTimeout(() => {
          console.log("machine timed out, killing process.", new Date())
          process.exit(0);
        }, 1000 * machineIdleLimitInSeconds);
        return res.sendStatus(200);
      });
      app.use((req, res, next) => {
        res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        next();
      });
      app.use(express.static(staticDir));
    },
  })

  console.log(`Server is running on http://localhost:${server.port}`);
  return server.port;
}
