import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { assert, test } from 'vitest'
import { compileRoute } from '.'
import Zip from 'adm-zip';
import { Base64Binary } from '@wing-playground/shared';
import { getMockReq, getMockRes } from 'vitest-mock-express'

const { res, clearMockRes } = getMockRes();

beforeEach(() => {
  clearMockRes();
});

test('test server', async () => {
  const body = {
    code: "bring cloud;\nlet b = new cloud.Bucket();\nnew cloud.Function(inflight (_: str) => {\n  assert(b.list().length == 0);\n  b.put(\"hello.txt\", \"world\");\n  assert(b.list().length == 1);\n}) as \"test:put\";\nnew cloud.Function(inflight (_: str) => {\n  b.put(\"hello.txt\", \"world\");\n  assert(b.get(\"hello.txt\") == \"world\");\n}) as \"test:get\";",
    target: 'tf-aws'
  }
  const response = await compileRoute(getMockReq({ body }), res);
  expect(res.send).toBeCalled();
  // const buffer = Base64Binary.decode(, null)
  // const zip = new Zip(buffer, { readEntries: true });
  // assert.isTrue(typeof zip.readAsText('main.tf.json') === 'string');
}, 60000)