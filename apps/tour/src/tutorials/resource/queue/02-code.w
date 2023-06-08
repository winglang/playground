bring cloud;

let queue = new cloud.Queue();

queue.addConsumer(inflight (message: str) => {
  log("Recieved message '${message}' from Queue");
});
