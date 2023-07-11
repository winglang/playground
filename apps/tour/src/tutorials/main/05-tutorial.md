# Storing the latest message in a bucket

In the next (and almost final) step of our little tutorial we will
use the `queue.setConsumer()` method to add a handler to the queue
that gets called every time a new message is pushed to the queue.

We will also create a new bucket which is where we can store objects (files) and we will put the
message that we consume into this bucket.

Let's begin by pasting the following code on line 4:

```wing
let b = new cloud.Bucket() as "Bucket: Last Message";

q.setConsumer(inflight (m: str) => {
  b.put("latest.txt", m);
});
```

As you can see, the simulator now shows a few new resources and their relationships.

Write some payload and invoke the **cloud.Function** in the simulator.

Locate the **Bucket: Last Message** node in the simulator and download the file from it or view it
in the interaction pane.



