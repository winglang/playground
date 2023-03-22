export default {
  'unzip.js': {
    file: {
      contents: `
console.log('unzipping')

const targz = require('./tar.gz.js')

const unzip = () => {
  return Promise.all([targz().extract('sdk.tgz', 'node_modules/@winglang/sdk'), 
    targz().extract('wing.tgz', 'node_modules/winglang'),
    targz().extract('express.tgz', 'node_modules/express'),
    targz().extract('esbuild-wasm.tgz', 'node_modules/esbuild-wasm')])
}
unzip().then(() => {
  console.log('unzip done!');
})
.catch(function(err){
  console.log('Something is wrong ', err.stack);
});

/*
targz().extract('modules.tgz', '.')
  .then(async function(){
    await targz().extract('winglang-sdk-0.0.0.tgz', 'node_modules/@winglang')
    await targz().extract('winglang-0.0.0.tgz', 'node_modules')
    console.log('unzip done!');
  })
  .catch(function(err){
    console.log('Something is wrong ', err.stack);
  });*/
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

const cc = require("./console.js");
console.log(cc)
console.verbose = console.log
let consoleServer
cc.createConsoleServer({
  log: console,
  inputFile: "./test.w",
  // Or...
  // inputFile: "./path-to-file.wsim",
}).then((server) => {
  consoleServer = server
  console.log(consoleServer.port);
});

        `,
    },
  },
  
  'static': {
    directory: {
      'index.html': {
        file: {
          contents: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- appcues setup -->
    <script type="text/javascript">
      window.AppcuesSettings = {
        enableURLDetection: true
      };
    </script>
    <script crossorigin="anonymous" src="https://fast.appcues.com/139474.js"></script>
    <script type="text/javascript">
    window.Appcues && window.Appcues.identify(
        Date.now().toString()
      )
    </script>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module" crossorigin src="/index.js"></script>
    <link rel="stylesheet" href="/index.css">
  </head>
  <body>
    <div id="root"></div>
    
  </body>
</html>
          
            `,
        },
      },
//       'app.js': {
//         file: {
//           contents: `
// import { Console } from "./console.ui.js";
// console.log(Console)
// // import * as React from "react";
// // import * as ReactDOM from "react-dom/client";

// // fetch("/console-port").then((res) => {
// //   console.log(1111, res)
// //   ReactDOM.createRoot(document.querySelector("#root")).render(React.createElement(
// //     React.StrictMode,
// //     null,
// //     React.createElement(Console, { port: res })
// //   ));
// // }).catch((err) => {
// //   console.log(222, err)
// // })
// `,
//         },
//       }
    }
  },
  
}