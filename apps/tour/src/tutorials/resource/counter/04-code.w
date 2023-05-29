bring cloud;

let counter = new cloud.Counter();
let bucket = new cloud.Bucket();
let queue = new cloud.Queue();

let consumerCode = inflight (payload: str) => {
  bucket.put("${payload}.txt", "Hello ${counter.inc()}");
};
queue.addConsumer(consumerCode);

let consumerCode2 = inflight (payload: str) => {
  bucket.put("${payload}.txt", "Hello ${counter.inc()}");
};
queue.addConsumer(consumerCode2);

new cloud.Function(inflight () => {
  for i in 0..99 {
    queue.push("${i}");
  }
}) as "Invoke Me";