bring cloud;

let helloWorld = inflight (payload: str) => {
  log("Hello, World! with payload: ${payload}");
};

new cloud.Function(helloWorld);