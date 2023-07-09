import { ConsoleLayouts } from "./containers";
import { getCurrentMode } from "./theme-provider";

export const createConsole = async (consoleLayout: ConsoleLayouts) => {
  const response = await fetch(import.meta.env.VITE_CONSOLE_CONTROLLER_URL || "https://winglang-playground.fly.dev/create", {
    method: "POST"
  })
  if (!response.ok) {
    const text = await response.text();
    throw new Error("failed to create console: " + text);
  }
  const data = await response.json() as any;
  console.log("using machine", data.machine);
  return { 
    uiUrl: `${data.machine}/?layout=${consoleLayout.valueOf()}&theme=${getCurrentMode()}`,
    updateUrl: `${data.machine}/update-code`
  };
};