# Preflight - Changing resource configuration

Preflight code can be used for much more than simple resource creation. We can use it to configure services, set up event listers on them, run logic to compose them into more complex resources, etc.

Let's start with a simple service configuration.

Look at the code in the Editor and See that we've made our `cloud.Bucket` public. It means that anyone can access it and read its contents.

Check out the **AWS/Terraform compilation** compilation target window. Can you see how the Terraform definitions have changed? 

You can change back the `cloud.Bucket` to be private in the Editor and see if you can spot the differences in the AWS/Terraform compilation window. 

The **"s3 bucket public access block"** has changed (click on it to see how), and an **"s3 bucket policy"** was added to allow anyone to get objects from the bucket.

Click **NEXT** to create and run a preflight hello world.