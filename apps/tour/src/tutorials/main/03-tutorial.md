## Invoking function and exploring logs

Our next step is to create a `cloud.Function` resource. A function is a cloud resource that executes
code in response to some event. We will use our function to push a message into the queue for
testing.

### Defining a function

Below the `new cloud.Queue()` statement (line 4), write the following code (you can copy & paste,
but typing is always more fun):

```wing
new cloud.Function(inflight (s: str?) => {
  if s == "" {
    log("Function was invoked without a payload");
  } else {
    log("Function was called with argument '{s!}'");
  }
});
```

This code should be quite self-explanatory. We define a `cloud.Function` object and we supply a code
block which describes what happens when the function is invoked. This code block is sometimes
referred to as a *closure*.

> You will notice the `inflight` modifier before the closure definition. This modifier indicates
> that this code is executed after the system is deployed. This concept of preflight and inflight is
> one of the unique concepts of the Wing language. You can read more about it in the
 <a href="https://www.winglang.io/docs/concepts/inflights" target="_blank">Wing documentation</a>

### Invoking our function

Let's invoke our function and see if it's doing what we expect.

Locate the **cloud.Function** node in the simulator and invoke it from the interaction pane by
clicking the **Invoke** button.

### Inspecting logs

Once we invoked our function, we should be able to see the output of the `log()` statements the logs
section at the bottom of the simulator.

Try your function with different payloads and check out the different outputs based on whether you
supply a payload to your function or not.
