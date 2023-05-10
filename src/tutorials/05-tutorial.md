# Add a Bucket to store the latest message sent to our Queue.

1. Paste the below snippet at line #4 to add a consumer to the queue that stores its latest message in a Bucket:

```ts
let b = new cloud.Bucket() as "last message storage";

q.add_consumer(inflight (m: str) => {
    b.put("latest.txt", m);
});
```
2. Invoke the Function and check out your new application state. (Hint: click on the Bucket :))
