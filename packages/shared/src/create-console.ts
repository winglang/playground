import { ConsoleLayouts } from "./containers";
import { getCurrentMode } from "./theme-provider";

export const createConsole = async (consoleLayout: ConsoleLayouts) => {
  const response = await fetch(import.meta.env.VITE_CONSOLE_CONTROLLER_URL || "https://test-play-test.fly.dev/create", {
    method: "POST"
  })
  const data = await response.json() as any;
  console.log("using machine", data.machine);
  return { 
    uiUrl: `${data.machine}/?layout=${consoleLayout.valueOf()}&theme=${getCurrentMode()}` as string,
    updateUrl: `${data.machine}/update-code`
  };
};