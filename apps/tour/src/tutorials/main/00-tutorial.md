# Welcome to Winglang!

This is a step-by-step introductory guide to the Winglang cloud programming language. It is designed
to walk you through some of the unique aspects of Wing as a cloud programming language and give you
a sense of the developer experience we are aiming for.

Wing combines infrastructure _and_ runtime code into a single language, enabling developers to stay
in their creative flow, and to deliver better software, faster and more securely.

### Who is this tutorial for?

The tutorial is designed for developers with prior experience with object-oriented programming, with
or without experience building cloud systems.

Wing is inspired from modern object-oriented programming languages such as JavaScript, TypeScript,
Swift, C#, Java, Kotlin, Python and many more. If you have experience with one of these languages,
you'll likely be able to learn how to code in Wing in no time.

### Feedback ❤️

This is early days for Wing and for this tutorial. If you encounter any issues, have any questions
or even just want to hang out with fellow geeks, please don't hesitate to ping us at the [Wing
Slack](https://t.winglang.io/slack) or [file an issue](https://github.com/winglang/wing).

Wing is an open-source project, and contributions of all kinds are welcome. Check out our
[contribution guide](https://www.winglang.io/contributing) for more details.

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
