export interface CompilationItem {
  name: string;
  contents: string;
}

export interface CompilationResult {
  files: CompilationItem[];
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
  
  const result = await fetch('https://t3qjyxtsq1.execute-api.us-east-1.amazonaws.com/prod', options)
  const body: CompilationResult = await result.json()
  if (body.error) {
    throw new Error(`${body.error.stdout}\n${body.error.stderr}`)
  }
  body.files = body.files.map(f => ({ ...f, name: f.name.replace(/.*tfaws\//, "")}) )
  return body;
}
