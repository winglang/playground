import { WebContainer } from '@webcontainer/api';
import files from './files';

import winglangSdkUrl from '../wing/winglang-sdk-webpack.tgz?url'
import winglangUrl from '../wing/winglang-webpack.tgz?url'
import codespanWasmUrl from '../wing/codespan-wasm.tgz?url'
import vm2Url from '../wing/vm2.tgz?url'
import expressUrl from './assets/express.tgz?url'
import tarGzCode from "./assets/tar.gz.js?url";
import consoleCode from "../console-build/console.server.js?url";
import consoleUrl from "../console-build/console.tgz?url";

import constructsJSIIUrl from "constructs/.jsii?url";
import constructsPackageJsonUrl from "constructs/package.json?url";

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


  const [winglangSdkData, winglangData, expressData, codespanWasmData, vm2Data,
    tarGzCodeString, consoleCodeString, allConsoleCode,
    constructsJSIIString, constructsPackageJsonString] = await Promise.all([
    fetch(winglangSdkUrl).then((d) => d.arrayBuffer()), 
    fetch(winglangUrl).then((d) => d.arrayBuffer()),
    fetch(expressUrl).then((d) => d.arrayBuffer()),
    fetch(codespanWasmUrl).then((d) => d.arrayBuffer()),
    fetch(vm2Url).then((d) => d.arrayBuffer()),
    fetch(tarGzCode).then((d) => d.text()),
    fetch(consoleCode).then((d) => d.text()),
    fetch(consoleUrl).then((d) => d.arrayBuffer()),
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
    { 'sdk.tgz': { file: { contents: new Uint8Array(winglangSdkData) } } },
    { 'wing.tgz': { file: { contents: new Uint8Array(winglangData) } } },
    { 'express.tgz': { file: { contents: new Uint8Array(expressData)} } },
    { 'codespan-wasm.tgz': { file: { contents: new Uint8Array(codespanWasmData) } } },
    { 'vm2.tgz': { file: { contents: new Uint8Array(vm2Data) } } },
    { 'tar.gz.js': { file: { contents: tarGzCodeString } } },
    { 'console.server.js': { file: { contents: consoleCodeString } } },
    { 'console.tgz': { file: { contents: new Uint8Array(allConsoleCode) } } },
    ...examples
  ));
  return webcontainerInstance
}

export async function installDependencies(webcontainerInstance: WebContainer): Promise<string> {
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
        resolve(`${url}?port=34443`)
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

export async function prepareForEvaluation(webcontainerInstance: WebContainer, content?: string): Promise<void | undefined> {
  if (!content) {
    return
  }

  return webcontainerInstance.fs.writeFile('test.w', content)
}