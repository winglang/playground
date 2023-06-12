# Compile for AWS

We finished building and testing our application locally 🥳 

1. Notice a new tab called *AWS/TERRAFORM* on the right side, next to *SIMULATOR*
2. This is the output of compiling the code to terraform on aws.
3. You can browse through the different terraform resources that where generate by the code
4. Look at the generated inflight javascript functions
5. This view automatically updates when changing the code, play with the code and have fun.

*🧑‍🎓 The compiler generates least privilege permissions, Look for the IAM Policy with `sqs:SendMessage` action*
