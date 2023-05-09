bring cloud;

let q = new cloud.Queue() as "incoming";

new cloud.Function(inflight (s: str) => {
    log("cloud Function was called with ${s}");
});