import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const base_path = process.env.VITE_BASE_PATH || "./";
const out_dir = process.env.VITE_OUT_DIR;

// https://vitejs.dev/config/
export default defineConfig({
  base: base_path,
  resolve: {
    alias: {
      "wasi-js/dist/bindings/node": "wasi-js/dist/bindings/browser",
      "fs/promises": "debug",
      "ts4w": "debug"
    },
  },
  plugins: [
    react(),
    nodePolyfills(),
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
      configurePreviewServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
    },
  ],
  worker: {
    format: "es",
    plugins: [nodePolyfills()],
    rollupOptions: {
      preserveSymlinks: true,
    },
  },
  build: {
    outDir: out_dir,
    target: "es2022",
  },
});
