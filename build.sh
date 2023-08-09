#!/bin/bash

source ./vars.sh
$CC --target=wasm32-wasi -O3 -flto -fno-exceptions -I. -o llama2c.o -c ./llama2.c/run.c -D_WASI_EMULATED_MMAN
$LD --export-dynamic --allow-undefined --lto-O3 -lwasi-emulated-mman -L${WASI_SDK_PATH}/share/wasi-sysroot/lib/wasm32-wasi -lc -lc++ -lc++abi ${WASI_SDK_PATH}/share/wasi-sysroot/lib/wasm32-wasi/crt1.o --import-memory -Llib/wasi -lclang_rt.builtins-wasm32 llama2c.o -o llama2c.wasm
# --no-entry doesn't generate _start for the main function and gotta supply manually via JS.