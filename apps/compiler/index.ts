import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { exec } from "node:child_process";
import util from "node:util";
import { Target } from '@winglang/compiler';
import { writeFile, readdir } from "node:fs/promises";
import { join } from 'node:path';
import Zip from 'adm-zip';

export interface Request {
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
    const request = JSON.parse(event.body!) as Request;
    await writeFile(wingFile, request.code, "utf-8");
    await util.promisify(exec)(`${join(require.resolve("winglang"), "../../../.bin/wing")} compile ${wingFile} -t ${request.target}`);
    const outDir = join('/tmp', 'target', `${rand}.${targetToExtension(request.target)}`);

    let zip = new Zip();
    zip.addLocalFolder(outDir);
    let buffer: Buffer = zip.toBuffer();
  
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