import Zip from 'adm-zip';
import { Base64Binary } from './utils';

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
    headers: {'Content-Type': ''},
    body: JSON.stringify({ code, target })
  };
  
  try {
    const result = await fetch('https://t3qjyxtsq1.execute-api.us-east-1.amazonaws.com/prod', options)
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
    
    const zipText = await result.text();
    // const zipText = str;

    const buffer = Base64Binary.decode(zipText, null)
    const zip = new Zip(buffer, { readEntries: true });
  
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
