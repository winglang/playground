import Zip from 'adm-zip';
import { Base64Binary } from './utils';
import { Buffer } from 'buffer'
import * as containers from './containers';
import { WebContainer } from '@webcontainer/api';

export interface CompilationItem {
  name: string;
  contents: string;
}

export interface CompilationResult {
  files: CompilationItem[];
  zip: Zip; 
  error?: {
    stderr: string;
    stdout: string;
  };
}

export const compileToAws = async (code: string): Promise<CompilationResult> => {
  return compile(code, 'tf-aws');
}

export const compileToAzure = async (code: string): Promise<CompilationResult> => {
  return compile(code, 'tf-azure');
}

export const compileToGcp = async (code: string): Promise<CompilationResult> => {
  return compile(code, 'tf-gcp');
}

const compile = async (code: string, target: string): Promise<CompilationResult> => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    // headers: {'Content-Type': ''},
    body: JSON.stringify({ code, target })
  };
  
  try {
    const result = await fetch('https://slmgoj8ai8.execute-api.us-east-1.amazonaws.com/', options)
    // const result = await fetch('http://cdkst-compi-mkxv79clnjy-629413418.us-east-1.elb.amazonaws.com/', options)
    if (!result.ok) {
      if (result.status === 500) {
        const body = await result.json();
        const upgradeMessageIndex = body.error.stderr.indexOf('┌')
        if (upgradeMessageIndex !== -1) {
          body.error.stderr = body.error.stderr.substring(0, upgradeMessageIndex);
        }
        throw new Error(`${body.error.stdout}\n${body.error.stderr}`);
      } else {
        throw new Error('unknown error occured');
      }
    }
    
    // const zipText = await result.text();
    
    const rea = toBuffer(new Uint8Array(await result.arrayBuffer()));
    
    // const buffers = [];
    // for await (const data of result.body!) {
    //   buffers.push(data);
    // }
    // const finalBuffer = Buffer.concat(buffers);

    // const buffer = Base64Binary.decode(zipText, null)
    const zip = new Zip(rea, { readEntries: true });
  
    const files: CompilationItem[] = []
    zip.forEach((entry) => {
      if (entry.isDirectory) {
        return;
      }
  
      if (entry.entryName.endsWith('.zip')) {
        return;
      }
  
      files.push({
        name: entry.entryName,
        contents: entry.getData().toString('utf-8'),
      });
    });
  
    const body: CompilationResult = { files, zip }
    if (body.error) {
      throw new Error(`${body.error.stdout}\n${body.error.stderr}`)
    }
    body.files = body.files.map(f => ({ ...f, name: f.name.replace(/.*tfaws\//, "")}) )
    return body;
    
  } catch (err) {
    throw err;
  }
}

export const localCompile = async (code: string, target: string, webcontainerInstance: WebContainer): Promise<CompilationResult> => {
  try {
    const files = await containers.compile(webcontainerInstance)
  
    const body: CompilationResult = { files, zip: new Zip }
    if (body.error) {
      throw new Error(`${body.error.stdout}\n${body.error.stderr}`)
    }
    body.files = body.files.map(f => ({ ...f, name: f.name.replace(/.*tfaws\//, "")}) )
    return body;
    
  } catch (err) {
    throw err;
  }
}

function toBuffer(view: Uint8Array) {
  const buffer = Buffer.alloc(view.byteLength);
  for (let i = 0; i < buffer.length; ++i) {
    buffer[i] = view[i];
  }

  return buffer;
}
