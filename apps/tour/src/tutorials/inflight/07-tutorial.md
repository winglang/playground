# Compiler inner workings

The best way to understand what the compiler does is to look at the artifacts that it generates for us:

We can see them in the AWS/Terraform compilation target window.

First, you can see that the cloud.Bucket and cloud.Function resources are implemented with an AWS S3 and a Lambda services respectively. 

You can also see that the inflight code that runs when the function is invoked is stored in another S3 bucket (under the Default resource). The code itself is in the "inflight1.js" asset.

We can see some interesting things if we look deeper:
1. In the IAM Policy under the cloud.Function, you can see that the compiler granted our function with the minimal permissions that it needs in order to perform the put action on our bucket.
2. In the Lambda under cloud.Function you can see that the compiler has generated environment variables that would allow the function code to create an AWS S3 client to access the correct bucket. If you look at the code in the "inflight1.js" asset, you can see that it is already given a bucket instance, but behind the scenes, this instance is created by the compiler and injected into the function code from the data in the environment variables.

As you've probably figured out already, by understanding the intent of the developer from the code (i.e. that the function should be able to put files in the bucket because it calls the bucket.put function), the compiler is also able to build the connection map that you see in the simulator.

Now that you have a better understanding of how the compiler works, let's discuss the implications of this approach - the abilities it unlocks and the limitations it puts on us.

Click ***Next*** to find out about mutability in Wing.