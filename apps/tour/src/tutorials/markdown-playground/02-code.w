bring cloud;

// preflight code to create a bucket
let bucket = new cloud.Bucket();

// inflight code to put a file in the bucket
let helloWorld = inflight (payload: str) => {
  
};

// preflight code again which defines a serverless function
// to run the inflight code when invoked.
new cloud.Function(helloWorld);