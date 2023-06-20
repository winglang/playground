# Inflight - Run Hello world

Let's put our inflight code inside a function so we can see the log being printed.

To do that, please copy this code to the editor in line 7:
```ts
new cloud.Function(helloWorld);
```

It is preflight code that creates a function with our inflight code as a parameter. This inflight code will run whenever the function is invoked.

You can see that the AWS/Terraform compilation target window now contains a cloud.Function resource that is implemented with an AWS Lambda, a Default resource that has an S3 bucket in which to store the inflight code, and the inflight code itself in the assets.

If you switch to the Simulator tab, you can now click on the the function and invoke it. You should see the log being printed.

Click ***Next*** to learn about how to access preflight data from inflight code.