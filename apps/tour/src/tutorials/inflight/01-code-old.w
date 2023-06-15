bring cloud;

// This _preflight_ code defines a bucket as part of your app.
// When compiling to a specific cloud provider it will be 
// substituted by an implementation for that cloud. 
// I.e, for AWS it will be an S3 Bucket.
let bucket = new cloud.Bucket();

// This _inflight_ code represent code that runs later, on
// other machines, interacting with captured data and
// resources from the preflight phase.
let hello_world = inflight () => {
  // Here we use the bucket that was defined in the preflight phase.
  bucket.put("hello.txt", "Hello, World!");
};

// _preflight_ code again, this time to define a cloud function.
// We give it the infight code to run when invoked as a parameter.
new cloud.Function(hello_world);