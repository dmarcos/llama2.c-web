#!/bin/bash

if [ -d "gh-pages" ]; then
  rm -rf "gh-pages"
fi

mkdir gh-pages
cp index.html gh-pages/index.html
cp style.css gh-pages/style.css
cp main.js gh-pages/main.js
cp llama2c-worker.js gh-pages/llama2c-worker.js
cp llama2c.wasm gh-pages/llama2c.wasm
cp -rf vendor gh-pages/vendor
mkdir gh-pages/llama2.c
cp llama2.c/tokenizer.bin gh-pages/llama2.c/tokenizer.bin

# git subtree push --prefix gh-pages origin gh-pages
