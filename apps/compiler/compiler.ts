import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { exec } from "node:child_process";
import util from "node:util";
import { Target } from 'winglang/dist/commands/constants';
import { writeFile } from "node:fs/promises";
import { join } from 'node:path';
import Zip from 'adm-zip';
import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';

interface CompileRequest {
  code: string;
  target: Target;
}

const targetToExtension = (target: string): string => {
  return target.toLowerCase().replace(/-/g, "");
}

export function startCompiler() {
  const compileRoute = async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
  
    const request = req.body as CompileRequest;
    console.log(`Request: ${JSON.stringify(request, null, 2)}`);
  
    if (!request) {
      return res.status(400).json({ error: 'no body' });
    }
  
    try {
      const rand = Math.random();
      const wingFile = `/tmp/${rand}.w`;
      await writeFile(wingFile, request.code, "utf-8");
      
      await util.promisify(exec)(`${require.resolve('winglang/bin/wing')} compile ${wingFile} -t ${request.target}`);
      const outDir = join('/tmp', 'target', `${rand}.${targetToExtension(request.target)}`);
      console.log(`Out dir: ${outDir}`);
  
      let zip = new Zip();
      zip.addLocalFolder(outDir);
      let buffer: Buffer = zip.toBuffer();
      console.log(`Zipped`);
    
      return res.send(buffer);
    } catch (err) {
      console.log(`Error: ${JSON.stringify(err, null, 2)}`);
      return res.status(500).json({ error: err });
    }
  };
  
  const app = express();
  app.use(bodyParser.json());
  const port = 3000;
  
  app.get('/', async (req: Request, res: Response) => {
    return res.send('success');
  });
  
  app.options('/', async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    return res.send('success');
  });
  
  app.post('/', compileRoute);
  
  app.listen(port, () => console.info(`Express listening on port ${port}!`));
}
