# Add a Bucket to store the latest message sent to our Queue.

1. **Editor:** Paste this code (line #4).

```ts
let b = new cloud.Bucket() as "Bucket: Last Message";

q.addConsumer(inflight (m: str) => {
    b.put("latest.txt", m);
});
```
2. **Simulator:** Invoke the Function (cloud.Function).
3. **Simulator:** Check out your new app state. (Hint: click the Bucket 😊)
4. **Simulator:** Download a file from the Bucket.
