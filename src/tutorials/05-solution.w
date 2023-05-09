bring cloud;

let q = new cloud.Queue();

let b = new cloud.Bucket() as "last message storage";
q.add_consumer(inflight (m: str) => {
    b.put("latest.txt", m);
});

new cloud.Function(inflight (s: str) => {
    log("cloud Function was called with ${s}");
    q.push(s);
});