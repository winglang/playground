# Welcome to the preflight/inflight tutorial!

Wing has two execution phases:
1. ***Preflight:*** code that runs once, at compile time, to generate the infrastructure configuration of your cloud application. For example, setting up databases, queues, storage buckets, API endpoints, etc.
2. ***Inflight:*** code that runs at runtime to perform your application logic. For example, handling API requests, processing queue messages, etc. Inflight code can be executed on compute platforms in the cloud, such as function services (lambda), containers, VMs or physical servers.

You are probably familiar with solutions in which code of the two execution phases is separated into different languages, frameworks and compilers (Terraform, CDK, Pulumi, and others).

Wing's main innovation is that it unifies both execution phases under the same programming model, through the concepts of preflight code and inflight code.

In this tutorial you will learn what this unification means in practice and how to write code that takes advantage of it.

Click ***Start*** to begin.