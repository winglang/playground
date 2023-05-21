# Invoke a function and explore the Logs Panel

1. Paste this code in line 4:
```ts
new cloud.Function(inflight (s: str) => {
    log("Cloud Function was called with ${s}");
});                                          
```
2. Find the **cloud.Function** in the simulator and **invoke** it with a payload.

🔍 Notice the resulting log at the bottom of the simulator.
