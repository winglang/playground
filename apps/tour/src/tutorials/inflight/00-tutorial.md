# Welcome to the preflight/inflight tutorial!

Wing has two execution phases:
1. ***Preflight:*** Code that runs once, at compile time, to generate the infrastructure configuration of your cloud application. For example, set up the DB, queues, storage buckets, API endpoints, etc.
2. ***Inflight:*** Code that runs at runtime to handle the application logic. For example, handles API requests, processes queue messages, etc. Inflight code can be executed on compute platforms in the cloud, such as function services (lambda), containers, VMs or physical servers.

You are probably familiar with solutions in which code of the two execution phases is separated into different languages, frameworks and compilers (Terraform, CDK, Pulumi, and others).

Wing's main innovation is that it unifies both execution phases under the same programming model.

In this tutorial you will learn what this unification means in practice and how to write code that takes advantage of it.

Click ***Start*** to begin.