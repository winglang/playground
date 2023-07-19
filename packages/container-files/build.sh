#!/bin/bash -e

dir="$( cd "$( dirname "$0" )" && pwd )"

pushd "${dir}/lib"
rm -rf node_modules package-lock.json
npm install
rm -rf ./node_modules/@winglang/sdk/node_modules/@aws-sdk ./node_modules/@winglang/sdk/node_modules/@azure ./node_modules/@winglang/sdk/node_modules/cdktf

pushd "${dir}/app"
npm install
npm run build
popd

popd
rm -rf "${dir}/dist"
mkdir -p "${dir}/dist"
cp -rf "${dir}/app/dist" "${dir}/lib/"
tar zcf "${dir}/dist"/playground.tgz -C "${dir}/lib" .
