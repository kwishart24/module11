#/usr/bin/env sh
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:kwishart24/module11.git main:gh-pages

cd -
