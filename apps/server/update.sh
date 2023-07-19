#!/bin/sh

dir="$( cd "$( dirname "$0" )" && pwd )"

cd "${dir}"
npm update @wingconsole/server

cd "${dir}/app"
npm update @wingconsole/ui