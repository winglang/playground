bring cloud;

let q = new cloud.Queue();

new cloud.Function(inflight (s: str?) => {
  log("Function was called with {s}");
  // (type 'q.' to see the available methods)
});
