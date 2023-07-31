# Playground Server

This server acts as the console backend for the playground/tour projects.
The server as two states:
  1. Console Server - serving the console server and ui, and providing an endpoint to update the wing code to compile. In production this is running on a seperate fly.io machine for each user.
  2. Controller - interacting with fly.io to create and delete console machines based on a configured queue and user requests. 

## Running locally

### Pre-requisites

From repo root:

```sh
npm install
npm run build
```

Running as a console server - from server root:

```sh
npm run watch
```

Running as a controller server - from server root:

```sh
npm run watch:controller
```

### Special environment variables

#### Running as a controller

Needs `IS_CONTROLLER` set to `true`