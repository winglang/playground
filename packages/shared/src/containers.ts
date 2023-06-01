import { WebContainer } from '@webcontainer/api';
import files from './files';

import containerPackageUrl from '@wing-playground/console-build/dist/playground.tgz?url'
import tarGzCode from "./assets/tar.gz.js?url";

import constructsJSIIUrl from "constructs/.jsii?url";
import constructsPackageJsonUrl from "constructs/package.json?url";

export enum ConsoleLayouts {
  Playground = 2,
  Tour = 3
}

export async function initContainer(): Promise<WebContainer> {
  const jsExamples = import.meta.glob('../examples/*.js', { as: 'raw' });
  const examples = await Promise.all(Object.keys(jsExamples).map(async e => {
    const contents = await jsExamples[e]();
    return {
      [e.split("/").pop()!]: {
        file: {
          contents
        }
      }
    }
  }));


  const [containerPackageData,
    tarGzCodeString,
    constructsJSIIString, constructsPackageJsonString] = await Promise.all([
    fetch(containerPackageUrl).then((d) => d.arrayBuffer()),
    fetch(tarGzCode).then((d) => d.text()),
    fetch(constructsJSIIUrl).then((d) => d.text()),
    fetch(constructsPackageJsonUrl).then((d) => d.text()),
  ])
  console.log('booting container', new Date())
  const webcontainerInstance = await WebContainer.boot();
  console.log('mounting files', new Date())
  Object.assign(files.node_modules.directory.constructs.directory, {
    '.jsii': { file: { contents: constructsJSIIString } },
    'package.json': { file: { contents: constructsPackageJsonString } }
  })
  await webcontainerInstance.mount(Object.assign({}, files as any,
    { 'playground.tgz': { file: { contents: new Uint8Array(containerPackageData) } } },
    { 'tar.gz.js': { file: { contents: tarGzCodeString } } },
    ...examples
  ));
  return webcontainerInstance
}

export async function installDependencies(webcontainerInstance: WebContainer, consoleLayout: ConsoleLayouts): Promise<string> {
    const chmod = await webcontainerInstance.spawn('chmod', ['+x', 'node_modules/.bin/wing']);
    chmod.output.pipeTo(
        new WritableStream({
            write(data) {
                console.log(data, new Date());
            }
        })
    );
    // Wait for chmod command to exit
    await chmod.exit;

    const unzip = await webcontainerInstance.spawn('node', ['unzip.js']);
    unzip.output.pipeTo(
        new WritableStream({
            write(data) {
                console.log(data, new Date());
            }
        })
    );
    // Wait for unzip command to exit
    await unzip.exit;

    const cnsle = await webcontainerInstance.spawn('node', ['server.js']);
    cnsle.output.pipeTo(
        new WritableStream({
            write(data) {
                console.log(data);
            }
        })
    );

    return new Promise((resolve) => {
      webcontainerInstance.on('server-ready', (port, url) => {
        if (port !== 8181) {
          return
        }
        console.log('webcontainer server opened', url, new Date())
        resolve(`${url}?port=34443&layout=${consoleLayout.valueOf()}`)
      });
    })
}

export async function test(webcontainerInstance: WebContainer, ): Promise<number> {
  const compileProcess = await webcontainerInstance.spawn('npm', ['run', 'test']);
  compileProcess.output.pipeTo(
      new WritableStream({
          write(data) {
            console.log(data);
          }
      })
  );
  return compileProcess.exit;
}

export async function prepareForEvaluation(webcontainerInstance: WebContainer, content?: string, fileName?: string): Promise<void | undefined> {
  if (!content) {
    return
  }

  let localName = 'test.w';
  if (!fileName?.endsWith('.w')) {
    localName = fileName!;
  }

  return webcontainerInstance.fs.writeFile(localName, content)
}
