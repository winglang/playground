# Connecting inflight and preflight - part #1

After writing some preflight code that sets up a bucket, and inflight code that prints hello world, let's connect the two.

> *The end result is cloud code that feels more like regular code for single machines in most other languages.*

> *The only difference is that the code is split into two phases, and some of the services in the standard library are not in-memory data structures or OS services, but they are cloud services that are being used as if they were regular OS services.*