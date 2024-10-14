bring cloud;

let q = new cloud.Queue();
// (paste here)

new cloud.Function(inflight (s: Json?) => {
  log("Function was called with {s!}");
  q.push("{s!}");
});
