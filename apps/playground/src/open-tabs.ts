import { createCookie } from "@wing-playground/cookie";
import { nanoid } from "nanoid";

const COOKIE_NAME = "play-tabs";

const DOMAIN = location.hostname.match(/(?:^|\.)(\w+\.\w+)$/)?.[1];

const cookie = createCookie({ name: COOKIE_NAME });

const getOpenTabs = (): number => {
  return parseInt(cookie.get() ?? "0", 10);
};

const setOpenTabs = (newValue: number) => {
  cookie.set(`${newValue}`, {
    domain: DOMAIN,
  });
};

/**
 *
 * @returns true if the page is being redirected
 */
export const redirectIfTooManyTabs = (): boolean => {
  if (import.meta.env.VITE_REDIRECT_TO) {
    if (getOpenTabs() === 0) {
      location.replace(`${import.meta.env.VITE_REDIRECT_TO}${location.search}`);
      return true;
    }
  }

  if (import.meta.env.VITE_REDIRECT_PATTERN) {
    if (getOpenTabs() >= 2) {
      const url = import.meta.env.VITE_REDIRECT_PATTERN.replace(
        "xxx",
        nanoid(),
      );
      location.replace(`${url}${location.search}`);
      return true;
    }

    setOpenTabs(getOpenTabs() + 1);
    addEventListener("beforeunload", () => {
      setOpenTabs(getOpenTabs() - 1);
    });
  }

  return false;
};
