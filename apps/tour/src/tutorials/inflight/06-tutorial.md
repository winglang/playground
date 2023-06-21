# Compiler challenges

In the previous step, we've added inflight code that naturally accessed the bucket that was defined in the preflight phase (the code is also available to you in this step).

The reason this interaction feels natural is because it's similar to good code that you've written or seen in the past. Not cloud code though, but good code for single machines. 

If you look closer, you can see that our code here looks and behaves very much like code that instantiates an Operating System services in one scope (think local file instead of a cloud bucket) and then uses it from a different scope (that of a function), right?

The main difference between such code for a single machine and our cloud code here is that our code is split into two execution phases: 
1. Preflight code that sets up the services at compile time (function and bucket).
2. Inflight code to uses the bucket at runtime - ***from different machines, amd possibly much later***. 
   
Another difference is that the services we use here are not Operating System services (like a file system), but cloud services (like a bucket and a function).

The Wing compiler does some work behind the scenes to make our cloud code behave like code for single machines. 

The main hurdle it needs to overcome is that inflight code runs at a later time and on different machines than the machine that runs the preflight code. So it can't simply pass pointers to data structures in memory between them.

It also needs to take care of network topology to allow communication between the different services and give them the permissions they need to access each other.

Click ***Next*** to see how the compiler overcomes these challenges.