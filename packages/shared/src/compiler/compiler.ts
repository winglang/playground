import Zip from 'adm-zip';
import { Base64Binary } from '../utils';
import { CompilationRequest } from './request';

export enum Target {
  SIM = 'sim',
  TFAWS = 'tf-aws',
  TFGCP = 'tf-gcp',
  TFAzure = 'tf-azure'
}

export interface CompilationItem {
  name: string;
  contents: string;
}

export interface CompilationResult {
  files: CompilationItem[];
  zip: Zip;
  stderr: string;
  stdout: string;
  error?: {
    stderr: string;
    stdout: string;
  };
}

const compile = async (code: string, target: string): Promise<CompilationResult> => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': ''},
    body: JSON.stringify({ code, target })
  };

  try {
    const result = await fetch('https://99cysfsbp6.execute-api.us-east-1.amazonaws.com/prod', options)
    if (!result.ok) {
      if (result.status === 500) {
        const body = await result.json();
        const upgradeMessageIndex = body.error.stderr.indexOf('┌')
        if (upgradeMessageIndex !== -1) {
          body.error.stderr = body.error.stderr.substring(0, upgradeMessageIndex);
        }

        return {
          files: [],
          zip: new Zip(),
          stderr: "",
          stdout: "",
          error: {
            stderr: body.error.stderr,
            stdout: body.error.stdout,
          }
        }
      } else {
        return {
          files: [],
          zip: new Zip(),
          stderr: "",
          stdout: "",
          error: {
            stderr: 'unknown error occured',
            stdout: '',
          }
        }
      }
    }

    const { stderr, stdout, data } = await result.json();
    const buffer = Base64Binary.decode(data, null)
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

    const body: CompilationResult = { files, zip, stderr, stdout }
    if (!body.error) {
      body.files = body.files.map(f => ({ ...f, name: f.name.replace(/.*tfaws\//, "")}) );
    }
    return body;

  } catch (err) {
    throw err;
  }
}

export class Compiler {
  compilations: Map<string, Promise<CompilationResult>>;
  constructor() {
    this.compilations = new Map();
  }

  async compile(request: CompilationRequest): Promise<CompilationResult> {
    const sha = await request.sha();
    if (this.compilations.has(sha)) {
      return this.compilations.get(sha)!;
    }

    return compile(request.code, request.target);
  }

  async submit(request: CompilationRequest) {
    const sha = await request.sha();
    if (this.compilations.has(sha)) {
      return;
    }

    this.compilations.set(sha, compile(request.code, request.target));
  }
}
