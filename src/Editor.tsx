
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
import React, { createRef, useEffect, useState, useRef, useCallback } from 'react';
import { WebContainer } from '@webcontainer/api';
import darkPlusTMTheme from './monaco-themes/dark_plus.js';
import convertTheme from './monaco-themes/convert-tmtheme.js';
import wingLanguageConfiguration from './language-configurations/wing-configration.json';
import { debounce } from 'lodash';
import ReactMarkdown from 'react-markdown'

import wingJson from './grammers/wing.tmLanguage.json'
import jsJson from './grammers/js.tmLanguage.json'
import LspWorker from './lsp.js?worker'
import { initContainer, installDependencies, prepareForEvaluation } from './containers';

import { Tree, TreeNode, createTree } from './Tree';
import { FileTree } from 'exploration';
import { Actions } from './Actions';
import { Modal } from './Modal';
import { Loading } from './Loading';
import { FilePicker } from './FilePicker.js';
import { CompilationResult, compileToAws, compileToAzure, compileToGcp } from './compilerService';
import { useExamples, Example } from './use-examples.js';
import {RightResizableWidget} from "./RightResizableWidget";
import { tutorials } from './tutorials/index.js';
import { ProgressBar } from './ProgressBar.js';
import classNames from 'classnames';

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
  Eval = "Initializing Console...",
  CompileError = "Compilation Error",
  TestFailure = "Tests Failed",
  Completed = "Ready"
}

