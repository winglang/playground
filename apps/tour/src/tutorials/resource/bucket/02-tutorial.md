## Bucket Inflight API

The inflight API of `cloud.Bucket` allows you to create, list, and delete
objects on the go.

### Running `exampleCode`

In the editor, you'll see a `cloud.Function` that runs `exampleCode`. When you
click on the `Example Code` resource in the simulator (located at the bottom
right), a right panel will appear. Seek out the 'Invoke' button and click it to
trigger the execution of `exampleCode`.

Once the code has run its course, you'll see log statements appearing in the logs
view at the bottom of the screen.

Now that we're familiar with running the code, let's explore the `put`, `putJson`,
`get`, `getJson`, `list` and `delete`  methods, which we'll use to interact with the bucket.

### Creating Files

You have two APIs at your disposal for creating files: `put` and `putJson`. Insert
the following code at line 7 to create a text file and a JSON file:

```wing
bucket.put("file.txt", "Hello, world!");
bucket.putJson("file.json", { "name": "Alice" });
```

After running `exampleCode` (by clicking invoke on "Example Code"), click on cloud.Bucket in the simulator and check out the
files you've just created in the right panel.

### Reading files

To read the content of the files you've just created, use the following code:

```wing
let s = bucket.get("file.txt");
log("content is '${s}'");

let j = bucket.getJson("file.json");
log("name is '${j.get("name")}'");
```

Insert the code in the "Reading files" TODO section and run exampleCode once again.
The content of the files should now be visible in the logs.

### Listing files

To see a list of the files in a bucket, use the list API as follows:

```wing
let keys = bucket.list();
for f in keys {
  log(f);
}
```

Add this code to exampleCode and execute it. The names of your two files should
now be displayed in the logs.


### Deleting files

After executing the previous code, your bucket should contain two files: `file.txt`
and `file.json`. You can confirm this by clicking on the `cloud.Bucket` resource in
the simulator and checking the files in the right panel.

To delete file.txt, add the following code to the corresponding TODO in the editor:

```wing
bucket.delete("file.txt");
```

After running the code, check `cloud.Bucket` again in the simulator. You should now
only see `file.json`.
