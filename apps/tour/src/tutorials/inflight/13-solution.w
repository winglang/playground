bring cloud;

let bucket = new cloud.Bucket();

let onCreateHandler = inflight (fileName: str) => {
  log("A file was created with name: ${fileName}");
  let content = bucket.get(fileName);
  log("Its content is: ${content}");
};

bucket.onCreate(onCreateHandler);