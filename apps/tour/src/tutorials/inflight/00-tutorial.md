# Welcome to the inflight/preflight tutorial!

Wing has two execution phases:
1. ***Preflight:*** Code that runs once, at compile time, to set up the infrastructure of the app in the cloud (create the DB, set up queues, API endpoints, etc).
2. ***Inflight:*** Code that runs at runtime to handle the application logic (handle API requests, process queue messages, etc).

You are probably familiar with solutions in which code of these phases is separated into different languages, frameworks and compilers.

Wing's main innovation is that it unifies both of them under the same programming model and compiler.

In this tutorial you will learn what this unification means in practice, what it enables, and how to write code that takes advantage of it.

Click ***Start*** to begin.