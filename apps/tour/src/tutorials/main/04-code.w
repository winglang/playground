bring cloud;

let q = new cloud.Queue();

new cloud.Function(inflight (s: str) => {
    log("Cloud Function was called with ${s}");
    // Type 'q.' to see the available methods
});

// Type 'q.' to see the available methods here.
// Notice how they are different from the ones
// suggested within the Cloud Function in line 7.
// It's because even though it's the same queue,
// lines 7 & 10 are in different execution phases.
// preflight - for infrastructure definitions, executed at compile time.
// inflight - for business logic, executed at runtime.
// We'll learn more about these concepts in the next tutorial.