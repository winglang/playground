import path from "node:path";
import fs from "node:fs/promises";
import tar from "tar";
import { dirname } from "path";
import { fileURLToPath } from "url";

(async () => {
  const currentDir = dirname(fileURLToPath(import.meta.url))
  const distDir = path.join(currentDir, "../dist")
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });

  console.log("Compressing console files...")
  await tar.create({
    file: path.join(distDir, "./playground.tgz"),
    C: path.join(currentDir, "../lib"),
    gzip: true,
    P: true
  }, ["."]);

  console.log("Done...")
})();