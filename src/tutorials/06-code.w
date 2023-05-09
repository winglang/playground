bring cloud;

let b = new cloud.Bucket();
let q = new cloud.Queue();

q.add_consumer(inflight (m: str) => {
    b.put("last_message.txt", m);
});

new cloud.Function(inflight (s: str) => {
    log("cloud Function was call with ${s} as an argument");
    q.push(s);
});