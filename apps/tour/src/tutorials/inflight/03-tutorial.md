# Inflight - Intro

Inflight code is the runtime that handles our application logic. For example, handles API requests, processes queue messages, etc.

Unlike preflight code, which runs at compile time on a single machine, inflight code runs post-deployment on compute platforms in the cloud. These platforms can be long running ones, like containers, VMs or physical machines. Or they can be ephemeral (short lived), like function services (Lambda). 

Therefore, inflight code can be executed multiple times and on different machines in parallel. 

The editor contains simple inflight code that prints "Hello World!" to the log.

***Notice that the code has the `inflight` phase modifier to indicate that it is inflight code.***

Click ***Next*** to run this code.