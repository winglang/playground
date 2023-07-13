## Inflight - Introduction

Inflight code is the phase that handles our application logic. E.g., handles API requests, processes queue messages, etc.

Unlike preflight code, which runs at compile time, inflight code runs post-deployment on compute platforms in the cloud. These platforms can be long running ones, like containers, VMs or physical machines. Or they can be ephemeral (short lived), like function services (Lambda). 

Therefore, inflight code can be executed multiple times and on different machines in parallel.

Take a look at the editor, it contains simple inflight closure (function) that prints `Hello World!` to the log.

Notice the `inflight` phase modifier used in line 3.

> **We use the `inflight` phase modifier to tell the compiler that this function closure runs later on other machines.**

Click **NEXT** to run this code.