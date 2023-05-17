import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { exec } from "node:child_process";
import util from "node:util";
import { Target } from 'winglang/dist/commands/constants';
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join } from 'node:path';
import Zip from 'adm-zip';

import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';

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

app.post('/', async (req: Request, res: Response) => {
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
    await util.promisify(exec)(`./node_modules/.bin/wing compile ${wingFile} -t ${request.target}`);
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
});

app.listen(port, () => console.info(`Express listening on port ${port}!`));

export interface CompileRequest {
  code: string;
  target: Target;
}

const cors = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
}

const walk = async (dirPath) => {
  const files: string[] = [];
  const walkImpl = async (dirPath) => {
    return Promise.all(
      await readdir(dirPath, { withFileTypes: true }).then((entries) => entries.map((entry) => {
        const childPath = join(dirPath, entry.name)
        return entry.isDirectory() ? walkImpl(childPath) : files.push(childPath)
      })),
    )
  }
  await walkImpl(dirPath)
  return files
}

const targetToExtension = (target: string): string => {
  return target.toLowerCase().replace(/-/g, "");
}

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);

  if (!event.body) {
    return {
      statusCode: 400,
      headers: cors,
      body: JSON.stringify({
        message: 'no body',
      }),
    }
  }

  try {
    const rand = Math.random();
    const wingFile = `/tmp/${rand}.w`;
    const request = JSON.parse(event.body!) as CompileRequest;
    await writeFile(wingFile, request.code, "utf-8");
    await util.promisify(exec)(`./node_modules/.bin/wing compile ${wingFile} -t ${request.target}`);
    const outDir = join('/tmp', 'target', `${rand}.${targetToExtension(request.target)}`);

    let zip = new Zip();
    zip.addLocalFolder(outDir);
    let buffer: Buffer = zip.toBuffer();

    // const fileList = await walk(outDir);
    // const files = await Promise.all(fileList.filter(f => !f.endsWith(".zip")).map(async f => {
    //   const contents = await readFile(f, 'utf-8')
    //   return { name: f, contents };
    // }));

    // headers: Object.assign({}, cors, {
    //   'Content-Type': 'application/zip, application/octet-stream',
    //   'Content-disposition': `attachment; filename=wing.zip`
    // }),
  
    return {
      statusCode: 200,
      headers: cors,
      body: buffer.toString('base64'),
    };
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err, null, 2)}`);
    return {
      statusCode: 500,
      headers: cors,
      body: JSON.stringify({
        error: err,
      }),
    };
  }
};