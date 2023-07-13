## Welcome to the preflight/inflight tutorial!

One of the main differences between Wing and other languages is that it unifies both infrastructure definitions and application logic under the same programming model. This is enabled by the concepts of the preflight and inflight execution phases:

1. ***Preflight:*** code that runs once, at compile time, to generate the infrastructure configuration of your cloud application. For example, setting up databases, queues, storage buckets, API endpoints, etc.
2. ***Inflight:*** code that runs at runtime to perform your application logic. For example, handling API requests, processing queue messages, etc. Inflight code can be executed on compute platforms in the cloud, such as function services (AWS Lambda), containers, VMs or physical servers.

In this tutorial you will learn how this unified model works in practice and how to write code that takes advantage of it.

Click **START** to begin.