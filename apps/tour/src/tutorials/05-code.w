bring cloud;

let q = new cloud.Queue();
// Paste here

new cloud.Function(inflight (s: str) => {
  log("inflight function was called with ${s}");
  q.push(s);
});
