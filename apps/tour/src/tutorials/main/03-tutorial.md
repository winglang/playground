# Invoke a Function and Explore the Logs Panel

First, paste the following code on line 4:

```ts
new cloud.Function(inflight (s: str) => {
  if s == "" {
    log("Function was invoked without a payload");
  } else {
    log("Function was called with argument '${s}'");
  }
});
```

Next, locate the cloud.Function in the simulator and invoke it.

Inspect the log panel at the bottom of the simulator. Ensure that you successfully sent the payload, so the correct log message appears there.
