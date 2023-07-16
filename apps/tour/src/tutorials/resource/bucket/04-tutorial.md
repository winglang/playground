## Create a backup bucket

Lets use what we've learned to create a simple mechanism that copies files from 
one bucket to another, excluding logs files based on their `.log` prefix. 

Note:
> There are built in mechanism for backing up bucket which should be used for production app, 
don't take this code so seriously 😉, it is just a simple example.

Lets first create a `cloud.Function` that will simulate uploading files to `origin` Bucket

### Upload files `origin`

The following code uploads 3 different files to `origin`, two  of them are `txt` files that
should be copies to `backup` and one of them is a `log` file that should be excluded

```wing
new cloud.Function(inflight () => {
  origin.put("file1.txt", "This should be copied");
  origin.put("file2.txt", "This should be copied");
  origin.put("some.log", "This should not be copied");
}) as "Upload Files";
```

After pasting this code, the simulator should show "Upload Files" function. Click on the funcition, 
the right side panel should be showing, click  invoke and go to the "origin" bucket to see the three files 


### Copy files on creationg

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

The above copy files from `origin` to `backup`, excluding log file. You can invoke "Upload Files" again and examin the result in `backup` Bucket

Notice that if you remove a file from `origin` they are not deleted from `backup`, lets fix this.

### Using `onDelete`

Lets add `onDelete` hook to react to files being deleted on `origin`

```wing
origin.onDelete(inflight (file: str) => {
  backup.delete(file);
  log("Deleted ${file}");
});
```

Now, when a file is deleted from `origin`, it is also deleted from `backup`
