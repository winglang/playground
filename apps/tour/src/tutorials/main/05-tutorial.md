# Store the Latest Message Sent to Our Queue

Begin by pasting the following code on line 4:

```ts
let b = new cloud.Bucket() as "Bucket: Last Message";

q.addConsumer(inflight (m: str) => {
    b.put("latest.txt", m);
});
```

Afterward, invoke the **cloud.Function** in the simulator (remember to include a payload). 

Locate "Bucket: Last Message" in the simulator and download the file from it.

🔍 Take note that you can also preview the file in the bucket.


