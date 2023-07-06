# Mutability protections
### Default immutability

The first protection Wing offers us against scenarios like the one in the previous steps is default immutability.

Please look in the editor. It is pre-populated with the same code from the previous steps.

The inflight code that increments the counter is commented out in line 8. 

Please uncomment it to see the compiler error that it generates in the editor and in the Simulator window ("Variable is not reassignable").

### Cannot reference mutable preflight data from inflight code

There are obviously valid cases for having mutable preflight data, so for every immutable type in Wing, we have a mutable counterpart. For example, the immutable type `num` can become mutable if we use `let var` to instantiate it.

But it doesn't mean that we can use this loophole to write unsafe code. 

Let's try it out: 

Change the `let` declaration in line 5 to `let var` and see the resulting error in the editor and the Simulator window ("Variable cannot be reassigned from inflight").

As you can see, the compiler protects us from trying to change the value of data that was captured from the preflight execution phase.

### Does this mean we cannot have a counter in our function?
You're probably wondering now if these restrictions mean we cannot have a counter in our function.

They don't, they just mean we need to be mindful to how we create it.

Click **NEXT** to learn how to create our counter correctly.