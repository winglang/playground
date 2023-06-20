# Mutability - part 1

As we've seen in the previous step, the compiler does the necessary work for us behind the scenes to allow us to write code that accesses preflight data from inflight code.

Because the inflight code later runs on different machines than the machine that ran the preflight code, the compiler needs to serialize the preflight data and store it in a way that would allow the inflight code to recreate it later.

This results with an important restriction on mutability. Let's see what happens if we try to modify the preflight data in the inflight code:

Please look in the editor. It is pre-populated with preflight code that creates a function and a counter to count the number of times the function was invoked. It also contains the inflight code that increments the counter when the function is invoked.

The inflight code that increments the counter is commented out in line 8. Please uncomment it to see the compiler error that it generates in the editor and in the Simulator Window ("Variable numInvocations is not reassignable").

The reason for this error is that wing types are immutable by default in order to protect them from being changed by inflight code that references them from a different machine at a later time. We need this protection because of the above mentioned serialization. The data that is passed is a copy of the original data, and not a reference to it (we couldn't reference it even if we wanted to because the preflight code that created it already finished running by the time the inflight code that references it runs. The machine that ran it might not even be on anymore). Therefore, if the inflight code changes the data, the original data will not be changed. Even worse, if the inflight code runs on different machines, changes made by one instance will not be visible to other instances.

This means that the preflight data that is referenced by inflight code needs to be immutable in order to protect us from un-forseen consequences when changing it by inflight code.

But this restriction doesn't mean we cannot have our counter, we just need to be mindful to how we create it.

Click ***Next*** to learn how to create our counter correctly.



