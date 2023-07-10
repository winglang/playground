bring cloud;

// preflight code to create a bucket
let bucket = new cloud.Bucket();

// preflight code to pre-populate the bucket with a file
bucket.addObject("hello-preflight.txt", "Hello World! from preflight");

// inflight code to put a file in the bucket
let helloWorld = inflight (payload: str) => {
  // The bucket that was defined in the preflight phase is accessed here in the inflight phase.
  bucket.put("hello-infliht.txt", "Hello, World! from inflight, with this payload: ${payload}}");
};

// preflight code again which defines a serverless function
// to run the inflight code when invoked.
new cloud.Function(helloWorld);