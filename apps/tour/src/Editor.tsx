
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
import { useExamples } from '@wing-playground/shared/src/use-examples.js';
import classNames from 'classnames';

import {LoadingStatus} from "@wing-playground/shared/src/loading-status";
import {useEditor} from "@wing-playground/shared/src/editor/use-editor";
import {useAnalytics} from "@wing-playground/shared/src/analytics/use-analytics";
import {installDependencies, ConsoleLayouts} from "@wing-playground/shared/src/containers";

import { SimulatorTarget } from "@wing-playground/shared/src/SimulatorTarget";
import { TfAwsTarget } from '@wing-playground/shared/src/TfAwsTarget.js';


import { TargetsView, TargetView } from "@wing-playground/shared/src/TargetsView.js";
import {PanelHeader} from "@wing-playground/shared/src/PanelHeader";
import { debounce } from 'lodash';
import { Loader } from '@wing-playground/shared/src/loader.js';
import { tutorials as mainTutorials, Tutorial } from './tutorials/main';
import { Header } from "@wing-playground/shared/src/Header";
import { Button } from "@wing-playground/shared/src/Button";
import { ThemeToggle } from "@wing-playground/shared/src/ThemeToggle";
import { DefaultTheme, ThemeProvider, useTheme, setCurrentTheme } from "@wing-playground/shared/src/theme-provider";

const wingPackageJson = await import("winglang/package.json?raw").then(
    (i) => JSON.parse(i.default)
);

loader.config({ monaco });

StandaloneServices.initialize({
    ...getMessageServiceOverride(document.body)
});
buildWorkerDefinition('dist', new URL('', window.location.href).href, false);

const compiler = new Compiler();

export type EditorProps = {
    defaultCode?: string;
    hostname?: string;
    port?: string;
    path?: string;
    className?: string;
    tutorials?: Tutorial[];
}

