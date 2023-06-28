import { ConsoleLayouts } from "./containers";
import { getCurrentMode } from "./theme-provider";

export const createConsole = async (consoleLayout: ConsoleLayouts) => {
  const response = await fetch("https://test-play-test.fly.dev/create", {
  // const response = await fetch("http://localhost:3000/create", {
    method: "POST"
  })
  const data = await response.json() as any;
  // const url = `https://${data.machine}.fly.dev/?layout=${consoleLayout.valueOf()}&theme=${getCurrentMode()}`;
  // while (true) {
  //   try {
  //     const res = await fetch(url)
  //     if (res.ok) {
  //       break
  //     }
  //   } catch {

  //   }
  // }
  return { 
    uiUrl: `${data.machine}/?layout=${consoleLayout.valueOf()}&theme=${getCurrentMode()}` as string,
    updateUrl: `${data.machine}/update-code`
  };
};