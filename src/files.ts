export default {
  'unzip.js': {
    file: {
      contents: `
console.log(1)


import targz from 'tar.gz';

// Using promises
targz().extract('winglang-sdk-0.0.0.tgz', 'node_modules/@winglang')
  .then(async function(){
    await targz().extract('winglang-0.0.0.tgz', 'node_modules')
    console.log('Job done!');
  })
  .catch(function(err){
    console.log('Something is wrong ', err.stack);
  });
      `
    }
  },
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
            "chalk": "^4.1.2",
            "commander": "^10.0.0",
            "compare-versions": "^5.0.3",
            "constructs": "~10.1.228",
            "debug": "^4.3.4",
            "is-installed-globally": "^0.4.0",
            "open": "^8.4.0",
            "tar.gz": "^1.0.7",
            "update-notifier": "^6.0.2",
            "vscode-languageserver": "^8.0.2"
          },
          "scripts": {
            "test": "./node_modules/winglang/bin/wing test test.w",
            "compile": "./node_modules/winglang/bin/wing compile -t tf-aws test.w"
          }
        }`,
    },
  },
}