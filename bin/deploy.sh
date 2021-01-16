#!/usr/bin/env sh

# Abort on errors
set -e

# Build
yarn run build

REMOTE_URL=$(git remote get-url origin)
VERSION=$(git log --format="%h" -n 1)

cd dist
echo 'bet.jgmontoya.com' > CNAME

git init
git add -A
git commit -m "version: $VERSION"
git push -f $REMOTE_URL master:deploy

cd -
