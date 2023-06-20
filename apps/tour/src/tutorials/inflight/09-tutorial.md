# Mutability - part 2

For every immutable type in Wing, we have a mutable counterpart. For example, the immutable type ***num*** can become mutable if we use "let var" to instantiate it.

Can this be used to modify preflight data from inflight code? let's try it out: 

Change the "let" declaration in line 5 to "let var" and see the resulting error in the Simulator Window ("Cannot capture reassignable field 'numInvocations'").

This error makes sense, if types are immutable by default to protect from mutation by inflight code, then it makes sense the compiler would also protect us from passing mutable data to inflight code.

So how can we count the number of invocations? we need to use an explicit resource for that that, one that is designed to be changed atomically (because function invocations can happen in parallel) and to save a shared state between machines (because the invocations can happen on different machines).

Fortunately, Wing has such a resource, the cloud.Counter, and it has its own tutorial that you are welcome to try out.

But to satisfy your curiosity, you can click the ***solve*** button on the upper right corner of the editor to see how to use the cloud.Counter to count the number of invocations. The comments on the code explain how it works. You can play with it in the Simulator Window and invoke the cloud.Function a number of times to see the counter incrementing.

We've solved the private case of the counter, but there is a more general lesson to learn from this:

***If you need to change preflight data from inflight code, you should remember that this data is shared between machines and at different times, and can be modified from several machines in parallel, so you should use resources that allow you to perform these operations safely.***

After covering the main limitation that the compiler imposes on sharing data between preflight and inflight code, let's see a cool ability that the compiler gives us:

Click ***Next*** to learn how Wing exposes different contracts for the same object in preflight and inflight code.