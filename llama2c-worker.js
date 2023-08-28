var wasiModule = await import(self.location.origin + '/vendor/wasi.js');
var WASIJS = wasiModule.WASI;
var WASIContext = wasiModule.WASIContext;

var context;
var result;

// Initialize WASM memory.
var wasmMemory = new WebAssembly.Memory({initial:32, maximum: 10000});
var wasmImports = {
  JS: {},
  env: {memory: wasmMemory, table: new WebAssembly.Table({initial: 2, element: 'anyfunc'})},
};
var fileRequest = await fetch(self.location.origin + '/' + 'llama2.c/tokenizer.bin');
debugger;
var fileContent = await fileRequest.arrayBuffer();

var modelURL = 'https://huggingface.co/karpathy/tinyllamas/resolve/main/stories15M.bin';
if (isLocalhost()) { modelURL = self.location.origin + '/' + 'models/stories15M.bin'; }

var modelFileRequest = await fetch(modelURL);
var contentLength = modelFileRequest.headers.get('Content-Length');

var responseSize = 0;
let chunksAll = new Uint8Array(contentLength); // (4.1)

for await (var chunk of streamAsyncIterable(modelFileRequest.body)) {
  chunksAll.set(chunk, responseSize); // (4.2)
  responseSize += chunk.length;
  self.postMessage({
    eventType: "MODELDOWNLOADPROGRESS",
    eventData: responseSize / contentLength
  });
}

async function* streamAsyncIterable(stream) {
  const reader = stream.getReader()
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) return
      yield value
    }
  } finally {
    reader.releaseLock()
  }
}

var output = '';

context = new WASIContext({
  args: ['run', 'model.bin', '-i', 'Once upon a time'],
  stdout: function (out) { 
            output += out;
            self.postMessage({
              eventType: "STDOUT",
              eventData: out
            });
          },
  stderr: function (err) {
    self.postMessage({
      eventType: "STDERR",
      eventData: err
    }); 
    console.error('stderr', err); 
  },
  stdin: () => prompt('stdin:'),
  fs: {
    '/model.bin': {
      path: modelFileRequest.name,
      timestamps: {
        change: new Date(modelFileRequest.headers.get('Last-Modified')),
        access: new Date(modelFileRequest.headers.get('Last-Modified')),
        modification: new Date(modelFileRequest.headers.get('Last-Modified')),
      },
      mode: 'binary',
      content: new Uint8Array(chunksAll),
    },
    '/tokenizer.bin': {
      path: 'tokenizer.bin',
      timestamps: {
        change: new Date(fileRequest.headers.get('Last-Modified')),
        access: new Date(fileRequest.headers.get('Last-Modified')),
        modification: new Date(fileRequest.headers.get('Last-Modified')),
      },
      mode: 'binary',
      content: new Uint8Array(fileContent),
    }
  }
});

function isLocalhost() {
  var url = self.location.origin;  
  return url.indexOf('127.0.0.1') !== -1 || url.indexOf('localhost') !== -1;
}

result = await WASIJS.start(fetch('llama2c.wasm'), context, wasmImports);