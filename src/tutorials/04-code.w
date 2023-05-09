bring cloud;

let q = new cloud.Queue();

new cloud.Function(inflight (m: str) => {
    log("cloud Function was called with ${m}");
});