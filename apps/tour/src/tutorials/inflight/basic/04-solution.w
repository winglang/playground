bring cloud;

let helloWorld = inflight (payload: str) => {
  // This code will run on a remote machine.
  // The logs will be streamed to the log service, and can also 
  // be viewed in the logs of the compute service used to run this code.
  log("Hello, World! with payload: ${payload}");
};

new cloud.Function(helloWorld);
