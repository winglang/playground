bring cloud;

let q = new cloud.Queue();

let handler = inflight (s: str) => {
  log("inflight function was called with ${s}");
  q.push(s);
};

new cloud.Function(handler);
