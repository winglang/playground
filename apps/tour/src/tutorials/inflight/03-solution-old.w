bring cloud;

let bucket = new cloud.Bucket();
bucket.onCreate(inflight (fileName: str) => {
 log("File created with name: ${fileName}");
});

let hello_world = inflight () => {
  bucket.put("hello.txt", "Hello World!");

};

new cloud.Function(hello_world);