
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

import { Compiler, Target, CompilationItem } from '@wing-playground/shared/src/compiler/compiler';
import { CompilationRequest } from '@wing-playground/shared/src/compiler/request';
import { useExamples, Example } from '@wing-playground/shared/src/use-examples.js';
import { tutorials } from './tutorials/index.js';
import classNames from 'classnames';

import { createAnalytics } from '@wing-playground/shared/src/analytics/analytics';
import {LoadingStatus} from "@wing-playground/shared/src/loading-status";
import {useEditor} from "@wing-playground/shared/src/editor/use-editor";
import {installDependencies, ConsoleLayouts} from "@wing-playground/shared/src/containers";
import {CongratsModal} from "./CongratsModal";

import {SimulatorTarget} from "@wing-playground/shared/src/SimulatorTarget";

import {TargetsView, TargetView} from "./TargetsView";
import {PanelHeader} from "@wing-playground/shared/src/PanelHeader";
import { TfAwsTarget } from './TfAwsTarget.js';
import { debounce, set } from 'lodash';
import { Header } from './Header.js';
import { Loader } from '@wing-playground/shared/src/loader.js';

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

export const ReactMonacoEditor: React.FC<EditorProps> = ({
                                                         }) => {
    const { examples,
        languageContext
    } = useExamples();
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const ref = createRef<HTMLDivElement>();
    const refIframe = useRef(null);
    const [iframSrc, setIframeSrc] = useState("");
    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Init);
    const [editorCode, setEditorCode] = useState("");

    const [downloadInProgress, setDownloadInProgress] = useState(false);

    const installConsole = async (containerRef: React.MutableRefObject<WebContainer>) => {
        const consoleUrl = await installDependencies(containerRef.current, ConsoleLayouts.Tour);
        setIframeSrc(consoleUrl)
    }
    const editorOptions = {
        minimap: { enabled: false },
        fontSize: 16
    }
    const onLspError = () => {
        analytics.track('lsp crash', {
            code: editorRef.current?.getValue(),
            version: wingPackageJson.version
        });
    }

    const [targets, setTargets] = useState<string[]>(["simulator"]);
    const compilerTargets = useMemo(() => {
      return targets.filter((target) => {
          return target !== "simulator";
      }).map((target) => target as Target);
    }, [targets]);

    const {
      evaluateCode,
      editorWillMount,
      editorDidMount,
    } = useEditor({
        editorRef,
        onLoadingStatusChange: setLoadingStatus,
        onLspError,
        installConsole,
        languageContext,
        code: tutorials[0].code,
        compiler,
        targets: compilerTargets,
        editorOptions,
        shouldInitContainer: true,
    });

    const [isCompiling, setIsCompiling] = useState(false);
    const [compilationItems, setCompilationItems] = useState<CompilationItem[]>([]);

    useEffect(() => {
        if (ref.current != null) {
            return () => {
                editorRef.current!.dispose();
            };
        }
    }, []);

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
      setTargets(currentStep.targets);
      setCurrentTargetId(targetViews[0]?.title);
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

    const retrieveCompilationFiles = useCallback(debounce(async (value: string, target: Target) => {
      setIsCompiling(true);
      const request = new CompilationRequest(value, target);
      const result = await compiler.compile(request);
      if (result.error) {
        console.error('compilation failed', result.error.stderr);
        setIsCompiling(false);
        return;
      }
      setCompilationItems(result.files);
      setIsCompiling(false);
    }, 1000), [compiler]);


    const [showTourLoading, setShowTourLoading] = useState(false);
    useEffect(() => {
        if (showTourLoading && loadingStatus === LoadingStatus.Completed) {
            setShowTourLoading(false);
            goToNextTutorial();
        }
    }, [loadingStatus]);

    const [showFinishModal, setShowFinishModal] = useState(false);

    const simulatorTarget: TargetView = useMemo(() => {
      return {
        id: "simulator",
        title: "Simulator",
        Target: () => <SimulatorTarget frameSrc={iframSrc} iframeRef={refIframe}/>
      }
    }, [iframSrc, refIframe]);

    const tfAwsTarget: TargetView = useMemo(() => {
      return {
        id: Target.TFAWS,
        title: "AWS/TERRAFORM",
        Target: () => <TfAwsTarget
          loading={isCompiling}
          files={compilationItems}
          downloadCompiledCode={() => downloadCompiledCode(Target.TFAWS)}
          disabled={downloadInProgress}
        />
      }
    }, [isCompiling, downloadInProgress, downloadCompiledCode, compilationItems]);

    const targetViews: TargetView[] = useMemo(() => {
      const views: TargetView[] = [];

      if (!targets || targets.length === 0) {
        return [simulatorTarget];
      }

      targets.forEach(target => {
        if (target === "simulator") {
          views.push(simulatorTarget);
        }
        if (target === Target.TFAWS) {
          views.push(tfAwsTarget);
        }
      });
      return views;
    }, [targets, simulatorTarget, tfAwsTarget]);

    const [currentTargetId, setCurrentTargetId] = useState(targetViews[0]?.id);

    useEffect(() => {
      setCurrentTargetId(targetViews[0]?.id);
    }, [targetViews.length]);

    useEffect(() => {
      setCompilationItems([]);
      if (targets.includes(Target.TFAWS)) {
        const value = editorRef.current?.getValue();
        retrieveCompilationFiles(value || "", Target.TFAWS);
      }
    }, [targets, editorRef.current?.getValue()]);

    return (
        <>
          <div className='w-full flex flex-col grow p-6 bg-[#293443]'>
            <div className='flex grow relative'>
                <CongratsModal visible={showFinishModal} onClose={() => setShowFinishModal(false)}/>
                <div className={
                  classNames(
                    "flex flex-col bg-[#293443] z-10 w-[40%] px-[20px]",
                  )}>
                    <Header/>
                    <div className="flex-1 flex flex-col pt-[20px]">
                        <div data-cueid="instructions" className="grow flex flex-col">
                            <div className='grow flex flex-col'>
                                <div className="grow relative">
                                    <div className="absolute inset-0 overflow-auto py-4 pr-2">
                                        <div
                                          className={classNames(
                                          'font-sans',
                                          'prose-lg prose-invert prose-p:leading-6 text-[#BDCECC] prose-ol:list-decimal',
                                          'prose-pre:bg-slate-800 prose-pre:my-3 prose-ol:my-prose-p:text-[#BDCECC]',
                                          'prose-pre:overflow-auto',
                                          'prose-headings:text-3xl prose-headings:pb-8 prose-headings:text-[#BDCECC] prose-headings:font-bold')}>
                                            <ReactMarkdown
                                              children={currentStep?.tutorial ?? ""}
                                              className={classNames("text-xl")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='text-white flex gap-2 items-center'>
                                <button
                                  disabled={isFirstStep}
                                  className={classNames(
                                    "text-[#BDCECC] bg-[#334155] hover:bg-[#2AD5C1] hover:text-[#334155]",
                                    "text-xs px-4 py-2 cursor-pointer border border-transparent",
                                    isFirstStep && "opacity-0"
                                  )}
                                  onClick={() => goToPreviousTutorial()}
                                >PREV</button>

                                <div className="grow text-center items-center">
                                  <div className="flex gap-x-2 justify-center font-mono text-sm text-[#BDCECC]">
                                    <span>{currentStep?.name}</span>
                                    <span className='font-semibold'>{currentStep?.id}/{tutorials.length}</span>
                                  </div>
                                </div>

                                {isFirstStep && (
                                  <>
                                  {showTourLoading && (
                                     <button
                                      className={classNames(
                                      "text-xs px-4 py-2 border border-transparent",
                                        "bg-[#334155] text-[#2AD5C1] border-[#2AD5C1] cursor-not-allowed"
                                      )}
                                      disabled
                                    >
                                       <Loader size="1rem" text="LOADING" />
                                    </button>
                                    )}
                                    {!showTourLoading && (
                                      <button
                                        className={classNames(
                                          "text-[#BDCECC] bg-[#334155] hover:bg-[#2AD5C1] hover:text-[#334155]",
                                          "text-xs px-4 py-2 cursor-pointer border border-transparent",
                                        )}
                                        onClick={() => {
                                          if (loadingStatus !== LoadingStatus.Completed) {
                                            setShowTourLoading(true);
                                          } else {
                                            goToNextTutorial();
                                          }
                                        }}
                                      >
                                       START
                                      </button>
                                    )}
                                  </>
                                )}

                                {!isFirstStep && !isLastStep && (
                                    <button
                                    className={classNames(
                                      "text-[#BDCECC] bg-[#334155] hover:bg-[#2AD5C1] hover:text-[#334155]",
                                      "text-xs px-4 py-2 cursor-pointer border border-transparent",
                                    )}
                                    onClick={() => goToNextTutorial()}
                                  >NEXT</button>
                                )}

                                {isLastStep && (
                                    <button
                                    className={classNames(
                                      "text-[#BDCECC] bg-[#334155] hover:bg-[#2AD5C1] hover:text-[#334155]",
                                      "text-xs px-4 py-2 cursor-pointer border border-transparent",
                                    )}
                                    onClick={() => setShowFinishModal(true)}
                                  >FINISH</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                  classNames(
                    "grow ml-4 flex flex-col gap-2"
                  )}>
                  <div data-cueid="code" className='h-[40%] flex flex-col w-full rounded-lg overflow-hidden border border-[#1F2937] bg-[#33415540]'>
                    <div className={classNames("flex flex-col w-full grow", isFirstStep && "opacity-0")}>
                      <PanelHeader>
                        <div className="flex">
                          <span>EDITOR</span>
                          <div className="grow"/>
                          {currentStep?.solution && editorCode !== currentStep.solution &&
                            <button
                            className={classNames(
                              "text-[#BDCECC] bg-[#293443] hover:bg-[#2AD5C1] hover:text-[#334155]",
                              "text-xs px-4 py-0.5 leading-none cursor-pointer",
                            )}
                            onClick={() => solveTutorial()}
                          >
                            Solve
                          </button>
                          }
                          {editorCode == currentStep?.solution && (
                            <button
                            className={classNames(
                              "text-[#BDCECC] bg-[#293443] hover:bg-[#2AD5C1] hover:text-[#334155]",
                              "text-xs px-4 cursor-pointer",
                            )}
                            onClick={() => resetTutorial()}>
                              Reset
                            </button>
                          )}
                        </div>
                      </PanelHeader>
                      <div className='flex flex-col grow w-full relative'>
                        <div className="absolute inset-0 overflow-hidden">
                          <Editor
                            data-testid={"editor"}
                            theme={"akkd-dark-plus"}
                            options={editorOptions}
                            path={languageContext.path}
                            language={languageContext.language}
                            onMount={editorDidMount}
                            beforeMount={editorWillMount}
                            onChange={(value) => {
                                void evaluateCode(value);
                                setEditorCode(value || "");
                          }}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-cueid="simulation" className={
                    classNames(
                      'flex flex-col grow basis-auto rounded-lg overflow-hidden border border-[#1F2937]',
                      'bg-[#33415540]'
                    )}>
                    {loadingStatus == LoadingStatus.Completed && !isFirstStep && (
                      <TargetsView
                        targets={targetViews}
                        currentTargetId={currentTargetId}
                        setCurrentTargetId={setCurrentTargetId}
                      />
                    )}
                  </div>
                </div>
            </div>
          </div>
        </>
    );
};
