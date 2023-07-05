import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/learn",
  resolve: {
    // preserveSymlinks: true,
    alias: {
      "wasi-js/dist/bindings/node": "wasi-js/dist/bindings/browser",
    },
  },
  plugins: [
    react(),
    nodePolyfills(),
    {
      name: 'configure-response-headers',
      configureServer: server => {
        server.middlewares.use((_req, res, next) => {
            res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless')
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
            next();
        });
      },
      configurePreviewServer: server => {
        server.middlewares.use((_req, res, next) => {
            res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless')
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
            next();
        });
      }
    }
  ],
  worker: {
    format: "es",
    plugins: [nodePolyfills()],
    rollupOptions: {
      preserveSymlinks: true,
    },
  },
  build: {
    target: "es2022",
    outDir: "dist/learn",
    commonjsOptions: {
      // This is needed because winglang is symlinked
      include: [
        // /winglang/,
        /node_modules/,
      ],
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
})
