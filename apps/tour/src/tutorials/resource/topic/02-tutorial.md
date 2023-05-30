# Subscribe to a topic

1. The preflight API of cloud.Topic allows you to subscribe to its notifications.
2. Notice how the code prints the message from the topic to the log.
3. In the Wing Simulator (on the right) click on the "cloud.Topic" resource.
4. Publish a message, notice the logs on the bottom.
5. Click on the AWS/TERRAFORM compilation output and explore the consumer asset. 
6. Notice that a Lambda function was created to receive the topic messages.
7. See that it has the right permissions to subscribe to the topic.