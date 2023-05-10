# Invoke a Function and explore the Logs Panel.

1. Paste this code snippet in line #4:

```ts
new cloud.Function(inflight (s: str) => {
   log("Cloud Function was called with ${s}");
});                                          
```

2. Invoke the function (similar to how you pushed a message to the Queue) and see the resulting logs at the bottom of the console.
