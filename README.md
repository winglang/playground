# wing playground

> This repository uses [pnpm](https://pnpm.io/), a fast, disk space efficient package manager. Instead of using `npm` in the command line, you can just use `pnpm`.
>
> If you want to always run the same package manager, you can use [ni](https://github.com/antfu/ni#readme). It reads your project configuration and uses npm, pnpm, yarn or bun automatically.
>
> Additionally, this repository uses [turborepo](https://turbo.build/repo) for cacheable and parallelizable job orchestration.

## Installation

```sh
pnpm install
```

## Development

Before you can start developing, you have to bring the wing dependencies.
Run the update command and make sure you have set the `GITHUB_TOKEN` env var (needs access to private wing repos).

```sh
pnpm run build
pnpm run update
pnpm run dev
```

## Testing

```sh
pnpm run test
```

## Building

```sh
pnpm run build
```

## packages

- [apps/playground](apps/playground) - the playground website
- [apps/console-build](apps/console-build) - dummy webapp to build the console ui specifically for the playground
- [apps/server](apps/server) - a compiler server
- [apps/cdk](apps/cdk) - cdk project for the server