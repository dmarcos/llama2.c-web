# Minimal llama2.c to WebAssembly port

[Demo](https://diegomarcos.com/llama2.c-web/)

- No build system. Just a bash script.
- No Emscripten. 
- Stripped down to the bare minimum. Every line of code has a purpose.

This repo is Mac only for now.

This builds on a [minimal C++/C + libc to WASM template](https://github.com/dmarcos/wasm-minimal-libc) that I recommend to look at if you want to learn how the bare WASM stack works without the additional the complexity. Additional considerations to build llama2.c:

- **mmap is not part of the WASI standard** but there's an [emulation available on the wasi-sdk](https://github.com/WebAssembly/wasi-libc/blob/5d8a1409aa85acf8dbb197e13d33489ad1eac656/libc-top-half/musl/include/sys/mman.h#L1) by passing the `D_WASI_EMULATED_MMAN` flag to the compiler and linking against `wasi-emulated-mman` library. For this we also need to link against `clang_rt.builtins-wasm32` that the wasi-sdk distributes separatetly. 


## Setup

The command below downloads a wasi-sdk release bundle that contains the WASI headers, libraries, compiler (clang) and linker (wasm-ld)

```sh
./setup.sh
```

## Usage

Compiles and links C++ code to WASM

```sh
./build.sh
```

Starts a local Web server so you can run the code. Open in your browser http://localhost:8080 

```sh
./run.sh
```
## Prior work

https://github.com/michaelfranzl/clang-wasm-browser-starterpack/tree/dev/examples/11

https://medium.com/@michaelyuan_88928/running-llama2-c-in-wasmedge-15291795c470

https://stackoverflow.com/a/29694977/717508

https://github.com/taybenlor/runno

## Notes

`/vendor/wasi.js` is built from the [runno wasi js runtime](https://github.com/taybenlor/runno/tree/main/packages/wasi) by running `mpm run build`. There are two small modifications on [9b9dc1f3142c](https://github.com/taybenlor/runno/commit/9b9dc1f3142c) that I might submit upstream:

1. The ability to pass a WebAssembly.Memory object to the runtime. 
2. The ability to pass an object with JS-defined functions that can be invoked from native code.

I included a `wasi.js.original` file as a references for the differences (git diff wasi.js wasi.js.original)

https://github.com/taybenlor/runno/commit/9b9dc1f3142c

