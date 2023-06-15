# Preflight - hello world

We can do a lot more in preflight than just simple resource creation.

If you look at the code in the editor now, you can see that we've made our bucket public.

Check out the AWS/Terraform compilation target window. Can you see how the Terraform definitions have changed? You can modify it back to be private and see if you can spot the differences (the "s3 bucket public access block" has changed, also an "s3 bucket policy" was added which allows anyone to get objects from the bucket).

Our next step will be to add code that will populate the bucket with a file containing the text "hello world" upon deployment.

To do that, please copy this code to the editor in line 5:
```ts
// This code populates the file "hello.txt" with the text "Hello World!" during deployment in the bucket.
bucket.addObject("hello.txt", "Hello World!");
```

You can see that the AWS/Terraform compilation target window has changed again. Can you spot the differences? (check out the S3 Object resource that was added).

Now switch to the Simulator tab and check out the bucket. You should see the file "hello.txt" there.

Note that although we are uploading a file to a bucket, this is still preflight code that runs only once at compile time. So the file is pre-populated in the bucket during deployment, not when the app is running.