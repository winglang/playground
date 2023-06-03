# Run code on bucket events

Notice the following code which implement the `onCreate` and `onDelete` handler.

1. In the Wing Simulator, invoke the "Upload Files" Function.
2. This function uploads three files `file1.txt` `file2.txt` and `some.log`.
3. Notice the logs on the bottom panel.
4. Click on the Backup bucket in the simulator, you should see both `.txt` files.
5. Delete a file from the Origin bucket.
6. Can you see it was deleted on the Backup bucket.
