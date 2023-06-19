import { FileSystemTree } from "@webcontainer/api";

import indexJs from "@wing-playground/container-files/lib/index.js?raw";
import testW from "@wing-playground/container-files/lib/test.w?raw";
import pkgJson from "@wing-playground/container-files/lib/package.json?raw";
import pnpmLock from "@wing-playground/container-files/lib/pnpm-lock.yaml?raw";

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
