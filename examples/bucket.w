// This is the import statement in Wing.
// Here we bring the Wing standard library that contains abstractions over popular cloud services.
bring cloud;

// This code defines a bucket as part of your application.
// At compile time, it will be substituted by an implementation
// for the target cloud provider. For example, in AWS it will be an S3 Bucket.
let bucket = new cloud.Bucket();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!! You can see and interact with the Bucket, and the
// !!! other resources you define, in the console to the right ==>
// !!! Click the "Run" button to reload the newest version
// !!! of the code in the console
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Here we are able to interact with infra config of the bucket
bucket.stateful = true;

// An `inflight` represents code that runs later, on other machines,
// and can interact with any cloud resource.
let hello_world = inflight () => {
  bucket.put("hello.txt", "Hello, World!");
};

// We can deploy the inflight as a serverless function
// (or in the future as a long-running service, etc.)
new cloud.Function(hello_world);
