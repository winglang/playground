import { request } from "@octokit/request";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import childProcess from "node:child_process";
import tar from "tar";
import { dirname, basename } from "path";
import { fileURLToPath } from "url";
import ncc from "@vercel/ncc";
import { createRequire } from 'module';
import glob from "glob";

const require = createRequire(import.meta.url);

const authorization = `token ${process.env.GITHUB_TOKEN}`;

const webpack = async (dest: string, filename: string, options: {} = {}) => {
  const { code, map, assets } : { code: string, map: string, assets: {[key: string]: any;} } = await (ncc as any)(filename, options);
  await fs.writeFile(path.join(dest, "index.js"), code, "utf-8");
  return Promise.all(Object.keys(assets).map(async (k) => {
    if (path.extname(k) === ".zip") {
      return;
    }
    await fs.mkdir(path.join(dest, dirname(k)), { recursive: true });
    return fs.writeFile(path.join(dest, k), assets[k].source, "utf-8");
  }))
}

const updateAsset = async (repo, asset, path) => {
  console.log("Downloading latest asset", path);
  const assetTgz = await request(
    `GET /repos/winglang/${repo}/releases/assets/${asset.id}`,
    {
      headers: {
        authorization,
        accept: "application/octet-stream",
      },
    }
  );
  return fs.writeFile(path, Buffer.from(assetTgz.data));
}

const updateWing = async () => {
  const currentDir = dirname(fileURLToPath(import.meta.url))

  console.log("Packing Wing CLI...")
  const winglangDir = require.resolve("winglang").replace(/\/dist\/index\.js$/, "");
  const wingDistDir = path.join(`${winglangDir}/dist_webpack`);
  await fs.rm(wingDistDir, { recursive: true, force: true });
  await fs.mkdir(wingDistDir, { recursive: true });
  await webpack(wingDistDir, `${winglangDir}/dist/cli.js`, {
    externals: ["codespan-wasm", "@winglang/sdk"]
  });

  console.log("Compressing Wing CLI...")
  await tar.create({
    file: path.join(currentDir, "../dist/winglang-webpack.tgz"),
    C: wingDistDir,
    gzip: true,
    P: true
  }, [".", "../package.json", "../wingc.wasm"]);

  console.log("Packing Wing SDK...")
  const sdkDir = require.resolve("@winglang/sdk").replace(/\/lib\/index\.js$/, "");
  const sdkDistDir = `${sdkDir}/dist_webpack`;
  await fs.rm(sdkDistDir, { recursive: true, force: true });
  await fs.mkdir(sdkDistDir, { recursive: true });

  const sdkPackageJson = await import(`${sdkDir}/package.json`);
  const externals = Object.keys(sdkPackageJson.dependencies).filter(m => {
    const exclude = ["esbuild-wasm", "@aws-sdk", "aws", "@azure", "@cdktf"]
    return exclude.filter(e => m.startsWith(e)).length > 0;
  });
  await webpack(sdkDistDir, `${sdkDir}/lib/index.js`, {
    externals
  });

  console.log("Compressing Wing inflight files...")
  const inflighFlights = await glob(`${sdkDir}/lib/target-sim/**/*inflight*`);
  await Promise.all(inflighFlights.map(f => fs.cp(f, path.join(sdkDistDir, basename(f)))));

  console.log("Compressing Wing SDK...")
  await tar.create({
    file: path.join(currentDir, "../dist/winglang-sdk-webpack.tgz"),
    C: sdkDistDir,
    gzip: true,
    P: true
  }, [".", "../package.json", "../.jsii"]);

  return fs.cp(`${winglangDir}/wingc.wasm`, path.join(currentDir, "../dist/wingc.wasm"))
}

const updateConsole = async () => {
  console.log("Downloading latest console release...");
  const release = await request("GET /repos/winglang/console/releases/latest", {
    headers: {
      authorization,
    },
  });
  console.log("Console Release:", release);
  console.log("Console Release version:", release.data.tag_name);

  console.log("Looking for the console assets...");
  const asset = release.data.assets.find((asset) => asset.name === "playground-console.tgz");
  console.log("Assets:", asset);

  await updateAsset("console", asset, "./playground-console.tgz");

  const dir = await fs.mkdtemp(path.join(os.tmpdir(), Date.now().toString()));

  console.log("Extracting console...");
  await tar.extract({
    file: "./playground-console.tgz",
    C: dir
  });

  console.log("Removing electron code...");
  await fs.rm(path.join(dir, "console/app/dist/vite/electron"), { recursive: true, force: true });

  console.log("Injecting html code...");
  const sourceHtmlPath = path.join(dirname(fileURLToPath(import.meta.url)), "../dist/index.html");
  const targetHtmlPath = path.join(dir, "console/app/dist/vite/index.html");
  const appHtml = await fs.readFile(sourceHtmlPath, "utf-8");
  const cssFiles = await glob(path.join(dir, "console/app/dist/vite") + "/**/*.css");
  const css = await fs.readFile(cssFiles[0], "utf-8");
  const cssToInject = `<style>
${css}
</style>`
  const html = appHtml.replace("<head>\n", `<head>\n${cssToInject}\n`);
  await fs.writeFile(targetHtmlPath, html, "utf-8");

  console.log("Copying generated ui scripts...")
  await fs.rm(path.join(dir, "console/app/dist/vite/assets"), { recursive: true, force: true });
  await fs.mkdir(path.join(dir, "console/app/dist/vite/assets"), { recursive: true });
  await fs.cp(path.join(dir, "console/ui/dist/index.global.js"), path.join(dir, "console/app/dist/vite/assets/console.ui.js"));
  await fs.cp(path.join(dirname(fileURLToPath(import.meta.url)), "../dist/assets/index.js"), path.join(dir, "console/app/dist/vite/assets/index.js"));

  console.log("Creating the console ui archive...");
  await tar.create({
    file: "./dist/console.tgz",
    C: path.join(dir, "console/app/dist/vite"),
    gzip: true
  }, ["."]);

  console.log("Updating console server...");
  await fs.cp(path.join(dir, "console/server/dist/index.js"), "./dist/console.server.js");
}

(async () => {
  await updateWing();
  await updateConsole();

  childProcess.execSync("ls -al", {stdio: "inherit"});
  childProcess.execSync("ls -al wing", {stdio: "inherit"});
  console.log("Done...")
})();
