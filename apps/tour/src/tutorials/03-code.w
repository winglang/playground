bring cloud;

let q = new cloud.Queue();

let handler = inflight (s: str) => {
  log("inflight function was called with ${s}");
  // Type 'q.' to see the available methods
};
