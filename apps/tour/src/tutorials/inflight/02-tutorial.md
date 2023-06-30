# Preflight - Changing resource configuration

We can do a lot more in preflight than just simple resource creation. We can configure services, set up event listers for actions performed on them, run logic to compose them into more complex resources, etc.

Let's start with a simple service configuration.

Look at the code in the Editor and See that we've made our bucket public. It means that anyone can access it and read its contents.

Check out the ***AWS/Terraform compilation target window***. Can you see how the Terraform definitions have changed? 

You can modify it back to be private and see if you can spot the differences. The "s3 bucket public access block" has changed (click on it to see how), and an "s3 bucket policy" was added to allow anyone to get objects from the bucket.

Click ***Next*** to add code that will populate the bucket with a file containing the text "hello world" during deployment.