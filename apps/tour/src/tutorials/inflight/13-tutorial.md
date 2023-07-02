# Compiler inner workings

The best way to understand what the compiler does is to look at the artifacts that it generates for us:

We can see them in the AWS/Terraform compilation target window.

First, you can see that the cloud.Bucket and cloud.Function resources are implemented with an AWS S3 and a Lambda services respectively. 

You can also see that the inflight code that runs when the function is invoked is stored in another S3 bucket (under the Default resource). The code itself is in the "inflight1.js" asset.

We can see some interesting things that the compiler has done for us if we look deeper:
1. The IAM Policy under the cloud.Function grants the function with the minimal permissions that it needs in order to perform the put action on our bucket.
2. The Lambda under the cloud.Function defines environment variables that contain the data that is needed by the function's code to create an AWS S3 client and access the correct bucket with it. 
3. The code in the "inflight1.js" asset is given a bucket instance that is created using the data from the environment variables. Unfortunately, that part of the code is too long to display here, but you can see it if you compile Wing code on your machine.

As you've probably figured out already, by understanding the intent of the developer from the code (i.e. that the function should be able to put files in the bucket because it calls the bucket.put function), the compiler is also able to build the connection map that you see in the simulator.

Now that you have a better understanding of how the compiler works, click ***Next*** to finish this tutorial.