## Mutability - a question

As we've seen in the previous steps, the Wing compiler does the necessary work behind the scenes to allow us to write inflight code that references preflight objects.

?? pointer => reference

The preflight code runs on one machine at compile time and the inflight code runs on different machines at a later time. Therefore, the inflight code can't simply get a pointer to the preflight data when it runs. That data was stored in the memory of the machine that ran the preflight code in the past (and may not even be turned on anymore). So a pointer, or even a data transfer, would be meaningless. 

Instead, the compiler needs to serialize the preflight data and transfer it to the inflight code when it needs it. You will learn more details about this in future steps.

This serialization approach can generate unexpected behavior when attempting to mutate data that crosses machine and time boundaries. 

For example, take a look at the code below:

```wing
bring cloud;

let numInvocations = 0;

let helloWorld = inflight () => {
  numInvocations = numInvocations + 1;
  log("Function called ${numInvocations} times");
};

new cloud.Function(helloWorld);
```

The preflight part creates a function and an integer (`numInvocations`) to count to count its invocations. The inflight part increments `numInvocations` when the function is invoked and prints a message with its value.

What do you think will happen if this code was allowed to run?

Click **NEXT** to find out.



