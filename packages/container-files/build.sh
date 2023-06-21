#!/bin/sh

pushd lib
pnpm --version
pnpm install
popd
tsx scripts/updatePlayground.ts