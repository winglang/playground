# Accessing preflight data from inflight code

One of the main reasons for having both phases (preflight and inflight) in the same language and under the same compiler is to allow easy access to preflight data from inflight code. 

Let's see what it looks like:

We've pre-populated the editor with preflight code that adds a storage bucket and a function to our app. You can also see them in the Simulator window below the editor.

The editor also contains empty inflight code that runs whenever the function is invoked. 
Let's modify it to put a file in the bucket by pasting this code to line 8:
```ts
  // The bucket that was defined in the preflight phase is accessed here in the inflight phase.
  bucket.put("hello.txt", "Hello, World! with this payload: ${payload}}");
```

The inflight code is pretty simple and is able to naturally access the bucket that was defined in the preflight execution phase.

You probably also noticed that the Simulator window on the right shows the connection between the cloud.Function and the cloud.Bucket now.
You can click the cloud.Function and invoke it, then check out the file in the cloud.Bucket.

Click ***Next*** to learn more about what goes on behind the scenes in order to make this natural interaction between preflight and inflight work and how the simulator is able to display the connections.