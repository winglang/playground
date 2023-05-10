# Invoke a Function and explore the Logs Panel.

1. **Editor:** Paste this code in line #4:
```ts
new cloud.Function(inflight (s: str) => {
    log("Cloud Function was called with ${s}");
});                                          
```
2. **Simulator:** Invoke the function
3. **Simulator (bottom):** See the resulting log.
