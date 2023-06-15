# An example

We'll begin with our canonical example of a cloud function that puts a file in a storage bucket.

1. Please check out the code in the editor, see where we have inflight and preflight code, and how they interact with one another.

2. Check out the AWS/Terraform compilation target window on the bottom-right. Notice how the bucket and Function are defined and the IAM policies that are generated to allow the function to put a file in the bucket.

Don't worry if you don't get the full picture yet, we will dive deeper into everything in the next steps.