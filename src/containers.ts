import { WebContainer } from '@webcontainer/api';
import files from './files';

export async function initContainer(): Promise<WebContainer> {
  const webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(files);
  return webcontainerInstance
}

export async function installDependencies(webcontainerInstance: WebContainer) {
    // Install dependencies
    const installProcess = await webcontainerInstance.spawn('npm', ['install']);
    installProcess.output.pipeTo(
        new WritableStream({
            write(data) {
                console.log(data);
            }
        })
    );
    // Wait for install command to exit
    return installProcess.exit;
}

export async function compile(webcontainerInstance: WebContainer): Promise<string> {
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