import { request } from "@octokit/request";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import tar from "tar";
import { dirname, basename } from "path";
import { fileURLToPath } from "url";
import ncc from "@vercel/ncc";
import { createRequire } from 'module';
import sdkPackageJson from "../node_modules/@winglang/sdk/package.json";
import glob from "glob";

const require = createRequire(import.meta.url);

const authorization = `token ${process.env.GITHUB_TOKEN}`;

const webpack = async (dest: string, filename: string, options: {} = {}) => {
  const { code, map, assets } : { code: string, map: string, assets: {[key: string]: any;} } = await (ncc as any)(filename, options);
  await fs.writeFile(path.join(dest, "index.js"), code, "utf-8");
  return Promise.all(Object.keys(assets).map(async (k) => {
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
  const wingDistDir = path.join(currentDir, "../node_modules/winglang/dist_webpack");
  await fs.rm(wingDistDir, { recursive: true, force: true });
  await fs.mkdir(wingDistDir, { recursive: true });
  await webpack(wingDistDir, require.resolve("../node_modules/winglang/dist/cli.js"), {
    externals: ["codespan-wasm", "@winglang/sdk"]
  });

  console.log("Compressing Wing CLI...")
  await tar.create({
    file: path.join(currentDir, "../wing/winglang-webpack.tgz"),
    C: wingDistDir,
    gzip: true,
    P: true
  }, [".", "../package.json", "../wingc.wasm"]);

  console.log("Packing Wing SDK...")
  const sdkDistDir = path.join(currentDir, "../node_modules/@winglang/sdk/dist_webpack");
  await fs.rm(sdkDistDir, { recursive: true, force: true });
  await fs.mkdir(sdkDistDir, { recursive: true });

  const externals = Object.keys(sdkPackageJson.dependencies).filter(m => {
    const exclude = ["@aws-sdk", "aws", "@azure", "@cdktf"]
    return exclude.filter(e => m.startsWith(e)).length > 0;
  });
  await webpack(sdkDistDir, require.resolve("../node_modules/@winglang/sdk/lib/index.js"), {
    externals
  });

  console.log("Compressing Wing SDK...")
  await tar.create({
    file: path.join(currentDir, "../wing/winglang-sdk-webpack.tgz"),
    C: sdkDistDir,
    gzip: true,
    P: true
  }, [".", "../package.json", "../.jsii"]);

  return fs.cp(path.join(currentDir, "../node_modules/winglang/wingc.wasm"), path.join(currentDir, "../wing/wingc.wasm"))
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

  await updateAsset("console", asset, "./console-build/playground-console.tgz");

  const dir = await fs.mkdtemp(path.join(os.tmpdir(), Date.now().toString()));
  
  console.log("Extracting console...");
  await tar.extract({
    file: "./console-build/playground-console.tgz",
    C: dir
  });

  console.log("Removing electron code...");
  await fs.rm(path.join(dir, "console/app/dist/vite/electron"), { recursive: true, force: true });

  console.log("Injecting html code...");
  const htmlToInject = await fs.readFile(path.join(dirname(fileURLToPath(import.meta.url)), "./index.html"), "utf-8");
  const appHtml = await fs.readFile(path.join(dir, "console/app/dist/vite/index.html"), "utf-8");
  const cssFiles = await glob(path.join(dir, "console/app/dist/vite") + "/**/*.css");
  const css = await fs.readFile(cssFiles[0], "utf-8");
  const cssToInject = `<style>
${css}
</style>`
  const html = appHtml
    .replace("<head>\n", `<head>\n${htmlToInject}\n${cssToInject}\n`);
  await fs.writeFile(path.join(dir, "console/app/dist/vite/index.html"), html, "utf-8");


  console.log("Creating the console ui archive...");
  await tar.create({
    file: "./console-build/console.tgz",
    C: path.join(dir, "console/app/dist/vite"),
    gzip: true
  }, ["."]);

  console.log("Updating console server...");
  await fs.cp(path.join(dir, "console/server/dist/index.js"), "./console-build/console.server.js");
}

(async () => {
  await updateWing();
  await updateConsole();

  console.log("Done...")
})();