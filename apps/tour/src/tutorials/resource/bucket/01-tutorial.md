## Defining a Bucket

A cloud.Bucket resource is essentially a container used for storing data in the cloud. 
The following section of code will show you how to instantiate two cloud buckets.

### Exploring the simulator

Begin by examining the Wing Simulator compilation target window located on the bottomright-hand side of your screen. 
Here, you'll find two Buckets. 

Notice the `public` property in the right panel and the different between the two

### AWS compilation output

Now, switch your view to the AWS/Terraform compilation target. This is the tab adjacent to the Wing Simulator. 
Each time a cloud.Bucket is instantiated, it translates into Terraform resources.
You can notice that the private bucket is represented by three Terraform resource, 
while the public one is represented by four resource. The added resource is `s3 bucket policy` which 
defines the permissions of that bucket. 

Another interesting point to note is the variation in the `s3 public access block` between the two buckets. 
Can you spot the difference?

In the next section, we will delve into how to utilize the Bucket during inflight operations.

