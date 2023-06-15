# Write cloud code like you would write a monolith

You might have noticed that the example from the previous step felt very natural - almost not like cloud code at all. 

This is because the code is written in a way that is very similar to how you would write a monolith. 

The only difference is that the code is split into two phases, and some of the services in the standard library are not in-memory data structures or OS services, but they are cloud services that are being used as if they were regular OS services.