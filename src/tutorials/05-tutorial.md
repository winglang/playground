# Add a Bucket to store the latest message sent to our Queue.

1. **Editor:** Paste this code.

```ts
let b = new cloud.Bucket() as "Bucket: Last Message Storage";

q.addConsumer(inflight (m: str) => {
    b.put("latest.txt", m);
});
```
2. **Simulator:** Invoke the Function 
3. **Simulator:** Check out your new app state. (Hint: click the Bucket 😊)
