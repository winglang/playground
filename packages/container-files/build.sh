#!/bin/bash -e

dir="$( cd "$( dirname "$0" )" && pwd )"

pushd "${dir}/lib"
pnpm --version
rm -rf node_modules pnpm-lock.yaml
pnpm install
patch_function_file=$(find . -type f -iname function.js -path "*/shared-aws/*")
patch $patch_function_file patches/@winglang__sdk.patch
rm -rf .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/@aws-sdk .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/@azure .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/cdktf

pushd "${dir}/app"
npm install
npm run build
popd

popd
rm -rf "${dir}/dist"
mkdir -p "${dir}/dist"
cp -rf "${dir}/app/dist" "${dir}/lib/"
tar zcf "${dir}/dist"/playground.tgz -C "${dir}/lib" .
