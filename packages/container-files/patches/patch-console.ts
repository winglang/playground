import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readFile, writeFile } from "fs/promises"
import { glob } from "glob";

const injectFullstory = async () => {
  console.log("Injecting fullstory code...");

  const currentDir = dirname(fileURLToPath(import.meta.url));
  const consoleDir = join(currentDir, "../lib/node_modules/@wingconsole/app");
  const sourceHtmlPath = join(currentDir, "./full-story.html");
  const targetHtmlPath = join(consoleDir, "dist/vite/index.html");
  const targetHtml = await readFile(targetHtmlPath, "utf-8");
  const fullStoryHtml = await readFile(sourceHtmlPath, "utf-8");
  const cssFiles = await glob(join(consoleDir, "dist/vite") + "/**/*.css");
  const css = await readFile(cssFiles[0], "utf-8");
  const cssToInject = `<style>
${css}
</style>`
  const html = targetHtml.replace("<head>\n", `<head>\n${fullStoryHtml}\n${cssToInject}\n`);
  await writeFile(targetHtmlPath, html, "utf-8");
}

(async () => {
  await injectFullstory();

  console.log("Done...")
})();