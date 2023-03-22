import { load, invoke } from "winglang";
import { createFsFromVolume } from "@cowasm/memfs";
import wingcURL from "winglang/wingc.wasm?url";
import { Volume } from "@cowasm/memfs";
import { Buffer } from "buffer";

import {
  createConnection, 
  BrowserMessageReader, 
  BrowserMessageWriter,
  InitializeParams,
  TextDocumentSyncKind,
  InitializeResult,
  CompletionItem,
  DocumentSymbol,
  Hover,
} from "vscode-languageserver/browser";

import * as wingCompiler from "winglang/dist/wingc";

const wingsdkJSIIContent = await import("@winglang/sdk/.jsii?raw").then(
  (i) => i.default
);
const wingsdkPackageJsonContent = await import(
  "@winglang/sdk/package.json?raw"
).then((i) => i.default);

const fs = createFsFromVolume(
  Volume.fromJSON({
    "/wingsdk/package.json": wingsdkPackageJsonContent,
    "/wingsdk/.jsii": wingsdkJSIIContent,
  })
);
let wasmFetchData = await fetch(wingcURL).then((d) => d.arrayBuffer());
const wingcWASMData = new Uint8Array(wasmFetchData);
  
const wingc = await load({
  env: {
    RUST_BACKTRACE: "full",
  },
  fs: fs,
  wingcWASMData,
  wingsdkManifestRoot: "/wingsdk",
  imports: {
    env: {
      send_notification,
    },
  },
});

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);
const connection = createConnection(messageReader, messageWriter);

connection.onInitialize((_params: InitializeParams) => {
  const result: InitializeResult = {
  capabilities: {
      textDocumentSync: TextDocumentSyncKind.Full,
      completionProvider: {
        triggerCharacters: ["."],
      },
      hoverProvider: true,
      documentSymbolProvider: true,
    },
  };
  return result;
});

connection.onDidOpenTextDocument(async (params) => {
  const string = JSON.stringify(params);
  try {
    wingCompiler.invoke(wingc, "wingc_on_did_open_text_document", string);

  } catch (e) {
    console.log(11, e)
    s.reportError(e);
    // connection.dispose();
  }
});
let s = self
connection.onDidChangeTextDocument(async (params) => {
  const string = JSON.stringify(params);
  try {
    wingCompiler.invoke(wingc, "wingc_on_did_change_text_document", string);
  } catch (e) {
    console.log(22, e)
    // messageReader.dispose();
    // connection.dispose();
    // s.close();
    s.reportError(e);
  }
});

connection.onCompletion(async (params) => {
  try {
    const result = wingCompiler.invoke(
      wingc,
      "wingc_on_completion",
      JSON.stringify(params)
    ) as string;
    return JSON.parse(result) as CompletionItem[];

  } catch (e) {
    console.log(33, e)
    s.reportError(e);
    // connection.dispose();
  }
});
connection.onDocumentSymbol(async (params) => {
  try {

    const result = wingCompiler.invoke(
      wingc,
      "wingc_on_document_symbol",
      JSON.stringify(params)
    );
    if (result == 0) {
      return null;
    } else {
      return JSON.parse(result as string) as DocumentSymbol[];
    }
  } catch (e) {
    console.log(44, e)
    s.reportError(e);
    // connection.dispose();
  }
});
connection.onHover(async (params) => {
  try {

    const result = wingCompiler.invoke(
      wingc,
      "wingc_on_hover",
      JSON.stringify(params)
    );
    if (result == 0) {
      return null;
    } else {
      return JSON.parse(result as string) as Hover;
    }
  } catch (e) {
    console.log(55, e)
    s.reportError(e);
    // connection.dispose();
  }
});
connection.listen()

/**
 * This function is called by the WASM code to immediately
 * send a notification to the client.
 */
function send_notification(
  type_ptr: number,
  type_len: number,
  data_ptr: number,
  data_len: number
) {
  const type_buf = Buffer.from(
    (wingc.exports.memory as WebAssembly.Memory).buffer,
    type_ptr,
    type_len
  );
  const type_str = new TextDecoder().decode(type_buf);

  const data_buf = Buffer.from(
    (wingc.exports.memory as WebAssembly.Memory).buffer,
    data_ptr,
    data_len
  );
  const data_str = new TextDecoder().decode(data_buf);

  // purposely not awaiting this, notifications are fire-and-forget
  void connection.sendNotification(type_str, JSON.parse(data_str));
}