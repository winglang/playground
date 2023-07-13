## Preflight - Changing resource configuration

Preflight code can be used for much more than simple resource creation. We can use it to configure services, set up event listeners, compose them into more complex resources, etc.

Let's start with a simple service configuration.

Look at the code in the **Editor** and See that we've made our `cloud.Bucket` public by adding `public: true` to the constructor. It means that the bucket can be publicly accessed.

Now, let's check out the **AWS/Terraform** compilation target window. Can you see how the Terraform definitions have changed? 

You can change back the `cloud.Bucket` to be private (delete `public: true` or set it to `false`) in the editor and see if you can spot the differences in the AWS/Terraform compilation window.

The **"s3 bucket public access block"** has changed (click on it to see how), and an **"s3 bucket policy"** was added to allow anyone to get objects from the bucket.

Click **NEXT** to add objects to the bucket during deployment.