# Mutability - how to create a counter

So how can we count the number of invocations? 

We need to use an explicit resource for that that, one that is designed to be changed atomically (because function invocations can happen in parallel) and to save a shared state between machines (because the invocations can happen on different machines).

Fortunately, Wing has such a resource, the cloud.Counter, and it has its own tutorial that you are welcome to try out.

But to satisfy your curiosity, you can click the ***solve*** button on the upper right corner of the editor to see how to use the cloud.Counter to count the number of invocations. 

The comments on the code explain how it works.

You can play with it in the Simulator window and invoke the cloud.Function a number of times to see the counter incrementing.

We've solved the private case of the counter, but there is a more general lesson to learn from this:

***If you need to change preflight data from inflight code, you should remember that this data is shared between machines and at different times. It can also be modified from several machines in parallel. So you should use resources that allow you to perform these operations safely.***

After covering the main limitation that the compiler imposes on sharing data between preflight and inflight code, let's see a cool ability that the compiler gives us:

Click ***Next*** to learn how Wing exposes different contracts for the same object in preflight and inflight code.