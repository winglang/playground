# Invoke a cloud.Function and explore the console logs panel.

Another widely used resource is the cloud.Function.

In a few lines of code you will create and invoke a cloud.Function which will write to the log.

1. Copy and paste this snippet of code at line 4:

```wing
new cloud.Function(inflight (s: str) => {
   log("Cloud Function was called with ${s}");
});                                          
```

2. Invoke the function resource from the console, similar to how you pushed a message and see your log in the logs panel.
