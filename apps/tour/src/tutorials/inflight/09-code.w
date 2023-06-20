bring cloud;

// preflight code which defined a number 
// that counts the number of invocations of a function.
let var numInvocations = 1;

let helloWorld = inflight () => {
  numInvocations = numInvocations + 1;
  log("Function called ${numInvocations} times");
};

// preflight code again which defines a cloud function
// to run the inflight code when invoked.
new cloud.Function(helloWorld);