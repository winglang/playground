bring cloud;

let q = new cloud.Queue() as "incoming";

new cloud.Function(inflight (s: str) => {
   log("Cloud Function was called with ${s}");
});