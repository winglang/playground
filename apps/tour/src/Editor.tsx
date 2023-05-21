
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

import Editor, { loader } from "@monaco-editor/react";
import { StandaloneServices } from 'vscode/services';
import getMessageServiceOverride from 'vscode/service-override/messages';
import React, {createRef, useEffect, useState, useRef, useCallback, useMemo, FC, PropsWithChildren} from 'react';
import { WebContainer } from '@webcontainer/api';
import ReactMarkdown from 'react-markdown'

import { Modal } from '@wing-playground/shared/src/Modal';
import { Loading } from '@wing-playground/shared/src/Loading';
import { FilePicker } from '@wing-playground/shared/src/FilePicker.js';
import { CompilationResult, Compiler, Target } from '@wing-playground/shared/src/compiler/compiler';
import { CompilationRequest } from '@wing-playground/shared/src/compiler/request';
import { useExamples, Example } from '@wing-playground/shared/src/use-examples.js';
import { tutorials } from './tutorials/index.js';
import { ProgressBar } from './ProgressBar.js';
import classNames from 'classnames';

import { createAnalytics } from '@wing-playground/shared/src/analytics/analytics';
import {useEditorLifecycle} from "@wing-playground/shared/src/editor/use-editor-lifecycle";
import {LoadingStatus} from "@wing-playground/shared/src/loading-status";

const wingPackageJson = await import("winglang/package.json?raw").then(
  (i) => JSON.parse(i.default)
);

loader.config({ monaco });

StandaloneServices.initialize({
    ...getMessageServiceOverride(document.body)
});
buildWorkerDefinition('dist', new URL('', window.location.href).href, false);

const compiler = new Compiler();
const analytics = createAnalytics('tour');

export type EditorProps = {
    defaultCode?: string;
    hostname?: string;
    port?: string;
    path?: string;
    className?: string;
}

const PanelHeading: FC<PropsWithChildren> = ({children}) => {
  return <h3 className='text-white px-4 py-1 bg-gray-800 border-b border-black uppercase text-xs font-semibold leading-7 tracking-widest'>{children}</h3>;
};

const InfoModal: FC<PropsWithChildren<{visible: boolean, onClose: () => void}>> = ({visible,onClose, children}) => {
  return <div className={classNames('fixed inset-0 z-50 overflow-y-auto', {'hidden': !visible})}>
    <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
      <div className='fixed inset-0 transition-opacity'>
        <div className='absolute inset-0 bg-gray-500 opacity-75' onClick={onClose}/>
      </div>
      <span className='hidden sm:inline-block sm:align-middle sm:h-screen'/>
      <div className={classNames(
        'text-center text-slate-300',
        'px-6 pt-4 pb-6 bg-gray-900 rounded-3xl shadow-xl transform transition-all',
        'inline-block sm:my-8 sm:align-middle sm:max-w-lg sm:w-full',
      )}>
         <div className='flex justify-end'>
         <button className='text-slate-500 hover:text-slate-300 text-3xl' onClick={onClose}>
         ×
         </button>
         </div>
         <div className='p-6'>
          {children}
        </div>
      </div>
    </div>
  </div>;
};

