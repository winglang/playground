bring cloud;

let store = new cloud.Bucket() as "Origin";
let backup = new cloud.Bucket() as "Backup";

store.onCreate(inflight (key: str) => {
  if !key.endsWith(".log") {
    let data = store.get(key);
    backup.put(key, data);
    log("adding ${key} into copies");
  } else {
    log("skipping ${key}");
  }
});

store.onDelete(inflight (key: str) => {
  backup.delete(key);
  log("Deleted ${key}");
});

new cloud.Function(inflight () => {
  log("uploading file1.txt");
  store.put("file1.txt", "This should be copied");
  log("uploading file2.txt");
  store.put("file2.txt", "This should be copied");
  log("uploading some.log");
  store.put("some.log", "This should not be copied");
}) as "Upload Files";
