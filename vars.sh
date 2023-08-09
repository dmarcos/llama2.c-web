export WASI_VERSION=20
export WASI_VERSION_FULL=${WASI_VERSION}.0
export WASI_FILENAME=wasi-sdk-${WASI_VERSION_FULL}-macos.tar.gz
export BUILTINS_LIBRARY_FILENAME=libclang_rt.builtins-wasm32
export BUILTINS_LIBRARY_TAR_FILENAME=${BUILTINS_LIBRARY_FILENAME}-${WASI_VERSION_FULL}.tar.gz
export WASI_SDK_PATH=`pwd`/wasi-sdk-${WASI_VERSION_FULL}
export CC="${WASI_SDK_PATH}/bin/clang --sysroot=${WASI_SDK_PATH}/share/wasi-sysroot"
export LD="${WASI_SDK_PATH}/bin/wasm-ld"