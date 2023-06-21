# Contract per phase - Explanation

As you've seen earlier in the tutorial, we defined a storage bucket in preflight, and then used it in inflight.

To help refresh your memory, we have similar code in the editor now.

As you can see, the preflight code pre-populates the bucket with a file so it is always available when the app runs. 

This means that we can interact with resources in the preflight phase, not just create them.
However, the actions that we need to perform on resources in the preflight phase are different than the actions needed for the inflight phase.

Let's take the bucket again as an example:

In preflight, which is the set up phase of the app, we need to be able to create our bucket, pre-populate it with files that would be available in it when the app starts, define events to be called when actions are performed on it, etc.

But for the inflight, or runtime phase of the app, we need to be able to perform other operations on the bucket. For example, we need to be able to get the content of the files in the bucket, or to modify and delete them as the state of the app evolves. These are not relevant for the infrastructure setup phase (preflight) because our app is not running and no one can interact with it when it is being set up.

This is why in Wing, we have two different contracts (or interfaces) for the same object: One for preflight and another for inflight.

The Wing IDE extension will show you the relevant contract for the phase you are in.

Click ***Next*** to see how this works in practice.