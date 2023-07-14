## Using a bucket inflight

The inflight API of cloud.Bucket allows you to create,list and delete objects.

### Executing `exampleCode`

The code in the editor, instantiate a `cloud.Function` that runs `exampleCode`. Once you 
click on the simulator (bottom right) `Example Code` resource, a right panel will appear.
Find the invoke button and invoke the function, this will trigger `exampleCode` execution. 

Once it is executute, you should be able to see the log statements on the bottom logs view. 

Now that you know how to execute the code, lets quickly go over on usinge
`put`, `putJson`, `get`, `getJson` and `list` methods in order to interact with the bucket.

### Creating files

There are two api for creating files: `put` and `putJson`. 
Paste the following code in line 7 to create a text file and a json file

```wing
bucket.put("file.txt", "Hello, world!");
bucket.putJson("file.json", Json { name: "Alice" });
```

After executing the code you can click on the `cloud.Bucket` in the simulator and explore 
the files created (right panel) 

### Reading files

The following code gets the content of the files that where created above:

```wing
let s = bucket.get("file.txt");
log("content is '${s}'");

let j = bucket.getJson("file.json");
log("name is '${j.get("name")}'");
```

Paste it right after the `putJson` call and execute `exampleCode` again, 
you should be seeing the file content in the logs.


### Listing files

We use the `list` API in order to get the list of files from a bucket, check out the following code:

```wing
let keys = bucket.list();
for f in keys {
  log(f);
}
```

Once you add this code to `exampleCode` and execute it, you should see the two files presented
in the logs.

### Deleting files

After running the above code the bucket should contain 2 files `file.txt` and `file.json`.
Make sure that this is the case, by clicking on the simulator `cloud.Bucket` resource and seeing the files.


The following code deletes `file.txt`, add it to the relevant TODO in the editor:

```wing
bucket.delete("file.txt");
```

Run the code and examine `cloud.Bucket` again in the simulator, you should only see `file.json`.
