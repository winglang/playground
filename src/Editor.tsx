
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
import jsJson from './grammers/js.tmLanguage.json'
import LspWorker from './lsp.js?worker'
import files from './files';
import { initContainer, installDependencies, prepareForEvaluation } from './containers';

import { Tree, TreeNode, createTree } from './Tree';
import { FileTree } from 'exploration';
import { Actions } from './Actions';
import { Modal } from './Modal';
import { CompilationResult, compileToAws, compileToAzure, compileToGcp } from './compilerService';

const examplesImports = import.meta.glob('../examples/*.*', { as: 'raw' });
const examples = await Promise.all(Object.keys(examplesImports).map(async e => ({ text: e.split('/').pop(), value: await examplesImports[e]() })));
const exampleTreeNodes = examples.map(e => ({ name: e.text!, type: 'file' }) as TreeNode);
const exampleTree = createTree({ files: exampleTreeNodes });

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
      if (scopeName === 'source.wing') {
        return {
          format: 'json',
          content: wingJson
        };
      } else if (scopeName === 'source.js') {
        return {
          format: 'json',
          content: jsJson
        };
      } else {
        return {
          format: 'json',
          content: jsJson
        };
      }
    }
  });

  const grammers = new Map();

  grammers.set('wing', 'source.wing');
  grammers.set('js', 'source.js');

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
  Succeeded = "Ready"
}

interface LanguageContext {
  file?: string;
  path: string;
  language: string;
}

const supportedLanguages = (extension: string): string => {
  switch (extension) {
    case 'w':
      return 'wing'
      case 'js':
        return 'js'
    default:
      throw new Error('unsupported language extension')
  }
}

export const ReactMonacoEditor: React.FC<EditorProps> = ({
    hostname = 'localhost',
    path = '/',
    port = '3111',
    className
}) => {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const containerRef = useRef<WebContainer>();
    const ref = createRef<HTMLDivElement>();
    const refIframe = useRef(null);
    const [iframSrc, setIframeSrc] = useState("");
    const [isCompiling, setIsCompiling] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Init);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [languageContext, setLanguageContext] = useState<LanguageContext>({ language: 'wing', path: 'source.w' });

    const compileEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const [compileTree, setCompileTree] = useState<FileTree<{}>>(createTree({ files: [] }));
    const [compileText, setCompileText] = useState('');
    const [compileResult, setCompileResult] = useState<CompilationResult>();
    const [compileError, setCompileError] = useState('');

    const editorWillMount = (monaco: any) => {
    
      try {
        monaco.languages.register({ 
          id: 'wing', 
          extensions: ['.w', '.wing'],
          aliases: ['Wing', 'wing']
        });
        monaco.languages.register({ 
          id: 'js', 
          extensions: ['.js'],
          aliases: ['JS', 'JavaScript', 'javascript']
        });
      } catch (error) {
          console.error(error);
      }
  
      monaco.editor.defineTheme('akkd-dark-plus', darkPlusTheme);
    };

    const editorDidMount = async (editor: any, monaco: any) => {
      editorRef.current = editor
      monacoRef.current = monaco
      startLsp();
      
      // install Monaco language client services
      MonacoServices.install(monaco);

      await wireGrammers(monaco);
      editorRef.current?.setValue(examples[0].value);
      // monaco.editor.setModelLanguage(editor.getModel(), 'wing');
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
        let compileValue = value;
        do {
          compileValue = editorRef.current?.getValue()
          await prepareForEvaluation(containerRef.current, compileValue)
        } while (compileValue !== editorRef.current?.getValue());
        setLoadingStatus(LoadingStatus.Succeeded)
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
         // return { display: "none" }
      } else {
        return {  color: "black" }
      }
    }

    useEffect(() => {
        if (ref.current != null) {
            return () => {
                editorRef.current!.dispose();
            };
        }
    }, []);

    useEffect(() => {
      editorRef.current?.setValue(examples.find(e => e.text === languageContext.file)!.value);
    }, [languageContext]);
      
    const onTreeChange = (name: string) => {
      const file =  name.split('/').pop()!;
      const ext = file.split('.').pop()!;
      // editorRef.current?.setValue(examples.find(e => e.text === name)!.value);
      // monacoRef.current?.editor.setModelLanguage(editorRef.current?.getModel(), name.split('/').pop())
      setLanguageContext({ file: name, path: `source.${file.split('.').pop()}`, language: supportedLanguages(ext) })
    }

    const onRun = (event: React.MouseEvent<HTMLElement>) => {
      evaluateCode(editorRef.current?.getValue(), isCompiling);
    }

    const onCompile = (compileFn: (code: string) => Promise<CompilationResult>) => {
      return async (event: React.MouseEvent<HTMLElement>) => {
        setModalVisibility(true);
        try {
          const result = await compileFn(editorRef.current?.getValue()!);
          const compileTreeNodes = result.files.map(e => ({ name: e.name, type: 'file' }) as TreeNode);
          const tree = createTree({ files: compileTreeNodes });
          setCompileText(result!.files[0].contents);
          setCompileResult(result)
          setCompileTree(tree);
        } catch (err) {
          setCompileError((err as any).toString());
        }
      }
    }

    const onCompileTreeChange = (name: string) => {
      setCompileText(compileResult!.files.find(e => e.name === name)!.contents);
    }

    const compileEditorDidMount = async (editor: any, monaco: any) => {
      compileEditorRef.current = editor
    }

    useEffect(() => {
      compileEditorRef.current?.setScrollTop(0);
    }, [compileText]);

    useEffect(() => {
      if (!modalVisibility) {
        setCompileText('')
        setCompileError('')
      }
    }, [modalVisibility]);

    return (
      <div className='flex flex-col h-full'>
        <div className='flex flex-row pt-2 px-2 h-14 justify-between items-baseline'>
          <Actions onRun={onRun} isRunDisabled={isCompiling} onTfAws={onCompile(compileToAws)} onTfAzure={onCompile(compileToAzure)} onTfGcp={onCompile(compileToGcp)} />
          <div className="status m-0.5 p-0.5" style={getTestStyle(loadingStatus)}>{loadingStatus}</div>
        </div>
        <div className='flex grow editors'>
          <div className='flex h-full border-r border-slate-300'>
            <Tree tree={exampleTree} onFileOpen={onTreeChange}/>
          </div>
          <div className='flex w-1/3 h-full'>
            <Editor
              data-testid="editor"
              // height="90vh"
              // width="30vw"
              // theme="vs-dark"
              path={languageContext.path}
              language={languageContext.language}
              onMount={editorDidMount}
              beforeMount={editorWillMount}
              onChange={(value, event) => { onChange(value, isCompiling, event) }}
              />
          </div>
          <iframe
            id='console'
            className='flex-1 w-9/12 h-full'
            src={iframSrc}
            // height="90vh"
            // width="500px"
            allowFullScreen={true}
            ref={refIframe}
          ></iframe>
        </div>
        {modalVisibility && <Modal setModalVisibility={setModalVisibility} title='Compilation Output'>
          {compileText && <div className='flex flex-grow flex-row h-full'>
              <div className='flex h-full border-r border-slate-300'>
                <Tree tree={compileTree!} onFileOpen={onCompileTreeChange}/>
              </div>
              <div className='flex w-1/2 h-full'>
                <Editor
                  // height="90vh"
                  // width="30vw"
                  // theme="vs-dark"
                  onMount={compileEditorDidMount}
                  value={compileText}
                  />
              </div>
          </div>}
          {!compileText && !compileError && <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>}
          <div>{compileError}</div>
        </Modal>}
      </div>
    );
};
