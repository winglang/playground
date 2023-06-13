bring cloud;

let queue = new cloud.Queue();

queue.setConsumer(inflight (message: str) => {
  log("Recieved message '${message}' from Queue");
});
