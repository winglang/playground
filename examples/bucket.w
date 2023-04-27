// This is the import statement in Wing.
// Here we bring the Wing standard library that 
// contains abstractions of popular cloud services.
bring cloud;

// This code defines a bucket as part of your app.
// When compiling to a specific cloud provider
// (in the above "compile to.." buttons ↑),
// it will be substituted by an implementation for
// that cloud. I.e, for AWS it will be an S3 Bucket.
let bucket = new cloud.Bucket();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// You can interact with the app in the console -->
// 
// Click on the Function to invoke it, or the Bucket
// to see its contents, etc.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Here we interact with infra config of the bucket
// Add a '.' after the bucket to see the available
// properties and methods at its pre-flight phase.
let isStateful = bucket.stateful;

// `inflight` represents code that runs later, on
// other machines, interacting with cloud resources.
let hello_world = inflight () => {
  // Here we interact with the bucket after it is
  // provisioned. Add a '.' after the bucket to see
  // its in-flight interface (different from the pre-flight one above).
  bucket.put("hello.txt", "Hello, World!");
};

// Inflights can be deployed as serverless functions
// (or in the future as a long-running service, etc.)
new cloud.Function(hello_world);
                                           
// Click the "Compile to ..." buttons above ↑
// to compile the app to a Javascript and Terraform 
// of specific cloud providers.

// <-- You can also switch files and see other 
// examples to the left.

// The console automatically updates when making 
// changes in this editor (it is compiled to the 
// simulator target).