export const ReactMonacoEditor: React.FC<EditorProps> = ({
}) => {
    const { examples, setExamples, 
      currentExample, setCurrentExample, 
      languageContext, setLanguageContext,
    } = useExamples();
    const defaultExample = examples[0];
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const [editorCode, setEditorCode] = useState("");
    const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const containerRef = useRef<WebContainer>();
    const ref = createRef<HTMLDivElement>();
    const refIframe = useRef(null);
    const [iframSrc, setIframeSrc] = useState("");
    const [isCompiling, setIsCompiling] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Init);
    const [modalVisibility, setModalVisibility] = useState(false);

    const compileEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const [compileResult, setCompileResult] = useState<CompilationResult>();
    const [compileError, setCompileError] = useState('');
    const [compileExamples, setCompileExamples] = useState<Example[]>(examples);
    const [compileExample, setCompileExample] = useState<Example>(defaultExample);

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

        monaco.languages.setLanguageConfiguration('wing', wingLanguageConfiguration)
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
      editorRef.current?.setValue(tutorials[0].code);

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
      
      console.log('evaluating...', languageContext)

      setIsCompiling(true)

      try {
        let compileValue = value;
        do {
          compileValue = editorRef.current?.getValue()
          await prepareForEvaluation(containerRef.current, compileValue, languageContext.file)
          const example = examples.find(e => e.text === languageContext.file)!;
          if (example) {
            example.value = compileValue!;
          }
        } while (compileValue !== editorRef.current?.getValue());
      } finally {
        setLoadingStatus(LoadingStatus.Completed)
        setIsCompiling(false)
      }
    }, 700)

    const onChange = (value: string | undefined, isCompiling: boolean, ev: monaco.editor.IModelContentChangedEvent) => {
      setEditorCode(value);
      evaluateCode(value, isCompiling)
    }

    useEffect(() => {
        if (ref.current != null) {
            return () => {
                editorRef.current!.dispose();
            };
        }
    }, []);

    // useEffect(() => {
    //   editorRef.current?.setValue(examples.find(e => e.text === languageContext.file)!.value);
    // }, [languageContext]);

    const onRun = (event: React.MouseEvent<HTMLElement>) => {
      evaluateCode(editorRef.current?.getValue(), isCompiling);
    }

    const onCompile = (compileFn: (code: string) => Promise<CompilationResult>) => {
      return async (event: React.MouseEvent<HTMLElement>) => {
        setModalVisibility(true);
        try {
          const result = await compileFn(editorRef.current?.getValue()!);
          const examples = result.files.map((f, i) => ({ key: i + 1, text: f.name, value: f.contents }))
          const example = examples[0];
          setCompileExamples(examples);
          setCompileExample(example);
          setCompileResult(result)
        } catch (err) {
          setCompileError((err as any).toString());
        }
      }
    }

    const compileEditorDidMount = async (editor: any, monaco: any) => {
      compileEditorRef.current = editor
    }

    const onDownload = () => {
      if (!compileResult) {
        return;
      }

      const zipBlob = new Blob([new Uint8Array(compileResult!.zip.toBuffer())]);
      const url = window.URL.createObjectURL(zipBlob);
      const zipDownload = document.createElement("a");

      zipDownload.href = url;
      zipDownload.download = "wing.zip";
      document.body.appendChild(zipDownload);
      zipDownload.click();
    }

    useEffect(() => {
      compileEditorRef.current?.setScrollTop(0);
    }, [compileExample]);

    useEffect(() => {
      if (!modalVisibility) {
        setCompileResult(undefined);
        setCompileError('')
      }
    }, [modalVisibility]);

    const options: monaco.editor.IStandaloneEditorConstructionOptions = {
      minimap: { enabled: false },
      fontSize: 16
    };

    const [steps] = useState(() => {
      return tutorials.map(tutorial => ({
        ...tutorial,
        status: "upcoming"
      }));
    } );
    const [currentStepId, setCurrentStepId] = useState("01");
    const currentStep = steps.find(s => s.id === currentStepId);

    const goToPreviousTutorial = useCallback(() => {
      const currentStepIndex = steps.findIndex(s => s.id === currentStepId);
      const previousStep = steps[currentStepIndex - 1];
      if (previousStep) {
        setCurrentStepId(previousStep.id);
      }
    }, [steps, currentStepId]);
    const goToNextTutorial = useCallback(() => {
      const currentStepIndex = steps.findIndex(s => s.id === currentStepId);
      const nextStep = steps[currentStepIndex + 1];
      if (nextStep) {
        setCurrentStepId(nextStep.id);
      }
    }, [steps, currentStepId]);
    const solveTutorial = useCallback(() => {
      const currentStepIndex = steps.findIndex(s => s.id === currentStepId);
      const step = steps[currentStepIndex];
      if (step.solution) {
        editorRef.current?.setValue(step.solution);
      }
    }, [steps, currentStepId]);
    const resetTutorial = useCallback(() => {
      const currentStepIndex = steps.findIndex(s => s.id === currentStepId);
      const step = steps[currentStepIndex];
      if (step.code) {
        editorRef.current?.setValue(step.code);
      }
    }, [steps, currentStepId]);

    useEffect(() => {
      if (!currentStep) {
        return;
      }

      editorRef.current?.setValue(currentStep.code);
    }, [currentStep]);

    return (
      <div className='flex flex-col h-full'>
        <div className="px-4 py-3 bg-black">
          <ProgressBar
            current={currentStepId}
            steps={tutorials.map(step => ({
              id: step.id,
              name: step.name,
              tutorial: step.tutorial ?? "",
              status: "upcoming",
            }))}
            onStepClick={setCurrentStepId}
          />
        </div>
        {/* <div className='flex flex-row pt-2 px-2 h-14 justify-between items-baseline bg-[#56657A]'>
          <FilePicker examples={examples} currentExample={currentExample} setCurrentExample={setCurrentExample} setLanguageContext={setLanguageContext} />
          <Actions onRun={onRun} isRunDisabled={isCompiling} onTfAws={onCompile(compileToAws)} onTfAzure={onCompile(compileToAzure)} onTfGcp={onCompile(compileToGcp)} />
        </div> */}
        <div className='flex grow'>
          <RightResizableWidget className='flex-shrink flex flex-col border-l z-10 border-r border-gray-400'>
                  <div className={"min-h-[25rem] p-2 border-b"}>
                      <div className='prose prose-invert prose-headings:text-2xl prose-headings:font-bold text-white'>
                        <ReactMarkdown children={currentStep?.tutorial ?? ""} />
                      </div>
                  </div>
                  <div className='px-4 py-2 text-white border-b flex gap-2'>
                              {editorCode == currentStep?.solution && <button className='px-2 py-0.5 hover:bg-gray-700 rounded'
                                        onClick={() => resetTutorial()}>Reset</button>}
                      {currentStep?.solution && editorCode !== currentStep.solution && <button className='px-2 py-0.5 hover:bg-gray-700 rounded'
                               onClick={() => solveTutorial()}>Solve</button>}
                      <div className="grow"></div>
                      {currentStep?.id !== "01" && <button className='px-2 py-0.5 hover:bg-gray-700 rounded'
                               onClick={() => goToPreviousTutorial()}>Previous</button>}
                      <button className={classNames('px-2 py-0.5 hover:bg-gray-700 rounded', {
                        "opacity-30": currentStep?.id === "06"
                      })}
                               onClick={() => goToNextTutorial()} disabled={currentStep?.id === "06"}>Next</button>
                  </div>
              <div className='grow w-full relative'>
                <div className="absolute inset-0 overflow-hidden">
              <div className='font-semibold text-slate-400 px-4 py-2'>Editor</div>
                  <Editor
                    data-testid="editor"
                    theme="akkd-dark-plus"
                    options={options}
                    path={languageContext.path}
                    language={languageContext.language}
                    onMount={editorDidMount}
                    beforeMount={editorWillMount}
                    onChange={(value, event) => { onChange(value, isCompiling, event) }}
                    />
                </div>
              </div>
          </RightResizableWidget>
          <div className='flex-1 h-full basis-auto'>
          {loadingStatus != LoadingStatus.Completed ? 
            <Loading status={loadingStatus} /> :
            <iframe
              id='console'
              className='w-full h-full basis-auto'
              src={iframSrc}
              allowFullScreen={true}
              ref={refIframe}
              ></iframe>}
          </div>
        </div>
        {modalVisibility && <Modal setModalVisibility={setModalVisibility} title='Compilation Output' onDownload={onDownload}>
          {compileResult && <div className='flex flex-col w-full h-full'>
              <div className="bg-[#56657A]">
                <div className="flex">
                  <FilePicker examples={compileExamples} currentExample={compileExample} setCurrentExample={setCompileExample} />
                </div>
              </div>
              <div className='flex basis-[2/3] flex-grow h-full max-w-[2/3]'>
                <Editor
                  theme="akkd-dark-plus"
                  path="source.js"
                  language="js"
                  options={Object.assign({}, options, { readOnly: true })}
                  onMount={compileEditorDidMount}
                  value={compileExample.value}
                  />
              </div>
          </div>}
          {!compileResult && !compileError && <div className="flex w-full justify-center items-center">
            <Loading status={"Compiling..."} />
          </div>}
          <div><pre><code>{compileError}</code></pre></div>
        </Modal>}
      </div>
    );
};
