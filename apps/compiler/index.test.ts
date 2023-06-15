import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { assert, test } from 'vitest'
import { handler } from '.'
import Zip from 'adm-zip';
import { Base64Binary } from '../../packages/shared/src/utils';

test('test server', async () => {
  const response = await handler({ body: "{\"code\":\"bring cloud;\\n\\nlet b = new cloud.Bucket();\\n\\nnew cloud.Function(inflight (_: str) => {\\n  assert(b.list().length == 0);\\n  b.put(\\\"hello.txt\\\", \\\"world\\\");\\n  assert(b.list().length == 1);\\n}) as \\\"test:put\\\";\\n\\nnew cloud.Function(inflight (_: str) => {\\n  b.put(\\\"hello.txt\\\", \\\"world\\\");\\n  assert(b.get(\\\"hello.txt\\\") == \\\"world\\\");\\n}) as \\\"test:get\\\";\",\"target\":\"tf-aws\"}" } as APIGatewayEvent, null as any);
  const buffer = Base64Binary.decode(response.body, null)
  const zip = new Zip(buffer, { readEntries: true });
  assert.isTrue(typeof zip.readAsText('main.tf.json') === 'string');
}, 60000)