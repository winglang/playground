import { isSelfHosted } from "./config";
import { ConsoleLayouts } from "./console-layouts";
import { getCurrentMode } from "./theme-provider";

export const createConsole = async (consoleLayout: ConsoleLayouts) => {
  let consoleUrl = import.meta.env.VITE_CONSOLE_SERVER_URL;
  if (isSelfHosted()) {
    consoleUrl = "";
  } else if (!consoleUrl) {
    const response = await fetch(import.meta.env.VITE_CONSOLE_CONTROLLER_URL || "https://winglang-playground.fly.dev/create", {
      method: "POST"
    })
    if (!response.ok) {
      const text = await response.text();
      throw new Error("failed to create console: " + text);
    }
    const data = await response.json() as any;
    console.log("using machine", data.machine);
    consoleUrl = data.machine;
  }

  return {
    uiUrl: `${consoleUrl}/?layout=${consoleLayout.valueOf()}&theme=${getCurrentMode()}`,
    updateUrl: `${consoleUrl}/update-code`
  }
};