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

We can have two Vercel projects of the playground app:

#### `*.play.winglang.io`

Needs the `VITE_REDIRECT_TO` environment variable set to `https://winglang.io/play`.

Will redirect to the main playground app if there's no tabs open.

#### `play.winglang.io`

Needs the `VITE_REDIRECT_PATTERN` environment variable set to `https://xxx.play.winglang.io/`.

Will redirect to the subdomain playground app if there's three or more tabs open.

#### Running with a local console server

Needs the `VITE_CONSOLE_SERVER_URL` environment variable set to `http://localhost:3000` (or whatever the server url is).

#### Running with a local controller server

Needs the `VITE_CONSOLE_CONTROLLER_URL` environment variable set to `http://localhost:3000/create`.
