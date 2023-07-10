/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Time in seconds to wait before showing a warning for slowness.
  readonly VITE_TOO_SLOW_ERROR_SECONDS_THRESHOLD?: number;
  readonly VITE_REDIRECT_TO?: string | undefined;
  readonly VITE_REDIRECT_PATTERN?: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
