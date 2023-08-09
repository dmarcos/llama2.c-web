#!/bin/bash
source ./vars.sh

# Remove existing WASI sdk.
if [ -d "$WASI_SDK_PATH" ]; then
  rm -rf "$WASI_SDK_PATH"
fi

if [ -d "lib" ]; then
  rm -rf "lib"
fi

if [ -d "models" ]; then
  rm -rf "models"
fi

mkdir models

# Init llama2.c submodule
# git submodule init  
# git submodule update

curl -L https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-${WASI_VERSION}/${WASI_FILENAME} -o ${WASI_FILENAME}
tar xvf wasi-sdk-${WASI_VERSION_FULL}-macos.tar.gz
rm wasi-sdk-${WASI_VERSION_FULL}-macos.tar.gz

#curl -L https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-${WASI_VERSION}/${BUILTINS_LIBRARY_TAR_FILENAME} -o ${BUILTINS_LIBRARY_TAR_FILENAME}

curl -L https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-20/libclang_rt.builtins-wasm32-wasi-20.0.tar.gz -o ${BUILTINS_LIBRARY_TAR_FILENAME}
tar xvf ${BUILTINS_LIBRARY_TAR_FILENAME}
rm ${BUILTINS_LIBRARY_TAR_FILENAME}

curl -L https://huggingface.co/karpathy/tinyllamas/resolve/main/stories15M.bin -o models/stories15M.bin

# git clone https://github.com/karpathy/llama2.c.git
#$CC run.c -D_WASI_EMULATED_PROCESS_CLOCKS -D_WASI_EMULATED_MMAN -lwasi-emulated-process-clocks -o run.wasm
