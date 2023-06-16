import { WebContainer } from "@webcontainer/api";
import { files } from "./files";

export enum ConsoleLayouts {
  Playground = 2,
  Tour = 3,
}

export async function initContainer(): Promise<WebContainer> {
  const jsExamples = import.meta.glob("../examples/*.js", { as: "raw" });
  const examples = await Promise.all(
    Object.keys(jsExamples).map(async (e) => {
      const contents = await jsExamples[e]();
      return {
        [e.split("/").pop()!]: {
          file: {
            contents,
          },
        },
      };
    }),
  );

  console.log("booting container", new Date());
  const webcontainerInstance = await WebContainer.boot();
  console.log("mounting files", new Date());
  await webcontainerInstance.mount({ ...files, ...(examples as any) });
  return webcontainerInstance;
}

export async function installDependencies(
  webcontainerInstance: WebContainer,
  consoleLayout: ConsoleLayouts,
): Promise<string> {
  {
    const install = await webcontainerInstance.spawn("pnpm", ["install"]);
    install.output.pipeTo(
      new WritableStream({
        write(data) {
          console.log(data, new Date());
        },
      }),
    );
    // Wait for chmod command to exit
    await install.exit;
  }

  const cnsle = await webcontainerInstance.spawn("node", ["index.js"]);
  cnsle.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data);
      },
    }),
  );

  return new Promise((resolve) => {
    webcontainerInstance.on("server-ready", (port, url) => {
      console.log("webcontainer server opened", url, new Date());
      resolve(`${url}?layout=${consoleLayout.valueOf()}`);
    });
  });
}

export async function test(
  webcontainerInstance: WebContainer,
): Promise<number> {
  const compileProcess = await webcontainerInstance.spawn("npm", [
    "run",
    "test",
  ]);
  compileProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data);
      },
    }),
  );
  return compileProcess.exit;
}

export async function prepareForEvaluation(
  webcontainerInstance: WebContainer,
  content?: string,
  fileName?: string,
): Promise<void | undefined> {
  if (!content) {
    return;
  }

  let localName = "test.w";
  if (!fileName?.endsWith(".w")) {
    localName = fileName!;
  }

  return webcontainerInstance.fs.writeFile(localName, content);
}
