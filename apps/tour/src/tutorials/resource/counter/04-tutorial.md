# Demonstrate the atomicity of the Counter

Notice the following code which pushes 100 messages to a queue with two consumers.
Each one increases the counter value and puts it in a file in the bucket.
If the counter was not atomic, the value of the last file would not be 100 because of race conditions.

1. In the Wing Simulator, invoke the "Invoke Me!" Function.
2. This function pushes the 100 messages to the queue.
3. Notice the logs on the bottom panel.
4. Click on the cloud.Bucket in the simulator.
5. Notice the files and their content. See that the counter reached 100.
6. Click on the AWS/TERRAFORM compilation output and explore the generated assets.
