# Referencing preflight data from inflight code

One of the main reasons for having both execution phases (preflight and inflight) in the same language and under the same compiler is to allow easy access to preflight data from inflight code. 

Let's see what it looks like:

The editor contains preflight code that adds a storage bucket and a function to our app. It also contains empty inflight code that runs whenever the function is invoked. 

Let's modify it to put a file in the bucket by pasting this code to line 8:
```ts
  // The bucket that was defined in the preflight phase is accessed here in the inflight phase.
  bucket.put("hello.txt", "Hello, World! with this payload: ${payload}}");
```

The inflight code is pretty simple and is able to naturally access the bucket that was defined in the preflight execution phase.

This connection is visualized in the Simulator window on the right. 

But it's not just a diagram, you can click the cloud.Function and invoke it, then check out the file in the cloud.Bucket.

As you may have noticed, the bucket's ***put*** function that we've used in this step from inflight code serves a similar purpose to the ***addObject*** function that we've used in previous steps from preflight code.

Click ***Next*** to learn about the different contracts that are available for the same objects in the two execution phases.