# Use cloud.Function for invoking the handler

Let's wrap the inflight code with a cloud.Function

1. Add code to push string s into `q` in line 7
2. Add a cloud.Function resource that will use the handler
```ts
new cloud.Function(handler);                                          
```
3. Notice that there are a lot of new resources, including IAM permissions 
4. In IAM policy, find the `sqs:SendMessage` permission generated for the cloud.Function

Next, lets build this code for a different target, Wing Simulator
