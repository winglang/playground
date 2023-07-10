# Mutability - how to create a counter

So how can we count the number of invocations? 

We need to use an explicit resource for that. One that is designed to be changed atomically because function invocations can happen in parallel. The resource also needs to save a shared state between machines because the invocations can happen on different machines.

Fortunately, Wing has such a resource, the `cloud.Counter`, and it has its own tutorial that you are welcome to try out.

But to satisfy your curiosity, you can click the **SOLVE** button on the upper right corner of the editor to see how to use the cloud.Counter to count the number of invocations. 

The comments on the code explain how it works.

You can play with it in the Simulator window and invoke the **cloud.Function** a number of times to see the counter incrementing.

We've solved the private case of the counter, but there is a more general lesson to learn from this:

> ***If you need to change preflight data from inflight code, you should remember that this data is shared between machines and at different times. It can also be modified from several machines in parallel. So you should use resources that allow you to perform these operations safely.***

Congratulation! you've covered a lot of preflight-inflight ground in this tutorial and you should now have a good understanding of the basics of the two execution phases.

Click **NEXT** to recap what we've covered in this tutorial and get links to further materials.