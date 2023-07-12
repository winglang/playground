/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Time in seconds to wait before showing a warning for slowness.
   */
  readonly VITE_TOO_SLOW_ERROR_SECONDS_THRESHOLD?: number;
  /**
   * The URL of the main site.
   */
  readonly VITE_MAIN_SITE_URL?: string | undefined;
  /**
   * The URL of the subdomain site.
   */
  readonly VITE_SUBDOMAIN_SITE_URL?: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
