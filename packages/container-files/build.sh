#!/bin/sh

pushd lib
pnpm --version
pnpm install
rm -rf .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/@aws-sdk .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/@azure .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/cdktf

popd
rm -rf dist
mkdir -p dist
tar zcf dist/playground.tgz -C ./lib .