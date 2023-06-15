bring cloud;

let helloWorld = inflight () => {
  log("Hello, World!");
};

let function = new cloud.Function(helloWorld);
