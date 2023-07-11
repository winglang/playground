# Referencing preflight data from inflight code - Example

One of the main reasons for having both execution phases (preflight and inflight) in the same language and under the same compiler is to allow easy access to preflight data from inflight code.

We'll start with a simple example, and then uncover the benefits of this approach though it.

The editor contains preflight code that adds a `cloud.Bucket` and a `cloud.Function` to our app. It also contains empty inflight code that runs whenever the function is invoked. 

Let's modify it to put a file in the bucket by pasting this code to line 8:
```wing
  // The bucket that was defined in the preflight phase is accessed here in the inflight phase.
  bucket.put("hello.txt", "Hello, World! with this payload: ${payload}}");
```

The code runs in the inflight phase on various machines whenever the `cloud.Function` is invoked. It references the `cloud.Bucket` that was defined earlier in the preflight phase on a different machine.

This connection between the `cloud.Function` and `cloud.Bucket` is visualized in the Simulator window below the editor. 

But it's not just a diagram, you can click the **cloud.Function** in the simulator and invoke it, then check out the file in the **cloud.Bucket**.

Click **NEXT** to learn about the benefits of this approach.