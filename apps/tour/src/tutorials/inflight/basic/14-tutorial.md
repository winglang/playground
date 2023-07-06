# Conclusion

Congrats! You now know Wing's main concept - the two execution phases 🎉

### Recap of what we've covered in this tutorial
1. Preflight code is code that runs once, at compile time, to generate the infrastructure configuration of your cloud application.
2. Inflight code is code that runs at runtime to handle your application logic.
3. Wing programs start in preflight, but can switch to inflight using the inflight keyword.
4. Objects in Wing have different contracts in preflight and inflight. 
5. The IDE will display the contract that is relevant to the current execution phase.
6. Inflight methods can only be called in inflight contexts, and preflight functions from preflight contexts.
7. Inflight code can reference data from preflight, but the data cannot be mutated.

### More advanced concepts
You can continue to dive into more advanced concepts of preflight and inflight code in the [next tutorial](/advanced-preflight-inflight). It covers preflight, inflight and mixed phase classes, as well as how the compiler works to make everything we've covered possible.

You can also read the preflight and inflight [documentation page](https://www.winglang.io/docs/concepts/inflights) which covers the concepts in this tutorial and the next one in more detail.

Alternatively, you can explore other tutorials and documentation pages:

### Interactive Tutorials 

[Intro to Wing](/)

[Learn about Bucket](/bucket)

[Introduction to Counter](/counter)

[Working with Queue](/queue)

[The Topic Resource](/topic)

### Documentation

[Get started](https://docs.winglang.io/getting-started) on a new project or brush up for your existing Wing code.

[Learn about Wing's core concepts](https://www.winglang.io/docs/category/core-concepts).

### Playground

Put your skills to the test using the [playground](https://docs.winglang.io/getting-started).
