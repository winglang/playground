## Create a backup bucket

Let's use what we've learned to create a simple mechanism that copies files 
from one bucket to another, excluding log files based on their `.log` prefix.

Note:
> There are built-in mechanisms for backing up buckets which should be used 
> for production apps. Don't take this code too seriously 😉, it's just a 
> simple example.

First, let's create a `cloud.Function` that will simulate uploading files to 
the `origin` bucket.

### Upload files to `origin`

The following code uploads three different files to `origin`. Two of them are 
`txt` files that should be copied to `backup` and one of them is a `log` file 
that should be excluded.

```wing
new cloud.Function(inflight () => {
  origin.put("file1.txt", "This should be copied");
  origin.put("file2.txt", "This should be copied");
  origin.put("some.log", "This should not be copied");
}) as "Upload Files";
```

After pasting this code, the simulator should show the "Upload Files" 
function. Click on the function, and the right-side panel should appear. Click 
invoke, and go to the "origin" bucket to see the three files.

### Copy files on creation

Use the following code to react to any file creation:

```wing
origin.onCreate(inflight (file: str) => {
  if !file.endsWith(".log") {
    let data = origin.get(file);
    backup.put(file, data);
    log("adding ${file} into copies");
  } else {
    log("skipping log file:${file}");
  }
});
```

The code above copies files from `origin` to `backup`, excluding log files. 
You can invoke "Upload Files" again and examine the result in the `backup` 
bucket.

Notice that if you remove a file from `origin`, it is not deleted from 
`backup`. Let's fix this.

### Using `onDelete`

Let's add the `onDelete` hook to react to files being deleted from `origin`.

```wing
origin.onDelete(inflight (file: str) => {
  backup.delete(file);
  log("Deleted ${file}");
});
```

Now, when a file is deleted from `origin`, it is also deleted from `backup`.
