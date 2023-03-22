import { WebContainer } from '@webcontainer/api';
import files from './files';
// import files2 from './files2';

import pack11 from './assets/sdk/sdk.tgz?url'
import pack22 from './assets/wing/wing.tgz?url'
import pack33 from './assets/express.tgz?url'
import pack44 from './assets/esbuild-wasm.tgz?url'

import pack1 from './assets/winglang-sdk-0.0.0.tgz?url'
import pack2 from './assets/winglang-0.0.0.tgz?url'
import pack3 from './wing-build/modules.tgz?url'

// let pack1Str = await fetch(pack1).then((d) => d.text());

import tarGzCode from "./assets/tar.gz.js.txt?url";
import consoleCode from "./assets/console.js.txt?url";
import consoleUICode from "./assets/console/index.js.txt?url";
import consoleCSSCode from "./assets/console/index.css.txt?url";

// import sdkCode from "./assets/sdk/dist2/index.js.txt?url";
// import jsiiCode from "./assets/sdk/.jsii?url";
// import wingCode from "./assets/wing/dist2/index.js.txt?url";
// import wing1Code from "./assets/wing/dist2/index1.js.txt?url";
// import wingXDGCode from "./assets/wing/dist2/xdg-open.txt?url";
// import wingcURL from "./assets/wing/wingc.wasm?url";
// const consoleServer = await import("./assets/console.mjs?raw").then(
//   (i) => i.default
// );


// let pack1Data = await fetch(pack1).then((d) => d.arrayBuffer());
// let pack2Data = await fetch(pack2).then((d) => d.arrayBuffer());
// let pack3Data = await fetch(pack3).then((d) => d.arrayBuffer());

// let tarGzCodeString = await fetch(tarGzCode).then((d) => d.text());
// let consoleCodeString = await fetch(consoleCode).then((d) => d.text());
// let consoleUICodeString = await fetch(consoleUICode).then((d) => d.text());
// let consoleCSSCodeString = await fetch(consoleCSSCode).then((d) => d.text());

// let sdkCodeString = await fetch(sdkCode).then((d) => d.text());
// let jsiiCodeString = await fetch(jsiiCode).then((d) => d.text());
// let wingCodeString = await fetch(wingCode).then((d) => d.text());
// let wing1CodeString = await fetch(wing1Code).then((d) => d.text());
// let wingXDGCodeString = await fetch(wingXDGCode).then((d) => d.text());
// let wasmFetchData = await fetch(wingcURL).then((d) => d.arrayBuffer());

export async function initContainer(): Promise<WebContainer> {
  (files as any)['node_modules'] = {
    directory: {
      '@winglang': {
        directory: {
          'sdk': {
            directory: {
              'empty': {
                file: {
                  contents: ""
                }
              }
            }
          }
        }
      },
      'winglang': {
        directory: {
          'empty': {
            file: {
              contents: ""
            }
          }
        }
      },
      'express': {
        directory: {
          'empty': {
            file: {
              contents: ""
            }
          }
        }
      }
    }
  }
  const [pack11Data, pack22Data, pack33Data, pack44Data,
    tarGzCodeString, consoleCodeString, consoleUICodeString, consoleCSSCodeString] = await Promise.all([
    fetch(pack11).then((d) => d.arrayBuffer()), 
    fetch(pack22).then((d) => d.arrayBuffer()),
    fetch(pack33).then((d) => d.arrayBuffer()),
    fetch(pack44).then((d) => d.arrayBuffer()),
  
    fetch(tarGzCode).then((d) => d.text()),
    fetch(consoleCode).then((d) => d.text()),
    fetch(consoleUICode).then((d) => d.text()),
    fetch(consoleCSSCode).then((d) => d.text())
  ])

  // const [pack1Data, pack2Data, pack3Data, 
  //   tarGzCodeString, consoleCodeString, consoleUICodeString, consoleCSSCodeString] = await Promise.all([
  //   fetch(pack1).then((d) => d.arrayBuffer()), 
  //   fetch(pack2).then((d) => d.arrayBuffer()),
  //   fetch(pack3).then((d) => d.arrayBuffer()),
  
  //   fetch(tarGzCode).then((d) => d.text()),
  //   fetch(consoleCode).then((d) => d.text()),
  //   fetch(consoleUICode).then((d) => d.text()),
  //   fetch(consoleCSSCode).then((d) => d.text())
  // ])

  Object.assign(files.static.directory, 
    { 'index.js': { file: { contents: consoleUICodeString } } },
    { 'index.css': { file: { contents: consoleCSSCodeString } } }
  )
  console.log('booting container', new Date())
  const webcontainerInstance = await WebContainer.boot();
  console.log('mounting files', new Date())
  await webcontainerInstance.mount(Object.assign({}, files as any, 
    { 'sdk.tgz': { file: { contents: new Uint8Array(pack11Data) } } },
    { 'wing.tgz': { file: { contents: new Uint8Array(pack22Data) } } },
    { 'express.tgz': { file: { contents: new Uint8Array(pack33Data) } } },
    { 'esbuild-wasm.tgz': { file: { contents: new Uint8Array(pack44Data) } } },

    { 'tar.gz.js': { file: { contents: tarGzCodeString } } },
    // { 'winglang-sdk-0.0.0.tgz': { file: { contents: new Uint8Array(pack1Data) } } },
    // { 'winglang-0.0.0.tgz': { file: { contents: new Uint8Array(pack2Data) } } },
    // { 'modules.tgz': { file: { contents: new Uint8Array(pack3Data) } } },
    { 'console.js': { file: { contents: consoleCodeString } } },
  ));
  return webcontainerInstance
}

export async function installDependencies(webcontainerInstance: WebContainer): Promise<string> {
    // Install dependencies
    // await webcontainerInstance.fs.writeFile('winglang-sdk-0.0.0.tgz', pack1Data)
    // await webcontainerInstance.fs.writeFile('winglang-0.0.0.tgz', pack2Data)
    // const installProcess = await webcontainerInstance.spawn('npm', ['install']);
    // installProcess.output.pipeTo(
    //     new WritableStream({
    //         write(data) {
    //             console.log(data);
    //         }
    //     })
    // );
    // // Wait for install command to exit
    // await installProcess.exit;

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
        resolve(url)
      });
    })
}

export async function compile(webcontainerInstance: WebContainer): Promise<string> {
  return "asd"
  const compileProcess = await webcontainerInstance.spawn('npm', ['run', 'compile']);
  compileProcess.output.pipeTo(
      new WritableStream({
          write(data) {
              console.log(data);
          }
      })
  );
  await compileProcess.exit;
  const newFile = await webcontainerInstance.fs.readFile(
    'target/test.tfaws/main.tf.json',
    'utf8'
  );
  return newFile;
}

export async function test(webcontainerInstance: WebContainer, ): Promise<number> {
  const compileProcess = await webcontainerInstance.spawn('npm', ['run', 'test']);
  let out = ""
  compileProcess.output.pipeTo(
      new WritableStream({
          write(data) {
            out+=data
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
  
  try {
    await webcontainerInstance.fs.rm('target/test.tfaws/main.tf.json')
  } catch {}

  return webcontainerInstance.fs.writeFile('test.w', content)
}