# Pushing a message to the our queue

Now that we have a function in our application, let's modify its code to send a message to the queue
(instead of printing these logs)..

Start by adding code to `push()` the function's payload to the queue object on line 7 (hint: check
out how the payload is added to the `log()` on line 6).

> If you need some help, use the little "SOLVE" bottom to the rescue.

### Connections, connections, connections...

After you've added the code that pushes to the queue, you should notice
how the simulator shows the relationship between the function resource and the queue resource.

This relationship is important when building cloud applications. It allows, for example, to
automatically infer the minimal security (IAM) policy needed in order to enable this interaction on
the cloud.

### Let's play

Let's invoke the **cloud.Function** in the simulator and check out how the queue has new messages in it (remember **Approx size**?).

In the next step we will write some code to consume the messages that were pushed to the queue.