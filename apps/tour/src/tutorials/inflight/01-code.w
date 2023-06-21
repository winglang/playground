bring cloud;

// This *preflight* code defines a bucket as part of your app.
// When compiling to a specific cloud provider it will be 
// substituted by an implementation for that cloud. 
// I.e, for AWS it will be an S3 Bucket.
let bucket = new cloud.Bucket();