bring cloud;

let topic = new cloud.Topic();

topic.onMessage(inflight (message: str) => {
  log("Topic published message: ${message}");
});

// new cloud.Function(inflight (payload: str) => {
//   topic.publish(payload);
// }) as "Publisher";

