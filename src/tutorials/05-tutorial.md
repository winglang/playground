# Add a cloud.Bucket to store the latest message sent by our Queue.

Till now, our Queue had no consumers.  Let's add a consumer that saves incoming messages in cloud.Bucket

1. Create a new cloud.Bucket below the queue at line number 4.
2. In the following code snippet we are adding a new consumer to the queue and stores the message in our Bucket.

```wing
let b = new cloud.Bucket() as "last message storage";

q.add_consumer(inflight (m: str) => {
    b.put("latest.txt", m);
});
```
3. Invoke the Function and checkout your new application state. (Hint: click on the Bucket :))
