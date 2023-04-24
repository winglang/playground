import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { exec } from "node:child_process";
import util from "node:util";
import { compile, Target } from 'winglang/dist/commands/compile';
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join } from 'node:path';

export interface Request {
  code: string;
  target: Target;
}

const headers = {
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
      headers,
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
    await util.promisify(exec)(`./node_modules/.bin/wing compile ${wingFile} -t ${request.target}`);
    const outDir = join('/tmp', 'target', `${rand}.${targetToExtension(request.target)}`);
    const fileList = await walk(outDir);
    const files = await Promise.all(fileList.filter(f => !f.endsWith(".zip")).map(async f => {
      const contents = await readFile(f, 'utf-8')
      return { name: f, contents };
    }));
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        files,
      }),
    };
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err, null, 2)}`);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        error: err,
      }),
    };
  }
};