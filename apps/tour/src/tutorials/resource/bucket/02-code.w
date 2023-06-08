bring cloud;

let bucket = new cloud.Bucket();

let exampleCode = inflight () => {
  bucket.put("file.txt", "Hello, world!");
  bucket.putJson("file.json", Json { name: "Alice" });

  let fileData = bucket.get("file.txt");
  log("fileData is '${fileData}'");

  let jsonData = bucket.getJson("file.json");
  log("jsonData.get(\"name\") is '${str.fromJson(jsonData.get("name"))}'");

  let keys = bucket.list();
  log("keys.at(0) is '${keys.at(0)}'");
  log("keys.at(1) is '${keys.at(1)}'");

  bucket.delete("file.txt");
};

new cloud.Function(exampleCode) as "Example Code";
