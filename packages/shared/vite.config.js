import { defineConfig } from 'vite'
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    preserveSymlinks: true,
    alias: {
      "wasi-js/dist/bindings/node": "wasi-js/dist/bindings/browser",
    },
  },
  plugins: [
    nodePolyfills(),
  ],
  build: {
    rollupOptions: {
      input: './index.ts',
    },
    target: "es2022",
    commonjsOptions: {
      // This is needed because winglang is symlinked
      include: [/winglang/, /node_modules/],
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
  optimizeDeps: {
    include: ["winglang"],
    esbuildOptions: {
      target: "es2022",
      preserveSymlinks: true,
    },
    force: true,
  }
});
