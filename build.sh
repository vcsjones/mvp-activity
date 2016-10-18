#!/bin/bash

npm install
mkdir -p ./out
mkdir -p ./out/css
mkdir -p ./out/script
tsc --outDir ./out/script
cp src/*.html ./out
cp src/css/*.css ./out/css
cp src/manifest.json ./out/manifest.json
cp -r ./src/images/ ./out/images/
pushd ./out
zip -r -X ../out.zip *
popd 