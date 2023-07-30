import { startConsole } from "@wing-playground/server/src/console";
import { createServer } from "vite";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { join } from "path";

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const wingfile = join(__dirname, "../dist/test.w");

try {
  await writeFile(wingfile, "", "utf-8");
  const port = await startConsole({ wingfile });
  process.env["VITE_CONSOLE_SERVER_URL"] = `http://localhost:${port}`;
  const vite = await createServer();
  const server = await vite.listen();
  server.printUrls();
} catch (e) {
  console.error(e);
}