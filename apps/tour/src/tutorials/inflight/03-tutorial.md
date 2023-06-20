# Inflight - Intro

Inflight code is the runtime that handles the application logic (handle API requests, process queue messages, etc).

Unlike preflight code, it is running post-deployment. It can run inside a serverless function (lambda), a container, a VM or a physical server. Therefore, it can be executed multiple times and on different machines in parallel. 

Let's begin with a simple inflight example.

We have pre-populated the editor with inflight code that prints "Hello World!" to the log.

***Notice that the code has the `inflight` phase modifier to indicate that it is inflight code.***

You can see that the AWS/Terraform compilation target window has an asset in it for this code (below the resources).

It can be populated to run inside long-running services or function services (i.e. AWS Lambda).

Click ***Next*** to run this code.