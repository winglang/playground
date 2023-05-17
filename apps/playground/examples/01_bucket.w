// This is the import statement in Wing.
// Here we bring the Wing standard library that 
// contains abstractions of popular cloud services.
bring cloud;

// This code defines a bucket as part of your app.
// When compiling to a specific cloud provider
// it will be substituted by an implementation for
// that cloud. I.e, for AWS it will be an S3 Bucket.
let bucket = new cloud.Bucket();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// You can interact with the app in the console -->
// 
// Click on the Function, and then invoke it in the
// lower right panel, or click on the Bucket
// to see its contents in the panel, etc.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// `inflights` represent code that runs later, on
// other machines, interacting with captured data and
// resources from the pre-flight phase.
let hello_world = inflight () => {
  bucket.put("hello.txt", "Hello, World!");
};

// Inflights can be deployed as serverless functions
new cloud.Function(hello_world);
                                      
// ↑ Switch files and see other examples with more
// explenations above.