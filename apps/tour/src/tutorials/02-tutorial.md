# Inflight function compiles to javascript code

inflight functions are functions that are going to run on the cloud

1. Paste this inflight function in line 4:
```ts
let handler = inflight (s: str) => {
  log("inflight function was called with ${s}");
};                                          
```
2. Notice the Inflight1 javascript code under assets

