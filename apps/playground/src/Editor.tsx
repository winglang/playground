
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
import React, { createRef, useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { WebContainer } from '@webcontainer/api';
import { Loading } from '@wing-playground/shared/src/Loading';
import { Compiler, Target, CompilationItem } from '@wing-playground/shared/src/compiler/compiler';
import { CompilationRequest } from '@wing-playground/shared/src/compiler/request';

import { useExamples } from '@wing-playground/shared/src/use-examples.js';
import {LoadingStatus} from "@wing-playground/shared/src/loading-status";
import {installDependencies, ConsoleLayouts} from "@wing-playground/shared/src/containers";
import {useEditor} from "@wing-playground/shared/src/editor/use-editor";
import {useAnalytics} from "@wing-playground/shared/src/analytics/use-analytics";
import {RightResizableWidget} from "@wing-playground/shared/src/RightResizableWidget";
import classNames from "classnames";

import { SimulatorTarget } from "@wing-playground/shared/src/SimulatorTarget";
import { TfAwsTarget } from '@wing-playground/shared/src/TfAwsTarget.js';
import { TargetsView, TargetView } from "@wing-playground/shared/src/TargetsView.js";
import { PanelHeader } from '@wing-playground/shared/src/PanelHeader';
import { debounce } from 'lodash';

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
}

export const ReactMonacoEditor: React.FC<EditorProps> = ({
}) => {
    const { examples,
      currentExample,
      languageContext,
    } = useExamples();
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const ref = createRef<HTMLDivElement>();
    const refIframe = useRef(null);
    const [iframSrc, setIframeSrc] = useState("");
    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Init);
    const { analytics } = useAnalytics({ name: 'playground', state: loadingStatus });

    const installConsole = async (containerRef: React.MutableRefObject<WebContainer>) => {
        const consoleUrl = await installDependencies(containerRef.current, ConsoleLayouts.Playground);
        setIframeSrc(consoleUrl)
    }
    const [fontSize, setFontSize] = useState(14);
    const fontSizes = [12, 14, 16];

    const editorOptions = useMemo(() => {
      return {
        minimap: { enabled: false },
        fontSize: fontSize
      }
    }, [fontSize]);

    const onLspError = () => {
        analytics.track('lsp crash', {
            code: editorRef.current?.getValue(),
            version: wingPackageJson.version
        });
    }
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
        code: currentExample.value,
        compiler,
        targets: [Target.TFAWS],
        editorOptions,
        shouldInitContainer: true,
    });

    const [isCompiling, setIsCompiling] = useState(true);
    const [compilationItems, setCompilationItems] = useState<CompilationItem[]>([]);
    const [currentTargetId, setCurrentTargetId] = useState("simulator");

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

    useEffect(() => {
      setCompilationItems([]);
      const value = editorRef.current?.getValue();
      retrieveCompilationFiles(value || "", Target.TFAWS);
    }, [editorRef.current?.getValue()]);

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
        />
      }
    }, [isCompiling, compilationItems]);

    const targetViews: TargetView[] = useMemo(() => {
      return [simulatorTarget, tfAwsTarget];
    }, [simulatorTarget, tfAwsTarget]);

    return (
      <div className='flex flex-col h-full'>
        <div className='flex grow gap-2'>
          <RightResizableWidget className={
            classNames(
              "border border-gray-800 h-full",
              "max-w-[60%] flex flex-col min-w-[10rem] min-h-[15rem]",
              {
                "w-[33%]": fontSize === 12,
                "w-[38%]": fontSize === 14,
                "w-[43%]": fontSize === 16
              }
            )
          }>
            <PanelHeader>
              <div className="flex">
                <span>EDITOR</span>
                <div className="grow"/>
                <select
                  className="bg-slate-700 text-slate-250 h-7 px-2 text-xs cursor-pointer focus:outline-none"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                >
                  {fontSizes.map((size) => (
                    <option key={size} value={size}>
                      Font Size {size}
                    </option>
                  ))}
                </select>
              </div>
            </PanelHeader>

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
            }}/>
          </RightResizableWidget>
          <div className='grow h-full basis-auto border border-gray-800'>
          {loadingStatus !== LoadingStatus.Completed &&
            <div className="flex flex-col h-full relative">
              <div className='absolute inset-0 z-10'>
                <Loading status={loadingStatus} />
              </div>
              <div className="flex flex-col items-center justify-center h-full animate-pulse">
                <img src='empty_state.svg' className='h-[150px] p-10'/>
              </div>
            </div>
          }
          {loadingStatus === LoadingStatus.Completed &&
            <TargetsView
              targets={targetViews}
              currentTargetId={currentTargetId}
              setCurrentTargetId={setCurrentTargetId}
            />}
          </div>
        </div>
      </div>
    );
};
