import { startConsole } from "@wing-playground/server/dist/console.js";
import { createServer } from "vite";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { join } from "path";

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const wingfile = join(__dirname, "../dist/main.w");
const packagefile = join(__dirname, "../dist/package.json");

try {
  await writeFile(wingfile, "", "utf-8");
  // https://github.com/winglang/wing/issues/3601
  await writeFile(packagefile, "{}", "utf-8");
  const port = await startConsole({ wingfile });
  process.env["VITE_CONSOLE_SERVER_URL"] = `http://localhost:${port}`;
  const vite = await createServer();
  const server = await vite.listen();
  server.printUrls();
} catch (e) {
  console.error(e);
}