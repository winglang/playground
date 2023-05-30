bring cloud;

let topic = new cloud.Topic();
let bucket = new cloud.Bucket();
let counter = new cloud.Counter();

topic.onMessage(inflight (message: str) => {
  log("Subscriber #1: Received message #${counter.peek()}: ${message}, putting upercase version to bucket");
  bucket.put("message ${counter.peek()} - uppercase.txt", message.uppercase());
});

topic.onMessage(inflight (message: str) => {
  log("Subscriber #2: Received message #${counter.peek()}: ${message}, putting lowercase version to bucket");
  bucket.put("message ${counter.peek()} - uppercase.txt", message.lowercase());
});

new cloud.Function(inflight (payload: str) => {
  counter.inc();
  topic.publish(payload);
}) as "Publisher";