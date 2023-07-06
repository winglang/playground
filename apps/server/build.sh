#!/bin/sh

dir="$( cd "$( dirname "$0" )" && pwd )"

tsup-node --format=esm --target=es2022 src/index.ts

cd "${dir}/app"
npm install
npm run build
