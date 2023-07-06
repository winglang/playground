# Invoking function and exploring logs

Our next step is to create a `cloud.Function` resource. We will use our function to push a message
into the queue for testing.

### Defining a function

Under the `new cloud.Queue()` statement (line 4), write the following code (you can copy & paste,
but typing is always more fun):

```wing
new cloud.Function(inflight (s: str) => {
  if s == "" {
    log("Function was invoked without a payload");
  } else {
    log("Function was called with argument '${s}'");
  }
});
```

This code should be quite self-explanatory. We create a `cloud.Function` object and we supply a code
block that describes what happens when the function is invoked. This code block is sometimes
referred to as a *closure*.

### Invoking our function

Next, locate the **cloud.Function** node in the simulator map view and invoke it from the
interaction pane (click **Invoke**).

### Inspecting logs

Once you invoked your function, you should be able to see the output of the `log()` statements at
the bottom of the simulator.

You can check out the different outputs based on whether you supply a payload to your function or
not.
