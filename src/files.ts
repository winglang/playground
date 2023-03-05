export default {
  'test.w': {
    file: {
      contents: `bring cloud;

let b = new cloud.Bucket();

new cloud.Function(inflight (_: str) => {
  assert(b.list().length == 0);
  b.put("hello.txt", "world");
  assert(b.list().length == 1);
}) as "test:put";

new cloud.Function(inflight (_: str) => {
  b.put("hello.txt", "world");
  assert(b.get("hello.txt") == "world");
}) as "test:get";`
    }
  },
  'package.json': {
    file: {
      contents: `
        {
          "name": "example-app",
          "type": "module",
          "dependencies": {
            "winglang": "0.5.57",
            "@winglang/sdk": "0.5.57",
            "cdktf": "0.15.2"
          },
          "scripts": {
            "test": "wing test test.w",
            "compile": "wing compile -t tf-aws test.w"
          }
        }`,
    },
  },
}