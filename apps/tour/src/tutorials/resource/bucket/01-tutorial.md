## Defining a Bucket

Think of a `cloud.Bucket` as a handy container where you can stash your data up in the cloud. 
In this part of our adventure, I'll be your guide as we create two cloud buckets: one public and one private.

```wing 
bring cloud;

let b1 = new cloud.Bucket() as "a private bucket";
let b2 = new cloud.Bucket(
  public: true // optional, defaults to `false`
) as "a public bucket";
```

Go ahead, give it a shot! Copy and paste this code into the editor on your right.

### Exploring the Simulator

See that simulator below the editor?  
As soon as you change the code, it will show you the cloud application that's 
been created, including our two new buckets.

To get to know your buckets, click on each one and check out the public property in the right panel. 
Can you spot the differences between them?

### AWS Compilation Output

Now, let's take a peek at the AWS/Terraform compilation target. 
It's sitting right next to the Wing Simulator. 
Each time a `cloud.Bucket` is created, it compiles to several Terraform resources.


You may observe that the private bucket is represented by three Terraform
resources, whereas the public one is represented by four. The `s3 bucket policy`,
which determines the permissions for that bucket, is the extra resource for the
public bucket.

Another point of interest is the difference in the s3 public access block
between the two buckets. Are you able to spot this difference?

In the following section, we will explore how to utilize the Bucket in inflight
operations.
