#!/bin/sh

dir="$( cd "$( dirname "$0" )" && pwd )"

cd "${dir}/lib"
rm -rf node_modules pnpm-lock.yaml
pnpm --version
pnpm update -L @wingconsole/server

cd "${dir}/app"
npm update @wingconsole/ui