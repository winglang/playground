bring cloud;

let q = new cloud.Queue();
let b = new cloud.Bucket() as "Bucket: Last Message";

q.setConsumer(inflight (m: str) => {
  b.put("latest.txt", m);
});

new cloud.Function(inflight (s: str) => {
  log("Function was called with ${s}");
  q.push(s);
});
