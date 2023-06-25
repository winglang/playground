#!/bin/bash

dir="$( cd "$( dirname "$0" )" && pwd )"

pushd "${dir}/lib"
pnpm --version
rm -rf node_modules pnpm-lock.yaml
pnpm install
rm -rf .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/@aws-sdk .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/@azure .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/cdktf

popd
rm -rf "${dir}/dist"
mkdir -p "${dir}/dist"
tar zcf "${dir}/dist"/playground.tgz -C "${dir}/lib" .
