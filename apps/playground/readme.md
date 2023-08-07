# Running locally

## Pre-requisites

- Vite - `npm i -g vite`

From repo root:

```sh
npm install
npm run build
```

From playground root:

```sh
npm run dev
```

### Special environment variables

#### Running with a local console server

Needs the `VITE_CONSOLE_SERVER_URL` environment variable set to `http://localhost:3000` (or whatever the server url is).

#### Running with a local controller server

Needs the `VITE_CONSOLE_CONTROLLER_URL` environment variable set to `http://localhost:3000/create`.
