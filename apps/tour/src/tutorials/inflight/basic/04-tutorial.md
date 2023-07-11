## Inflight - Run hello world

Let's execute our `helloWorld` inflight code inside a `cloud.Function`, which is Wing's ephemeral (short lived) compute resource (i.e. AWS Lambda).

To do that, copy this code to the editor in line 10:

```wing
new cloud.Function(helloWorld);
```

It is preflight code that creates a `cloud.Function` and gives it our inflight method (`helloWorld`) as a parameter. 

As a result, our inflight code will run and print "Hello, World! with .." to the log whenever the `cloud.Function` is invoked.

You can test it out in the simulator. Click the **cloud.Function** in the Simulator window (below the Editor) and invoke it (in the right hand panel) to see the logs being generated (at the bottom of the Simulator window).

When inflight code is compiled, it is converted into JavaScript code that is ready to be executed in various compute platforms.

Click **NEXT** to see the compilation artifacts generated from this step's code.