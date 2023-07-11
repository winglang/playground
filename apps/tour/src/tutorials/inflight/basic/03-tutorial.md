# Inflight - Intro

Inflight code is the runtime that handles our application logic. E.g., handles API requests, processes queue messages, etc.

Unlike preflight code, which runs at compile time on a single machine, inflight code runs post-deployment on compute platforms in the cloud. These platforms can be long running ones, like containers, VMs or physical machines. Or they can be ephemeral (short lived), like function services (Lambda). 

Therefore, inflight code can be executed multiple times and on different machines in parallel. 

Look at the the editor, it contains simple inflight code that prints "Hello World!" to the log.

Notice the `inflight` phase modifier used in line 3.

> ***We use the `inflight` phase modifier to mark inflight code that runs later on other machines.***

Click **NEXT** to run this code.