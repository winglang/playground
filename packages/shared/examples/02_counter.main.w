bring cloud;

let bucket = new cloud.Bucket();
let queue = new cloud.Queue();

// This is a distributed atomic counter.
// When compiling to a specific cloud provider
// it will be substituted by an implementation for
// that cloud. In AWS, it will use Dynamo DB to
// implement it.
let counter = new cloud.Counter();

queue.setConsumer(inflight (message: str) => {
    // Each time the queue receives a message,
    // it increments the counter and puts a
    // file in the bucket using the counter value
    // in the name, and the message as the content.
    bucket.put("File-${counter.inc()}.txt", message);
});

// This Function receives a payload, and pushes it
// to the queue
new cloud.Function(inflight (payload: str?) => {
    queue.push(payload ?? "empty");
}) as "Pusher";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// You can see the terraform and javascript compilation
// artifacts by clicking on the "AWS/TERRAFORM" tab
// above and to the right of this code editor.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
