# Inflight - intro

Inflight code is the runtime that handles the application logic (handle API requests, process queue messages, etc).

Unlike preflight code, it is running post-deployment, and can be run multiple times and on different machines in parallel.

Let's begin with a simple inflight example.

We have pre-populated the editor with inflight code that prints "Hello World!" to the console.

> Notice that the code has the `inflight` phase modifier to indicate that it is inflight code.

You can see that the AWS/Terraform compilation target window has an asset in it for this code.

It can be populated to run inside long-running services or function services (i.e. AWS Lambda).     