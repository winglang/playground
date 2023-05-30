bring cloud;

let topic = new cloud.Topic();
let bucket = new cloud.Bucket();
let counter = new cloud.Counter();

topic.onMessage(inflight (message: str) => {
  log("Subscriber #1: Received message: ${message}, putting upercase version to bucket");
  bucket.put("${message.split(":").at(0)}_uppercase.txt", message.uppercase());
});

topic.onMessage(inflight (message: str) => {
  log("Subscriber #2: Received message: ${message}, putting lowercase version to bucket");
  bucket.put("${message.split(":").at(0)}_lowecase.txt", message.lowercase());
});

new cloud.Function(inflight (payload: str) => {
  let val = counter.inc();
  topic.publish("#${val}: '${payload}'");
}) as "Publisher";