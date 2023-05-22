import { createConsoleServer } from "@wing-playground/console-build/console.server"
import { writeFile, mkdtemp } from "node:fs/promises";
import { join } from "node:path";
import EventEmitter from "node:events";

class AppConfig extends EventEmitter {
  config;
  constructor() {
    super();
    this.config = {
      themeMode: "dark",
    };
  }
  set(key, value) {
    this.config[key] = value;
    this.emit("config-change");
  }
  get(key) {
    return this.config[key];
  }
  addEventListener(event, listener) {
    this.addListener(event, listener);
  }
  removeEventListener(event, listener) {
    this.removeListener(event, listener);
  }
}

export async function startPreview(code: string) {
  const tempDir = await mkdtemp("preview");
  const wingFile = join(tempDir, "test.w");
  await writeFile(wingFile, code, "utf-8");
  const server = await createConsoleServer({
    log: console,
    wingfile:wingFile,
    config: new AppConfig(),
    requestedPort: 34443
  })
  console.log("opened server", server.port);
}