export const ReactMonacoEditor: React.FC<EditorProps> = ({tutorials = mainTutorials}) => {
    const {languageContext} = useExamples();
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const ref = createRef<HTMLDivElement>();
    const refIframe = useRef(null);
    const [iframSrc, setIframeSrc] = useState("");
    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Init);
    const [editorCode, setEditorCode] = useState("");
    const [downloadInProgress, setDownloadInProgress] = useState(false);
    const { analytics } = useAnalytics({ name: 'tour', state: loadingStatus });

    const { theme, mode } = useTheme();
    const [currentMode, setCurrentMode] = useState(mode ?? "dark");

    const onToggleTheme = useCallback(() => {
      const newMode = (currentMode === "light" ? "dark" : "light");
      setCurrentMode(newMode);

      if (iframSrc !== "") {
        setIframeSrc(
          iframSrc.replace(/theme=(light|dark)/, `theme=${newMode}`)
        );
      }

    }, [currentMode, iframSrc]);

    const installConsole = async (containerRef: React.MutableRefObject<WebContainer>) => {
        const consoleUrl = await installDependencies(containerRef.current, ConsoleLayouts.Tour);
        console.log("consoleUrl", consoleUrl);
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
        code: tutorials[0].code ?? "",
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
    const [currentStepId, setCurrentStepId] = useState(tutorials[0].id);
    const currentStep = useMemo(() => {
      return steps.find(s => s.id === currentStepId)
    }, [steps, currentStepId]);
    const currentStepIndex = useMemo(() => {
        return steps.findIndex(s => s.id === currentStepId);
    }, [steps, currentStepId]);

    const goToPreviousTutorial = useCallback(() => {
        const previousStep = steps[currentStepIndex - 1];
        if (previousStep) {
            setCurrentStepId(previousStep.id);
        }
    }, [steps, currentStepIndex]);
    const goToNextTutorial = useCallback(() => {
        const nextStep = steps[currentStepIndex + 1];
        if (nextStep) {
            setCurrentStepId(nextStep.id);
        }
    }, [steps, currentStepIndex]);
    const solveTutorial = useCallback(() => {
        const step = steps[currentStepIndex];
        if (step.solution) {
            editorRef.current?.setValue(step.solution);
        }
    }, [steps, currentStepIndex]);
    const resetTutorial = useCallback(() => {
        const step = steps[currentStepIndex];
        if (step.code) {
            editorRef.current?.setValue(step.code);
        }
    }, [steps, currentStepIndex]);

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
      if (currentStep.code) {
        editorRef.current?.setValue(currentStep.code);
      }

      analytics.track(`tutorial: step: ${currentStepId}: changed`, {
          step: currentStep
      })
      setCurrentTargetId(targetViews[0]?.title);
      setTargets(currentStep.targets ?? ["simulator"]);
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


    const showWelcome = useMemo(() => {
        return currentStepId === "0";
    }, [currentStepId]);

    const [showTourLoading, setShowTourLoading] = useState(false);
    useEffect(() => {
        if (showTourLoading && loadingStatus === LoadingStatus.Completed) {
            setShowTourLoading(false);
            goToNextTutorial();
        }
    }, [loadingStatus]);

    const simulatorTarget: TargetView = useMemo(() => {
      return {
        id: "simulator",
        title: "Simulator",
        Target: () => <SimulatorTarget
          frameSrc={iframSrc}
          iframeRef={refIframe}
        />
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
      <ThemeProvider mode={currentMode} theme={DefaultTheme}>
          <div className={classNames(
            'w-full flex flex-col grow p-6',
            theme.bg4,
            'transition-all duration-300'
          )}>
            <div className='flex grow relative'>
                <div className="flex flex-col w-[40%] min-w-[25rem] px-[20px]">
                    <div className='flex items-center overflow-auto gap-2'>
                      <Header/>
                      <div className='grow'/>
                      <ThemeToggle mode={currentMode} onToggle={onToggleTheme}/>
                    </div>
                    <div className="flex-1 flex flex-col pt-[20px]">
                        <div data-cueid="instructions" className="grow flex flex-col">
                            <div className='grow flex flex-col'>
                                <div className="grow relative overflow-hidden">
                                {steps.map((step, index) => {
                                    return (
                                      <div className={classNames(
                                        "absolute w-full h-full overflow-auto py-4 pr-2",
                                        index === currentStepIndex && "translate-x-0",
                                        index < currentStepIndex && "-translate-x-full",
                                        index > currentStepIndex && "translate-x-full",
                                      )}>
                                          <div
                                          className={classNames(
                                          'font-sans',
                                          'prose-lg prose-invert prose-p:leading-6 text-slate-700 dark:text-[#BDCECC] prose-ol:list-decimal',
                                          'prose-pre:bg-slate-200 dark:prose-pre:bg-slate-800 prose-pre:my-3 prose-ol:my-prose-p:text-slate-700 dark:prose-ol:my-prose-p:text-[#BDCECC]',
                                          'prose-pre:overflow-auto',
                                          'prose-a:text-sky-700 dark:prose-a:text-sky-300',
                                          'prose-h3:text-xl prose-h3:pb-4 prose-h3:pt-4 prose-headings:font-sans prose-h3:font-bold',
                                          'prose-h4:text-xl prose-h4:pb-4 prose-h4:pt-0 prose-headings:font-sans prose-h4:font-bold',
                                          'prose-h1:text-3xl prose-headings:pb-8 prose-headings:text-slate-700 dark:prose-headings:text-[#BDCECC] prose-h1:font-bold',
                                          '[&>*]:transition-colors [&>*]:duration-300',
                                          'prose-h1:transition-colors prose-h1:duration-300',
                                          )}>
                                            <ReactMarkdown
                                              children={step.tutorial ?? ""}
                                              className={classNames("text-xl")}
                                            />
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                            </div>

                            <div className="w-full relative my-6">
                              <div className={classNames(
                                "absolute top-0 left-0 w-full h-[1.5px] -translate-y-1/2",
                                "bg-gray-200 dark:bg-gray-650",
                                "transition-colors duration-300"
                              )}/>
                              <div
                                className={classNames(
                                  "absoulte z-10 top-0 left-0 bg-gray-400 dark:bg-gray-650 h-[4px] -translate-y-1/2",
                                  "transition-all duration-300 ease-out"
                                )}
                                style={
                                  {
                                    width: `${(currentStepIndex + 1) / tutorials.length * 100}%`
                                  }
                                }
                              />
                            </div>

                            <div className='text-white flex gap-4 items-center pb-2 overflow-auto'>
                                <Button
                                  invisible={isFirstStep}
                                  onClick={() => goToPreviousTutorial()}
                                >
                                  PREV
                                </Button>

                                <div className="grow text-center items-center truncate">
                                  <div className={classNames(
                                    "flex gap-x-2 justify-center font-mono text-sm truncate",
                                    "text-gray-700 dark:text-gray-450",
                                    "transition-colors duration-300"
                                  )}>
                                    <span className='truncate uppercase' title={currentStep?.name}>{currentStep?.name}</span>
                                    <span>{currentStepIndex + 1 }/{tutorials.length}</span>
                                  </div>
                                </div>

                                {showWelcome && (
                                  <>
                                  {showTourLoading && (
                                     <button
                                      className={classNames(
                                        theme.bg2,
                                        "text-slate-600 dark:text-[#2AD5C1]",
                                        "text-xs px-4 py-2 border border-transparent",
                                        "border-[#2AD5C1] cursor-not-allowed"
                                      )}
                                      disabled
                                    >
                                       <Loader size="1rem" text="LOADING" />
                                    </button>
                                    )}
                                    {!showTourLoading && (
                                      <Button
                                        invisible={isLastStep}
                                        onClick={() => {
                                          if (loadingStatus !== LoadingStatus.Completed) {
                                            setShowTourLoading(true);
                                          } else {
                                            goToNextTutorial();
                                          }
                                        }}
                                      >START</Button>
                                    )}
                                  </>
                                )}

                                {!showWelcome && (
                                    <Button
                                      invisible={isLastStep}
                                      disabled={loadingStatus !== LoadingStatus.Completed}
                                      onClick={() => goToNextTutorial()}
                                    >
                                      NEXT
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grow ml-4 flex flex-col gap-2">
                  <div data-cueid="code" className={
                    classNames(
                      'h-[40%] flex flex-col w-full overflow-hidden',
                      'border',
                      theme.border4,
                      'transition-colors duration-300',
                      'bg-slate-200/40 dark:bg-slate-700/40'
                    )}
                  >
                    <div className={
                      classNames(
                        showWelcome && "opacity-0",
                        "flex flex-col w-full grow",
                      )}>
                      <PanelHeader>
                        <div className="flex">
                          <span>EDITOR</span>
                          <div className="grow"/>
                          {currentStep?.solution && editorCode !== currentStep.solution &&
                            <button
                            className={classNames(
                              "text-[9px] px-4 py-0.5 leading-none cursor-pointer h-6 my-auto",
                              "text-slate-600 dark:text-[#BDCECC]",
                              "hover:text-slate-650 dark:hover:text-slate-700",
                              "bg-slate-200 dark:bg-slate-600",
                              "hover:bg-slate-300 dark:hover:bg-[#2AD5C1]"
                            )}
                            onClick={() => solveTutorial()}
                          >
                            SOLVE
                          </button>
                          }
                          {editorCode == currentStep?.solution && (
                            <button
                            className={classNames(
                              "text-[9px] px-4 py-0.5 leading-none cursor-pointer h-6 my-auto",
                              "text-slate-600 dark:text-[#BDCECC]",
                              "hover:text-slate-650 dark:hover:text-slate-700",
                              "bg-slate-200 dark:bg-slate-600",
                              "hover:bg-slate-300 dark:hover:bg-[#2AD5C1]"
                            )}
                            onClick={() => resetTutorial()}>
                              RESET
                            </button>
                          )}
                        </div>
                      </PanelHeader>
                      <div className='flex flex-col grow w-full relative'>
                        <div className="absolute inset-0 overflow-hidden">
                          <Editor
                            data-testid={"editor"}
                            theme={currentMode === "light" ? "akkd-light-plus" : "akkd-dark-plus"}
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
                    'flex flex-col grow basis-auto overflow-hidden border',
                    theme.border4,
                    'transition-colors duration-300',
                    'bg-slate-200/40 dark:bg-slate-700/40'
                  )}>
                    {!showWelcome && loadingStatus === LoadingStatus.Completed && (
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
      </ThemeProvider>
    );
};
