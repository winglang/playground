import { FileSystemTree } from "@webcontainer/api";

import indexJs from "../container-files/index.js?raw";
import testW from "../container-files/test.w?raw";
import pkgJson from "../container-files/package.json?raw";
import pnpmLock from "../container-files/pnpm-lock.yaml?raw";

export const files: FileSystemTree = {
  "index.js": {
    file: {
      contents: indexJs,
    },
  },
  "test.w": {
    file: {
      contents: testW,
    },
  },
  "package.json": {
    file: {
      contents: pkgJson,
    },
  },
  "pnpm-lock.yaml": {
    file: {
      contents: pnpmLock,
    },
  },
};
