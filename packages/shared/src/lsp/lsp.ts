import { createFsFromVolume } from "@cowasm/memfs";
import wingcURL from "@winglang/compiler/wingc.wasm?url";
import { Volume } from "@cowasm/memfs";
import { Buffer } from "buffer";

import {
  createConnection,
  BrowserMessageReader,
  BrowserMessageWriter,
  InitializeParams,
  TextDocumentSyncKind,
  InitializeResult,
  Diagnostic,
  Range,
  DidOpenTextDocumentParams,
  DidChangeTextDocumentParams
} from "vscode-languageserver/browser";

import * as wingCompiler from "@winglang/compiler";

const wingsdkJSIIContent = await import("@winglang/sdk/.jsii?raw").then(
  (i) => i.default
);
const wingsdkPackageJsonContent = await import(
  "@winglang/sdk/package.json?raw"
).then((i) => i.default);

const constructsJSIIContent = await import("constructs/.jsii?raw").then(
  (i) => i.default
);
const constructsPackageJsonContent = await import(
  "constructs/package.json?raw"
).then((i) => i.default);

const fs = createFsFromVolume(
  Volume.fromJSON({
    "/wingsdk/package.json": wingsdkPackageJsonContent,
    "/wingsdk/.jsii": wingsdkJSIIContent,
    "/node_modules/constructs/.jsii": constructsJSIIContent,
    "/node_modules/constructs/package.json": constructsPackageJsonContent,
    "/node_modules/constructs/lib/index.js": "",
  })
);
let wasmFetchData = await fetch(wingcURL).then((d) => d.arrayBuffer());
const wingcWASMData = new Uint8Array(wasmFetchData);

const wingc = await wingCompiler.load({
  env: {
    RUST_BACKTRACE: "full",
  },
  fs: fs as any,
  wingcWASMData,
  wingsdkManifestRoot: "/wingsdk",
  imports: {
    env: {
      send_diagnostic,
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
      signatureHelpProvider: {
        triggerCharacters: ["(", ",", ")"],
      },
      hoverProvider: true,
      documentSymbolProvider: true,
      definitionProvider: true,
    },
  };
  return result;
});

let s = self
const raw_diagnostics: wingCompiler.WingDiagnostic[] = [];

const wingInvoke = async (fn: wingCompiler.WingCompilerFunction, params: any) => {
  try {
    const result = wingCompiler.invoke(
      wingc,
      fn,
      JSON.stringify(params)
    ) as string;
    return JSON.parse(result);

  } catch (e) {
    s.reportError(e);
  }
}

const handleTextChange = async (fn: wingCompiler.WingCompilerFunction, params: DidOpenTextDocumentParams | DidChangeTextDocumentParams, uri: string) => {
  raw_diagnostics.length = 0;
  wingInvoke(fn, params);
  connection.sendDiagnostics({
    uri: params.textDocument.uri,
    diagnostics: raw_diagnostics.map((rd) => {
      return Diagnostic.create(Range.create(rd.span.start.line, rd.span.start.col, rd.span.end.line, rd.span.end.col), rd.message)
    })
  });
}

connection.onDidOpenTextDocument(async (params) => {
  handleTextChange("wingc_on_did_open_text_document", params, params.textDocument.uri);
});
connection.onDidChangeTextDocument(async (params) => {
  handleTextChange("wingc_on_did_change_text_document", params, params.textDocument.uri);
});
connection.onCompletion(async (params) => {
  return wingInvoke("wingc_on_completion", params);
});
connection.onSignatureHelp(async (params) => {
  return wingInvoke("wingc_on_signature_help", params);
});
connection.onDefinition(async (params) => {
  return wingInvoke("wingc_on_goto_definition", params);
});
connection.onDocumentSymbol(async (params) => {
  return wingInvoke("wingc_on_document_symbol", params);
});
connection.onHover(async (params) => {
  return wingInvoke("wingc_on_hover", params);
});
connection.listen()

/**
 * This function is called by the WASM code to immediately
 * send a notification to the client.
 */
function send_diagnostic(
  data_ptr: number,
  data_len: number
) {
  const data_buf = Buffer.from(
    (wingc.exports.memory as WebAssembly.Memory).buffer,
    data_ptr,
    data_len
  );
  const data_str = new TextDecoder().decode(data_buf);
  raw_diagnostics.push(JSON.parse(data_str));
}
