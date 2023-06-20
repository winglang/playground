# Accessing preflight data from inflight code - part 2

In the previous step, we've added inflight code that naturally accessed the bucket that was defined in the preflight phase (the code is also available to you in this step).

This interaction feels natural not because it is similar to other cloud code you may have written or seen, but because it is similar to code for single machines. It looks and behaves very much like code that instantiates an OS service in one scope and then accesses it from a different scope, right?

The main difference between such code and ours is that ours is split into two execution phases: 
1. Preflight code that sets up the services at compile time (function and bucket).
2. Inflight code to access the bucket at runtime - ***from different machines, amd possibly much later***. 
   
Another difference is that the services we use here are not OS services (like a file system), but cloud services (like a bucket and a function). Some of them may need to preserve their state between deployments. For example, the bucket may need to preserve the files that were uploaded to it in previous deployments.

The Wing compiler does some work behind the scenes to make our cloud code behave like code for single machines. 

The main hurdle it needs to overcome is that inflight code runs at a later time and on different machines than the machine that runs the preflight code. So it can't simply pass pointers to data structures in memory between them.

It also needs to take care of network topology to allow communication between the different services and give them the permissions they need to access each other.

Click ***Next*** to dive deeper into what the compiler does.