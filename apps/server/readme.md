# Running locally

## Pre-requisites

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