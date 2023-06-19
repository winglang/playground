#!/bin/sh

cd lib
rm -rf node_modules pnpm-lock.yaml
pnpm --version
pnpm update @wingconsole/app