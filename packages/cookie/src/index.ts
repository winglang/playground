export interface CreateCookieOptions {
  name: string;
}

export interface SetCookieOptions {
  domain?: string;
  path?: string;
  maxAge?: number;
}

export interface Cookie {
  set(value: string, options?: SetCookieOptions): void;
  get(): string;
}

export const createCookie = (options: CreateCookieOptions): Cookie => {
  const cookieName = encodeURIComponent(options.name);
  const cookieRegExp = new RegExp(`${cookieName}=(\\d+)(?:;|$)`);
  return {
    set(value, options) {
      const components = [`${cookieName}=${encodeURIComponent(value)}`];

      if (options?.domain) {
        components.push(`domain=${encodeURIComponent(options.domain)}`);
      }

      if (options?.path) {
        components.push(`path=${encodeURIComponent(options.path)}`);
      }

      components.push(
        `max-age=${
          options?.maxAge ? encodeURIComponent(options.maxAge) : "31536000"
        }`,
      );

      document.cookie = components.join("; ");
    },
    get() {
      const [, value] = document.cookie.match(cookieRegExp) ?? [];
      return value;
    },
  };
};
