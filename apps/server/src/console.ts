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

  let port = 3000;
  const server = await createConsoleServer({
    wingfile,
    requestedPort: port,
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
      },
      warning: (...args) => {
        console.warn(...args);
      }
    },
    onExpressCreated(app) {
      app.post("/update-code", bodyParser.json(), async (req, res) => {
        console.log("writing code to file", req.body);
        await writeFile(wingfile, req.body.code, "utf-8");
        let isReady = false;
        let retries = 0;
        if (req.query.wait) {
          do {
            const res = await fetch(`http://localhost:${port}/trpc/app.state`, { method: "GET" });
            if (res.ok) {
              const data = await res.json();
              isReady = data.result.data === "success" || data.result.data === "error";
            }
            await new Promise((resolve) => setTimeout(resolve, 75));
          } while (!isReady && retries++ < 30);
        }
        return res.sendStatus(200);
      });
      app.get("/heartbeat", (req, res, next) => {
        console.log("heartbeat", new Date())
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
  port = server.port;
  return port;
}
