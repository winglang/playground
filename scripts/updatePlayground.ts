import { request } from "@octokit/request";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import tar from "tar";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const authorization = `token ${process.env.GITHUB_TOKEN}`;

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
  console.log("Downloading latest wing release...");
  const release = await request("GET /repos/winglang/wing/releases/latest", {
    headers: {
      authorization,
    },
  });
  console.log("Wing Release:", release);
  console.log("Wing Release version:", release.data.tag_name);

  console.log("Looking for the winglang assets...");
  const winglang = release.data.assets.find((asset) => asset.name === "winglang-webpack.tgz");
  const winglangSdk = release.data.assets.find((asset) => asset.name === "winglang-sdk-webpack.tgz");
  const wingc = release.data.assets.find((asset) => asset.name === "wingc.wasm");
  console.log("Assets:", winglang, winglangSdk, wingc);

  return Promise.all([
    updateAsset("wing", winglang, "./wing/winglang-webpack.tgz"),
    updateAsset("wing", winglangSdk, "./wing/winglang-sdk-webpack.tgz"),
    updateAsset("wing", wingc, "./wing/wingc.wasm")
  ]);
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
  const finalHtml = appHtml.replace("<head>\n", `<head>\n${htmlToInject}\n`);
  await fs.writeFile(path.join(dir, "console/app/dist/vite/index.html"), finalHtml, "utf-8");

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
})();