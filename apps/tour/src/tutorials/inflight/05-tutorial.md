# Accessing preflight data from inflight code

One of the main reasons for having both phases (preflight and inflight) in the same language and under the same compiler is to allow easy access to preflight data from inflight code. 

Let's see what it looks like.

We've pre-populated the editor with preflight code that adds a bucket and a function to our app.
It also contains inflight code that runs when the function is invoked to put a file in the bucket.

This inflight code is able to naturally access the bucket that was defined in the preflight phase, but there is actually a lot of magic happening behind the scenes to make this work.

If you look at the AWS/Terraform compilation target window, you can see that the bucket and Function are defined and the IAM policies that are generated to allow the function to put a file in the bucket. You can also see that the code that runs in the function is stored in another S3 bucket (under default) and that its code is the inflight1.js asset. This JS code gets the S3 bucket client as a parameter, and there is no need for us to pass the bucket identity to it as an environment variable or anything like that.

> The end result is cloud code that feels more like regular code for single machines in most other languages.

> The only difference is that the code is split into two phases, and some of the services in the standard library are not in-memory data structures or OS services, but they are cloud services that are being used as if they were regular OS services.

If you switch to the Simulator tab, you can now click on the the function and invoke it. You should see the file in the bucket.