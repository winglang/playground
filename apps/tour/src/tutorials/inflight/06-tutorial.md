# Different interfaces for the same objects in preflight and inflight

As you've seen in the last step, we defined our bucket in preflight, and then used it in inflight.
If you remember, we also saw at the beginning of the tutorial that we can interact with bucket in the preflight phase, not just create it.

The actions that can be performed in preflight are different than the actions that can be performed in inflight.
For example, in preflight we can create a bucket, pre-populate it with files, define events to be called when actions are performed on the bucket, etc. But we can't get files from the bucket, or delete files from it. These are actions that can only be performed in inflight.

This is why we have two different interfaces for the same object, one for preflight and one for inflight.

You will see autocomplete options and documentation in the IDE extension for an object depending on the phase you are in.

Let's see this in practice. 

Try exploring the autocomplete options for the bucket object in the preflight phase. You can do this by typing `bucket.` in the preflight phase in line 11, and see the autocomplete options.

Find the `onCreate` event listener in the options and add it to the bucket. 
This event listener will be called when a file is created in the bucket.

The onCreate function has one parameter - an inflight function to run whenever a file is created in the bucket.

You can give it the onCreateHandler inflight defined in line 5.

Now, lets add code to the handler that also prints the new file's content.

You can do this by typing `bucket.` in the handler on line 7. You will see that the autocomplete options are different than the ones you saw in the preflight phase. Find the `get` function and use it to get the file's content. Then you can print it to the log, similar to how we print the file's name above it.

Hint: there is a ***solve*** button in the editor if you have difficulties.