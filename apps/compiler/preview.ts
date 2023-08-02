const { createConsoleServer } = require("@wing-playground/console-build/dist/console.server.cjs");
import { writeFile, mkdtemp } from "node:fs/promises";
import { tmpdir } from 'node:os';
import { join } from "node:path";
// import EventEmitter from "node:events";

// class AppConfig extends EventEmitter {
//   config: { [s: string]: string };
//   constructor() {
//     super();
//     this.config = {
//       themeMode: "dark",
//     };
//   }
//   set(key: string, value: string) {
//     this.config[key] = value;
//     this.emit("config-change");
//   }
//   get(key: string) {
//     return this.config[key];
//   }
//   addEventListener(event: string, listener: () => void) {
//     this.addListener(event, listener);
//   }
//   removeEventListener(event: string, listener: () => void) {
//     this.removeListener(event, listener);
//   }
// }

export async function startPreview(code: string) {
  let buffer = Buffer.from(code, 'base64');
  const tempDir = await mkdtemp(join(tmpdir(), 'preview-'));
  const wingFile = join(tempDir, "test.w");
  await writeFile(wingFile, buffer.toString("utf-8"), "utf-8");
  const server = await createConsoleServer({
    log: console,
    wingfile:wingFile,
    // config: new AppConfig(),
    requestedPort: 34443
  })
  console.log("opened server", server.port);
}
