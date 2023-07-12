import { customAlphabet, urlAlphabet } from "nanoid";

const nanoid = customAlphabet(urlAlphabet, 10);
const TAB_ID = nanoid();

type Events = {
  ping: `count-open-tabs.ping.${string}`;
  ack: `count-open-tabs.ack.${string}.${string}`;
};

// Respond to pings from other tabs.
addEventListener("storage", ({ key, newValue }) => {
  // If there's no new value, it means the key was removed.
  if (!newValue) {
    return;
  }

  // Ignore events that aren't pings.
  if (!key?.startsWith("count-open-tabs.ping.")) {
    return;
  }

  // The new value is the ID of the tab that sent the ping.
  const originId = newValue;

  // Acknowledge the ping.
  const event: Events["ack"] = `count-open-tabs.ack.${originId}.${TAB_ID}`;
  localStorage.setItem(event, TAB_ID);
  localStorage.removeItem(event);
});

export interface CountSamesiteTabsOptions {
  /**
   * Amount of time to wait for other tabs to respond, in milliseconds.
   *
   * @default 10
   */
  waitThreshold?: number;
}

export interface CountSamesiteTabsResult {
  samesiteTabs: number;
}

/**
 * Counts the total number of tabs open in the same site.
 *
 * Uses localStorage to communicate with the other tabs.
 */
export const countSamesiteTabs = async (
  options?: CountSamesiteTabsOptions,
): Promise<CountSamesiteTabsResult> => {
  const waitThreshold = options?.waitThreshold ?? 10;

  let totalTabs = 1;
  const listener = ({ key, newValue }: StorageEvent) => {
    // If there's no new value, it means the key was removed.
    if (!newValue) {
      return;
    }

    // Ignore events that aren't acknowledgements.
    if (!key?.startsWith(`count-open-tabs.ack.${TAB_ID}.`)) {
      return;
    }

    totalTabs += 1;
  };

  addEventListener("storage", listener);

  const event: Events["ping"] = `count-open-tabs.ping.${TAB_ID}`;
  localStorage.setItem(event, TAB_ID);
  localStorage.removeItem(event);

  await new Promise((resolve) => setTimeout(resolve, waitThreshold));

  removeEventListener("storage", listener);

  return {
    samesiteTabs: totalTabs,
  };
};
