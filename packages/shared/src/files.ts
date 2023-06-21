import { FileSystemTree } from "@webcontainer/api";

import tarGz from "@wing-playground/container-files/assets/tar.gz.js?raw";
import unzip from "@wing-playground/container-files/assets/unzip.js?raw";

export const files: FileSystemTree = {
  "tar.gz.js": {
    file: {
      contents: tarGz,
    },
  },
  "unzip.js": {
    file: {
      contents: unzip,
    },
  },
};
