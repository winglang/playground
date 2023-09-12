## Welcome to Winglang!

This is a step-by-step introductory guide to the Winglang cloud programming language. It is designed
to walk you through some of the unique aspects of Wing as a cloud programming language and give you
a sense of the developer experience we are aiming for.

Wing combines infrastructure _and_ runtime code into a single language, enabling developers to stay
in their creative flow, and to deliver better software, faster and more securely.

### So, what are we building?

We're going to quickly build a "smart queue". Each message that's pushed to the queue stored inside
an object called `latest.txt` in the bucket. This means that you can always retrieve from the bucket
the latest message that was pushed to the queue. Not super useful, but should be good enough to get
you introduced to Winglang's concepts.

To achieve this, we are going to use a few *cloud resources*: a **queue**, a **bucket**, and a
**function**. The general idea is that when a message is pushed to the queue, the function gets
triggered and stores it into the bucket.

You'll interact with it in the embedded Wing Simulator, and then compile your code so it can be
deployed to AWS using Terraform.

Hope you enjoy the journey, click **Start** to begin!