export const ReactMonacoEditor: React.FC<EditorProps> = ({
}) => {
    const { examples,
      languageContext
    } = useExamples();
    const defaultExample = examples[0];
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
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
    const [editorCode, setEditorCode] = useState("");

    const [downloadInProgress, setDownloadInProgress] = useState(false);

    const {editorWillMount, editorDidMount, evaluateCode} = useEditorLifecycle({
        editorRef,
        monacoRef,
        containerRef,
        onLoadingStatusChange: setLoadingStatus,
        isCompiling,
        analyticsService: analytics,
        wingVersion: wingPackageJson.version,
        setConsoleUrl: setIframeSrc,
        languageContext,
        examples,
        onCompileStatusChange: setIsCompiling,
        code: tutorials[0].code,
        compiler
    });

    const onChange = (value: string | undefined, isCompiling: boolean, ev: monaco.editor.IModelContentChangedEvent) => {
      setEditorCode(value || "");
      evaluateCode(value, isCompiling)
    }

    useEffect(() => {
        if (ref.current != null) {
            return () => {
                editorRef.current!.dispose();
            };
        }
    }, []);

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
    const [currentStepId, setCurrentStepId] = useState("1");
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

    const isFirstStep: boolean = useMemo(() => {
        if(!currentStep) {
            return false;
        }
        return currentStep.id === steps[0].id;
    }, [currentStep, steps]);

    const isLastStep: boolean = useMemo(() => {
        if(!currentStep) {
            return false;
        }
        return currentStep.id === steps[steps.length - 1].id;
    }, [currentStep, steps]);

    useEffect(() => {
      if (!currentStep) {
        return;
      }

      editorRef.current?.setValue(currentStep.code);

      analytics.track(`tutorial: step: ${currentStepId}: changed`, {
        step: currentStep
      })
    }, [currentStep]);

    const downloadCompiledCode = async (target: Target) => {
        setDownloadInProgress(true);
        const result = await compiler.compile(new CompilationRequest(editorRef.current?.getValue()!, target));
        if (result.error) {
          console.error('compilation failed', result.error.stderr);
          return;
        }
        console.log("download compile code", result);
        const zipBlob = new Blob([new Uint8Array(result.zip.toBuffer())]);
        const url = window.URL.createObjectURL(zipBlob);
        const zipDownload = document.createElement("a");
        zipDownload.href = url;
        zipDownload.download = "hello.tfaws.zip";
        document.body.appendChild(zipDownload);
        zipDownload.click();
        setDownloadInProgress(false);
    };

    const [showWelcomeModal, setShowWelcomeModal] = useState(true);
    const [showFinishModal, setShowFinishModal] = useState(false);

    return (
      <>
        <div className='flex flex-col h-full'>
          <div className="px-0 py-2 bg-gray-900" data-cueid="progress">
            <div className="px-6 flex gap-5 items-center">
              <div><img src="/turquoise.svg" className='w-10' /></div>
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
          </div>
          <div className='flex grow gap-2 bg-gray-900 pb-2 px-2'>
            <InfoModal visible={showWelcomeModal} onClose={() => setShowWelcomeModal(false)}>
              <div className='gap-y-4'>
                <h1 className='text-[1.7rem]'>Welcome to the Winglang Tutorial!</h1>
                <div className='pt-8 space-y-8'>
                  <div>
                  Let's quickly build a smart queue that prints its messages and stores the latest one in a bucket.
                  </div>
                  <div>
                  You'll interact with it in the embedded Wing Simulator, and then compile to AWS.
                  </div>
                  <div>
                    <button className='mt-2 px-4 py-4 w-full hover:bg-[#2AD5C1] hover:text-slate-800 bg-gray-600 rounded-lg' onClick={() => setShowWelcomeModal(false)}>
                      Let’s get started!
                    </button>
                  </div>
                </div>
              </div>
            </InfoModal>

            <InfoModal visible={showFinishModal} onClose={() => setShowFinishModal(false)}>
              <div className='py-4'>
                <h1 className='text-2xl'>Congrats! You're one of us now.</h1>
                <div className='pt-8 flex flex-col'>
                  <div className='flex justify-around w-full'>
                    <div className='flex gap-6'>
                      <a target='_blank' href='https://docs.winglang.io/getting-started' className='hover:text-slate-900'>
                        <button className='w-[140px] h-[140px] p-2 hover:bg-[#2AD5C1] text-slate-300 hover:text-slate-800 bg-gray-600 rounded-lg space-y-4'>
                          <div className='flex items-center h-[50px]'>
                            <img className="h-[50px] mx-auto" src="playgroundicon.svg" loading="lazy" alt="" />
                          </div>
                          <div>Learn more</div>
                        </button>
                      </a>

                      <a target='_blank' href='https://play.winglang.io' className='hover:text-slate-900'>
                        <button className='w-[140px] h-[140px] p-2 hover:bg-[#2AD5C1] text-slate-300 hover:text-slate-800 bg-gray-600 rounded-lg space-y-4'>
                          <div className='flex items-center h-[50px]'>
                          <img className="h-[42px] mx-auto text-slate-300" src="shark.svg" loading="lazy" alt="" />
                          </div>
                          <div>Try the playground</div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </InfoModal>

            <div  className='w-[40%] flex flex-col gap-2 bg-gray-900 z-10'>
              <div className="flex-1 flex flex-col rounded-lg overflow-hidden">
                  <div data-cueid="instructions" className={"grow bg-gray-700 flex flex-col"}>
                    <PanelHeading>Instructions</PanelHeading>

                    <div className="grow relative">
                      <div className="absolute inset-0 overflow-auto">
                      <div className='p-4 prose-lg prose-invert prose-p:leading-6 text-gray-100 prose-ol:list-decimal prose-pre:bg-slate-800 prose-pre:my-3 prose-ol:my-0 prose-p:text-gray-100 prose-headings:text-lg prose-headings:text-white prose-headings:font-bold'>
                        <ReactMarkdown children={currentStep?.tutorial ?? ""} />
                      </div>
                      </div>
                    </div>

                    <div className='px-4 py-3 text-white border-t border-black flex gap-2'>
                      {editorCode == currentStep?.solution && (
                        <button className='px-2 py-0.5 hover:bg-gray-500 bg-gray-600 rounded' onClick={() => resetTutorial()}>
                          Reset
                        </button>
                      )}

                      {currentStep?.solution && editorCode !== currentStep.solution &&
                      <button className='px-2 py-0.5 hover:bg-gray-500 bg-gray-600 rounded' onClick={() => solveTutorial()}>
                      Solve
                      </button>
                      }

                      <div className="grow"></div>
                      {isLastStep &&
                        <button className={classNames('px-2 py-0.5 hover:bg-gray-500 bg-gray-600 rounded', {"opacity-30": downloadInProgress})} disabled={downloadInProgress} onClick={() => downloadCompiledCode(Target.TFAWS)}>
                          {downloadInProgress ? "Compiling..." : "Compile"}
                        </button>
                      }

                      {!isFirstStep &&
                        <button className='px-2 py-0.5 hover:bg-gray-500 bg-gray-600 rounded' onClick={() => goToPreviousTutorial()}>
                          Previous
                        </button>
                      }
                      {!isLastStep && (
                        <button className={classNames('px-2 py-0.5 hover:bg-gray-500 bg-gray-600 rounded')}
                        onClick={() => goToNextTutorial()}>
                          Next
                        </button>
                      )}
                      {isLastStep && (
                        <button className={classNames('px-2 py-0.5 hover:bg-[#2AD5C1] hover:text-slate-800 bg-slate-800 rounded')}
                        onClick={() => setShowFinishModal(true)}>
                          Finish
                        </button>
                      )}
                    </div>
                  </div>
              </div>
              <div data-cueid="code" className='h-[50%] flex flex-col w-full rounded-lg overflow-hidden'>
                <PanelHeading>Wing Editor</PanelHeading>
                <div className=' grow w-full relative'>
                  <div className="absolute inset-0 overflow-hidden">
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
              </div>
            {/* </RightResizableWidget> */}
            </div>
            <div data-cueid="simulation" className='h-full basis-auto rounded-lg overflow-hidden grow'>
              <PanelHeading>Wing Simulator</PanelHeading>
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
      </>
    );
};
