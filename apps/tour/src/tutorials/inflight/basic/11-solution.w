bring cloud;

// preflight code which defined a cloud.Counter 
// that counts the number of invocations of a function.
let numInvocations = new cloud.Counter();

let helloWorld = inflight () => {
  // We increment the counter here. It is safe to do so because
  // the counter is atomic and can save a shred state between machines.
  // So even if this code is called in parallel, from different machines,
  // the counter will be incremented correctly.
  log("Function called ${numInvocations.inc()} times");
};

// preflight code again which defines a cloud function
// to run the inflight code when invoked.
new cloud.Function(helloWorld);