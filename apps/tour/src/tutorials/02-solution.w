bring cloud;

let q = new cloud.Queue();

let handler = inflight (s: str) => {
    log("Cloud Function was called with ${s}");
};
