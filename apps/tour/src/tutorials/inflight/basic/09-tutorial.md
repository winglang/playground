# Mutability - the answer

For your convenience, this is the code from the previous step:
```wing
bring cloud;

let numInvocations = 0;

let helloWorld = inflight () => {
  numInvocations = numInvocations + 1;
  log("Function called ${numInvocations} times");
};

new cloud.Function(helloWorld);
```

Have you figured out the problem with it yet?

The answer is that no matter how many times the function is invoked, it will print that same output: *"Function called 1 times"*.

The reason for this was explained in the previous step. The compiler doesn't transfer a pointer to the `numInvocations` variable from the inflight phase. Instead, it serializes the value of the variable in the preflight phase (which is 0) and injects it into the generated inflight code. This means that whenever the inflight code runs, and no matter how many times it runs, it will see the same value of **"0"** for `numInvocations`.

Click **NEXT** to see how Wing protects us from such scenarios.