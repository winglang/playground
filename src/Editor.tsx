
import 'monaco-editor/esm/vs/editor/editor.all.js';

// support all editor features
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickInput/standaloneQuickInputService.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';

import * as monaco from 'monaco-editor';

import { buildWorkerDefinition } from 'monaco-editor-workers';

import { CloseAction, ErrorAction, MessageTransports, MonacoLanguageClient, MonacoServices } from 'monaco-languageclient';
import { BrowserMessageReader, BrowserMessageWriter } from 'vscode-languageserver-protocol/browser.js';
import { IGrammarDefinition, Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';
import Editor, { loader } from "@monaco-editor/react";
import { StandaloneServices } from 'vscode/services';
import getMessageServiceOverride from 'vscode/service-override/messages';
import React, { createRef, useEffect, useState, useRef } from 'react';
import { WebContainer } from '@webcontainer/api';
import darkPlusTMTheme from './monaco-themes/dark_plus.js';
import convertTheme from './monaco-themes/convert-tmtheme.js';
import { debounce } from 'lodash';

import wingJson from './grammers/wing.tmLanguage.json'
import LspWorker from './lsp.js?worker'
import files from './files';
import { initContainer, installDependencies, compile, test, prepareForEvaluation } from './containers';


const darkPlusTheme = convertTheme(darkPlusTMTheme);

loader.config({ monaco });

StandaloneServices.initialize({
    ...getMessageServiceOverride(document.body)
});
buildWorkerDefinition('dist', new URL('', window.location.href).href, false);

export type EditorProps = {
    defaultCode?: string;
    hostname?: string;
    port?: string;
    path?: string;
    className?: string;
}



async function wireGrammers(monaco: any) {
  const registry = new Registry({
    getGrammarDefinition: async (scopeName: string, dependantScope: string): Promise<IGrammarDefinition> => {
      return {
        format: 'json',
        content: wingJson
      };
    }
  });

  const grammers = new Map();

  grammers.set('wing', 'source.wing');

  return wireTmGrammars(monaco, registry, grammers);
}

const startLsp = () => {
  const lspWorker = new LspWorker()
  setTimeout(() => {
    const reader = new BrowserMessageReader(lspWorker);
    const writer = new BrowserMessageWriter(lspWorker);
    const languageClient = createLanguageClient({ reader, writer });
    languageClient.start();
    
    lspWorker.onerror = debounce((ev) => {
      lspWorker.terminate();
      setTimeout(() => {
        startLsp();
      }, 5000);
    }, 500);
    reader.onClose(() => {
      languageClient.stop()
    });
    
    function createLanguageClient(transports: any) {
      return new MonacoLanguageClient({
        name: 'Wing Language Client',
        clientOptions: {
          // use a language id as a document selector
          documentSelector: [{ language: 'wing' }],
          // disable the default error handler
          errorHandler: {
            error: () => {
              console.log('lsp connection error')
              return ({ action: ErrorAction.Shutdown })
            },
            closed: () => {
              console.log('lsp connection closed')
              return ({ action: CloseAction.Restart })
            }
          }
        },
        // create a language client connection to the server running in the web worker
        connectionProvider: {
          get: () => {
            return Promise.resolve(transports);
          }
        }
      });
    }
  }, 4500)
}

enum LoadingStatus {
  Init = "Initializing WebContainer...",
  Install = "Installing dependencies...",
  Eval = "Compiling/Running tests...",
  CompileError = "Compilation Error",
  TestFailure = "Tests Failed",
  Succeeded = "Compilation Succeeded/Tests Passed"
}

export const ReactMonacoEditor: React.FC<EditorProps> = ({
    defaultCode = files['test.w'].file.contents,
    hostname = 'localhost',
    path = '/',
    port = '3111',
    className
}) => {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const containerRef = useRef<WebContainer>();
    const ref = createRef<HTMLDivElement>();
    const refIframe = useRef(null);
    const [iframSrc, setIframeSrc] = useState("");
    const [isCompiling, setIsCompiling] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Init);

    let lspWebSocket: WebSocket;

    const editorWillMount = (monaco: any) => {
    
      try {
        monaco.languages.register({ 
          id: 'wing', 
          extensions: ['.w', '.wing'],
          aliases: ['Wing', 'wing']
        });
      } catch (error) {
          console.error(error);
      }
  
      monaco.editor.defineTheme('akkd-dark-plus', darkPlusTheme);
    };

    const editorDidMount = async (editor: any, monaco: any) => {
      editorRef.current = editor
      startLsp();
      
      // install Monaco language client services
      MonacoServices.install(monaco);

      await wireGrammers(monaco);
      monaco.editor.setModelLanguage(editor.getModel(), 'wing');
      monaco.editor.setTheme('akkd-dark-plus');

      // do not wait for webcontainers
      initContainer().then(async instance => {
        containerRef.current = instance
        setLoadingStatus(LoadingStatus.Install)
        const consoleUrl = await installDependencies(containerRef.current);
        setIframeSrc(consoleUrl)
        setLoadingStatus(LoadingStatus.Eval)
        evaluateCode(undefined, isCompiling);
      });

      

      
  
    };

    const evaluateCode = debounce(async (value: string | undefined, isCompiling: boolean) => {
      if (!containerRef.current || isCompiling) {
        return
      }
      
      console.log('evaluating...')

      setIsCompiling(true)
      setLoadingStatus(LoadingStatus.Eval)

      
      try {
        let testCode;
        let compileValue = value;
        do {
          compileValue = editorRef.current?.getValue()
          await prepareForEvaluation(containerRef.current, compileValue)
          testCode = await test(containerRef.current)
        } while (compileValue !== editorRef.current?.getValue());
        if (testCode !== 0) {
          setLoadingStatus(LoadingStatus.TestFailure)
        } else {
          setLoadingStatus(LoadingStatus.Succeeded)
        }
      } catch (e) {
        setLoadingStatus(LoadingStatus.CompileError)
      } finally {
        setIsCompiling(false)
      }
    }, 700)

    const onChange = (value: string | undefined, isCompiling: boolean, ev: monaco.editor.IModelContentChangedEvent) => {
      evaluateCode(value, isCompiling)
    }

    const getTestStyle = (status: LoadingStatus) => {
      if (status === LoadingStatus.CompileError || status === LoadingStatus.TestFailure) {
        return { background: "#f44747", color: "white" }
      } else if (status === LoadingStatus.Succeeded) {
        return { background: "#4EC9B0", color: "white" }
      } else {
        return { background: "#000000c9", color: "white" }
      }
    }

    useEffect(() => {
        if (ref.current != null) {
            return () => {
                editorRef.current!.dispose();
            };
        }
    }, []);

    return (
      <div>
        <div className='editors'>
          <Editor
            height="90vh"
            width="30vw"
            theme="vs-dark"
            path={"source.w"}
            defaultLanguage={"wing"}
            defaultValue={defaultCode}
            onMount={editorDidMount}
            beforeMount={editorWillMount}
            onChange={(value, event) => { onChange(value, isCompiling, event) }}
            />
          <iframe
            src={iframSrc}
            height="90vh"
            // width="500px"
            allowFullScreen={true}
            ref={refIframe}
          ></iframe>
          {/* <Editor
            height="60vh"
            width="500px"
            theme="vs-dark"
            defaultLanguage={"json"}
            value={compileResult}
            /> */}
        </div>
        <div className="status" style={getTestStyle(loadingStatus)}>{loadingStatus}</div>
      </div>
    );
};
