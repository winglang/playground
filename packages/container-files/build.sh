#!/bin/bash -e

dir="$( cd "$( dirname "$0" )" && pwd )"

pushd "${dir}/lib"
pnpm --version
rm -rf node_modules pnpm-lock.yaml
pnpm install
rm -rf .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/@aws-sdk .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/@azure .//node_modules/.pnpm/*/node_modules/@winglang/sdk/node_modules/cdktf

wing_sdk_package_json=$(find . -type f  -path "*/@winglang/sdk/package.json")
wing_sdk_dir=$(dirname "$wing_sdk_package_json")
pushd $wing_sdk_dir
node "$dir/patch.js"
popd

pushd "${dir}/app"
npm install
npm run build
popd

popd
rm -rf "${dir}/dist"
mkdir -p "${dir}/dist"
cp -rf "${dir}/app/dist" "${dir}/lib/"
tar zcf "${dir}/dist"/playground.tgz -C "${dir}/lib" .
