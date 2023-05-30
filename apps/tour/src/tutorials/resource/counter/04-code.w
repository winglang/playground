bring cloud;

let counter = new cloud.Counter(cloud.CounterProps { initial: 1});
let bucket = new cloud.Bucket();
let topic = new cloud.Topic();

topic.onMessage(inflight (payload: str) => {
  bucket.put("${payload}.txt", "Hello ${counter.inc()}");
});

topic.onMessage(inflight (payload: str) => {
  bucket.put("${payload}.txt", "Hello ${counter.inc()}");
});

new cloud.Function(inflight () => {
  for i in 1..100 {
    topic.publish("${i}");
  }
}) as "Invoke Me";