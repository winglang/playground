export default {
  'node_modules': {
    directory: {
      '.bin': {
        directory: {
          'wing': {
            file: {
              contents: `#!/usr/bin/env node

              require("../winglang/dist/index.js");`
            }
          }
        }
      },
      '@winglang': {
        directory: {
          'sdk': {
            directory: {
              'lib': {
                directory: {
                  'empty': {
                    file: {
                      contents: ""
                    }
                  }
                }
              }
            }
          }
        }
      },
      'winglang': {
        directory: {
          'dist': {
            directory: {
              'empty': {
                file: {
                  contents: ""
                }
              }
            }
          }
        }
      },
      'express': {
        directory: {
          'empty': {
            file: {
              contents: ""
            }
          }
        }
      },
      'codespan-wasm': {
        directory: {
          'empty': {
            file: {
              contents: ""
            }
          }
        }
      },
      'aws-cdk-lib': {
        directory: {
          'index.js': {
            file: {
              contents: "exports = {}"
            }
          }
        }
      }
    }
  },
  'unzip.js': {
    file: {
      contents: `
console.log('unzipping')

const targz = require('./tar.gz.js')

const unzip = () => {
  return Promise.all([
    targz.x({ file: 'sdk.tgz', C: 'node_modules/@winglang/sdk/lib', preservePaths: true }),
    targz.x({ file: 'wing.tgz', C: 'node_modules/winglang/dist', preservePaths: true }),
    targz.x({ file: 'express.tgz', C: 'node_modules/express', preservePaths: true }),
    targz.x({ file: 'codespan-wasm.tgz', C: 'node_modules/codespan-wasm', preservePaths: true }),
    targz.x({ file: 'console.tgz', C: './static' })
  ])
}
unzip().then(() => {
  console.log('unzip done!');
})
.catch(function(err){
  console.log('unzip failed ', err);
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
          "dependencies": {
            
          },
          "scripts": {
            "test": "node ./node_modules/winglang/dist/index.js test test.w",
            "compile": "./node_modules/winglang/bin/wing compile -t tf-aws test.w"
          }
        }`,
    },
  },
  'server.js': {
    file: {
      contents: `

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8181;

app.get('/console-port', function(req, res) {
  res.send(consoleServer.port);
});

app.use(express.static('static'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(port, () => {
  console.log("app listening at http://localhost:" + port);
});

const cc = require("./console.server.js");
console.log(cc)
console.verbose = console.log
let consoleServer
cc.createConsoleServer({
  log: console,
  wingfile: "./test.w",
  requestedPort : 34443
}).then((server) => {
  consoleServer = server
  console.log(consoleServer.port);
}).catch((err) => {
  console.error(err)
});

        `,
    },
  },
  
  'static': {
    directory: {
      'assets': {
        directory: {
          'empty': {
            file: {
              contents: ''
            }
          }
        }
      },
    }
  },
  
}