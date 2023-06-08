bring cloud;

let q = new cloud.Queue();

new cloud.Function(inflight (s: str) => {
   log("Cloud Function was called with ${s}");
});