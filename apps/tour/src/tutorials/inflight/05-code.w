bring cloud;

let bucket = new cloud.Bucket();

let helloWorld = inflight () => {
  // The bucket that was defined in the preflight phase is accessed here in the inflight phase.
  bucket.put("hello.txt", "Hello, World!");
};

// Inflights can be deployed as serverless functions
new cloud.Function(helloWorld);