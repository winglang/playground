import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { assert, test } from 'vitest'
import { handler } from '.'

test('test server', async () => {
  const body = {
    code: 'log("123");',
    target: 'tf-gcp'
  }
  const response = await handler({ body: "{\"code\":\"bring cloud;\\n\\nlet b = new cloud.Bucket();\\n\\nnew cloud.Function(inflight (_: str) => {\\n  assert(b.list().length == 0);\\n  b.put(\\\"hello.txt\\\", \\\"world\\\");\\n  assert(b.list().length == 1);\\n}) as \\\"test:put\\\";\\n\\nnew cloud.Function(inflight (_: str) => {\\n  b.put(\\\"hello.txt\\\", \\\"world\\\");\\n  assert(b.get(\\\"hello.txt\\\") == \\\"world\\\");\\n}) as \\\"test:get\\\";\",\"target\":\"tf-aws\"}" } as APIGatewayEvent, null as any);
  const json = JSON.parse(response.body);
  assert.isTrue(json.files.filter(f => f.name.endsWith('main.tf.json')).length === 1);
}, 60000)