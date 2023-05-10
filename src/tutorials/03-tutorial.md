# Invoke a Function and explore the Logs Panel.

1. Paste this code snippet in line #4:
>new cloud.Function(inflight (s: str) => {
>   log("Cloud Function was called with ${s}");
>});                                          
2. Invoke the function and see the resulting logs at the bottom of the simulator.
