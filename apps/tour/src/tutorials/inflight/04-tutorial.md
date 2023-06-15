# Inflight - hello world

Let's put our inflight code inside a function so we can see the log being printed.

To do that, please copy this code to the editor in line 7:
```ts
let function = new cloud.Function(helloWorld);
```

This code is preflight code that creates a function and populates it with our inflight code to run whenever the function is invoked.

You can see that the AWS/Terraform compilation target window now contains the definitions for a Lambda function, a bucket to store the code in, and the inflight code itself.

If you switch to the Simulator tab, you can now click on the the function and invoke it. You should see the log being printed.