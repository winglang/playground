const { applyPatch } = require("patch-package/dist/applyPatches.js");
const { join } = require("path");
const patchFilePath = join(__dirname, "./lib/patches/@winglang__sdk.patch");
console.log("patching file", patchFilePath);
if (!applyPatch({ patchFilePath, reverse: false })) {
  throw new Error("failed to patch file", patchFilePath);
}