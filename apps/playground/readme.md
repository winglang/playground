# Running locally

## Pre-requisites

- Vite - `npm i -g vite`
- Vite plugins - `npm i -g vite-plugin-externals -D`
- A GitHub personal access token **that is exported** (export GITHUB_TOKEN=...)

From repo root:

```sh
npm install
npm run build
```

From playground root:

```sh
npm run dev
```

### Special redirect environment variables

We can have two Vercel projects of the playground app:

## `*.play.winglang.io`

Needs the `VITE_REDIRECT_TO` environment variable set to `https://winglang.io/play`.

Will redirect to the main playground app if there's no tabs open.

## `play.winglang.io`

Needs the `VITE_REDIRECT_PATTERN` environment variable set to `https://xxx.play.winglang.io/`.

Will redirect to the subdomain playground app if there's three or more tabs open.
