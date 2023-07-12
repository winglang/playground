# Storing the latest message in a bucket

In the next (and almost final) step of our little tutorial we will use the `queue.setConsumer()`
method to register a handler which gets called every time a new message is pushed to the queue.

We will also define a new bucket which is where we will put each message we consume from the queue.

Add the following code after line 4:

```wing
let b = new cloud.Bucket() as "Bucket: Last Message";

q.setConsumer(inflight (m: str) => {
  b.put("latest.txt", m);
});
```

The simulator now shows a few new resources and their relationships.

Enter some payload and invoke the **cloud.Function** in the simulator.

Locate the **Bucket: Last Message** node and check out the contents of `latest.txt`. Cool, ha?
