# Preflight - Wing's default phase

Let's begin with preflight code.

This is code that runs once, at compile time, to set up the infrastructure of the app in the cloud (create the DB, set up queues, API endpoints, etc).

If you look at the editor, you can see that we have preflight code there that sets up a storage bucket for us to play with.

> Note: We don't need any special annotation to define that this is preflight code because preflight is Wing's default phase.

When the code is compiled to a specific cloud provider it will be substituted by an implementation for that cloud. I.e, for AWS it will be an S3 Bucket.

Please check out the AWS/Terraform compilation target window on the bottom-right. Notice how the cloud.Bucket was replaced by an S3 Bucket in the Terraform definitions.

You can now switch to the Simulator tab and play with the Bucket (upload, download, delete files, etc).