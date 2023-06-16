const { createConsoleApp } = require("@wingconsole/app");

createConsoleApp({
  wingfile: "test.w",
  onTrace(trace) {
    window.parent.postMessage({ trace }, "*");
  },
});
