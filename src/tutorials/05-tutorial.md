# Add a Bucket to store the latest message sent to our Queue.

1. Add a consumer to the queue that stores its latest message in a Bucket by pasting this:

```ts
let b = new cloud.Bucket() as "last message storage";

q.addConsumer(inflight (m: str) => {
    b.put("latest.txt", m);
});
```
2. Invoke the Function and check out your new application state. (Hint: click the Bucket 😊)
