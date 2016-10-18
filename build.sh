#!/bin/bash

npm install
mkdir -p ./out
tsc --outDir ./out
cp *.html ./out
cp *.css ./out
cp manifest.json ./out/manifest.json
cp -r ./images/ ./out/images/
pushd ./out
zip -r -X ../out.zip *
popd 