import { WebContainer } from '@webcontainer/api';
import files from './files';
// import files2 from './files2';

import pack1 from './assets/winglang-sdk-0.0.0.tgz?url'
import pack2 from './assets/winglang-0.0.0.tgz?url'

let pack1Data = await fetch(pack1).then((d) => d.arrayBuffer());
let pack2Data = await fetch(pack2).then((d) => d.arrayBuffer());

export async function initContainer(): Promise<WebContainer> {
  const webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(Object.assign({}, files as any, 
    { 'winglang-sdk-0.0.0.tgz': { file: { contents: new Uint8Array(pack1Data) } } },
    { 'winglang-0.0.0.tgz': { file: { contents: new Uint8Array(pack2Data) } } }
  ));
  return webcontainerInstance
}

export async function installDependencies(webcontainerInstance: WebContainer) {
    // Install dependencies
    // await webcontainerInstance.fs.writeFile('winglang-sdk-0.0.0.tgz', pack1Data)
    // await webcontainerInstance.fs.writeFile('winglang-0.0.0.tgz', pack2Data)
    const installProcess = await webcontainerInstance.spawn('npm', ['install']);
    installProcess.output.pipeTo(
        new WritableStream({
            write(data) {
                console.log(data);
            }
        })
    );
    // Wait for install command to exit
    await installProcess.exit;

    const unzip = await webcontainerInstance.spawn('node', ['unzip.js']);
    unzip.output.pipeTo(
        new WritableStream({
            write(data) {
                console.log(data);
            }
        })
    );
    // Wait for unzip command to exit
    return unzip.exit;
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
  
  try {
    await webcontainerInstance.fs.rm('target/test.tfaws/main.tf.json')
  } catch {}

  return webcontainerInstance.fs.writeFile('test.w', content)
}