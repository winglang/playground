## Executing Inflight Closures

Let's execute our `helloWorld` inflight closure. To do that we will need a cloud resource that can execute code. One of these resources is a `cloud.Function`, which is Wing's abstraction for an ephemeral (short lived) compute resource (i.e. AWS Lambda).

To do that, write this code in line 10:

```wing
new cloud.Function(helloWorld);
```

This is preflight code which creates a `cloud.Function`. It accepts an inflight closure as an argument. In this case we pass in our `helloWorld` closure.

As a result, when this `cloud.Function` is invoked, the text `Hello, World! with ..` will be emitted to the log.

Let's test it out in the simulator. Click the **cloud.Function** node in the **Simulator** window and invoke it through the right-hand panel to see the logs being generated.

> You can find the logs at the bottom of the Simulator window.

When inflight closures are compiled, they are converted into JavaScript code.

Click **NEXT** to see the compilation artifacts generated from this step's code.