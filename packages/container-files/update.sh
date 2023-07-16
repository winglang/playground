#!/bin/sh

dir="$( cd "$( dirname "$0" )" && pwd )"

cd "${dir}/lib"
rm -rf node_modules package-lock.json
npm update @wingconsole/server

cd "${dir}/app"
npm update @wingconsole/ui