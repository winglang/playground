# Inflight - Run hello world

Let's execute our helloWorld inflight code inside a cloud.Function service. It represents an ephemeral (short lived) compute resource (e.g. AWS Lambda).

To do that, copy this code to the editor in line 7:
```ts
new cloud.Function(helloWorld);
```

It is preflight code that creates the cloud.Function and gives it our inflight function (helloWorld) as a parameter. 

As a result, our inflight code will run and print "hello world" to the log whenever the cloud.Function is invoked.

You can test it out in the simulator. Click the cloud.Function and invoke it (in the right hand panel) to see the logs being generated (at the bottom of the Simulator window).

When inflight code is compiled, it is converted into JavaScript code that is ready to be executed in various compute platforms.

Click ***Next*** to see the compilation artifacts generated from this step's code.