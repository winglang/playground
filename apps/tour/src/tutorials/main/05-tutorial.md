# Add a Bucket to store the latest message sent to our queue.

1. Paste this code in line 4.
```ts
let b = new cloud.Bucket() as "Bucket: Last Message";

q.addConsumer(inflight (m: str) => {
    b.put("latest.txt", m);
});
```
2. Invoke the **cloud.Function** in the simulator (with a payload).
3. Find "Bucket: Last Message" in the simulator and download the file from it.

🔍 Notice you can also see a preview of the file in the bucket.
