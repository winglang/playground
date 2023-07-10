/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Time in seconds to wait before showing a warning for slowness.
  readonly VITE_TOO_SLOW_ERROR_SECONDS_THRESHOLD?: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
