## Conclusion

Congrats! You now know Wing's main concept - the preflight and inflight execution phases 🎉

### Recap of what we've covered in this tutorial
1. Preflight code is code that runs once, at compile time, to generate the infrastructure configuration of your cloud application.
2. Inflight code is code that runs at runtime to handle your application logic.
3. Wing programs start in preflight, but can switch to inflight using the inflight keyword.
4. Objects in Wing have different contracts in preflight and inflight.
5. The IDE will display the contract that is relevant to the current execution phase.
6. Inflight methods can only be called in inflight contexts, and preflight methods from preflight contexts.
7. Inflight code can reference data from preflight, but the data cannot be mutated.
8. The Wing compiler takes care of IAM policies and other cloud mechanics for us.

### More advanced concepts
You can dive into more advanced concepts of preflight and inflight code, including preflight, inflight and mixed phase classes in the preflight and inflight [documentation page](https://www.winglang.io/docs/concepts/inflights).

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

Put your skills to the test using the [playground](https://www.winglang.io/play/).
