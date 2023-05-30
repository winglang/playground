
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
import React, { createRef, useEffect, useState, useRef, useMemo } from 'react';
import { WebContainer } from '@webcontainer/api';
import { Actions } from '@wing-playground/shared/src/Actions';
import { Modal } from '@wing-playground/shared/src/Modal';
import { Loading } from '@wing-playground/shared/src/Loading';
import { FilePicker } from '@wing-playground/shared/src/FilePicker.js';
import { CompilationResult, Compiler, Target } from '@wing-playground/shared/src/compiler/compiler';
import { CompilationRequest} from '@wing-playground/shared/src/compiler/request';
import { useExamples, Example } from '@wing-playground/shared/src/use-examples.js';
import { createAnalytics } from '@wing-playground/shared/src/analytics/analytics';
import {LoadingStatus} from "@wing-playground/shared/src/loading-status";
import {installDependencies, ConsoleLayouts} from "@wing-playground/shared/src/containers";
import {useEditor} from "@wing-playground/shared/src/editor/use-editor";
import {RightResizableWidget} from "@wing-playground/shared/src/RightResizableWidget";
import classNames from "classnames";

const wingPackageJson = await import("winglang/package.json?raw").then(
  (i) => JSON.parse(i.default)
);

loader.config({ monaco });

StandaloneServices.initialize({
    ...getMessageServiceOverride(document.body)
});
buildWorkerDefinition('dist', new URL('', window.location.href).href, false);

const compiler = new Compiler();
const analytics = createAnalytics('playground');

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
      currentExample, setCurrentExample,
      languageContext, setLanguageContext,
    } = useExamples();
    const defaultExample = examples[0];
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const ref = createRef<HTMLDivElement>();
    const refIframe = useRef(null);
    const [iframSrc, setIframeSrc] = useState("");
    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Init);
    const [modalVisibility, setModalVisibility] = useState(false);

    const compileEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const [compileResult, setCompileResult] = useState<CompilationResult>();
    const [compileError, setCompileError] = useState('');
    const [compileExamples, setCompileExamples] = useState<Example[]>(examples);
    const [compileExample, setCompileExample] = useState<Example>(defaultExample);

    const installConsole = async (containerRef: React.MutableRefObject<WebContainer>) => {
        const consoleUrl = await installDependencies(containerRef.current, ConsoleLayouts.Playground);
        setIframeSrc(consoleUrl)
    }

    const [fontSize, setFontSize] = useState(16);

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
    const {isCompiling, evaluateCode, editorWillMount, editorDidMount} = useEditor({
        editorRef,
        onLoadingStatusChange: setLoadingStatus,
        onLspError,
        installConsole,
        languageContext,
        code: currentExample.value,
        compiler,
        editorOptions,
        shouldInitContainer: true,
    });

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

    const onRun = () => {
      evaluateCode(editorRef.current?.getValue());
    }

    const onCompile = (target: Target) => {
      return async (event: React.MouseEvent<HTMLElement>) => {
        setModalVisibility(true);
        try {
          const result = await compiler.compile(new CompilationRequest(editorRef.current?.getValue()!, target));
          if (result.error) {
            setCompileError(`${result.error.stderr}\n${result.error.stdout}`);
            return;
          }
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
    };

    return (
      <div className='flex flex-col h-full'>
        <div className='flex flex-row pt-2 px-2 h-14 justify-between items-baseline bg-[#56657A]'>
          <FilePicker examples={examples} currentExample={currentExample} setCurrentExample={setCurrentExample} setLanguageContext={setLanguageContext} />
          <Actions onRun={onRun} isRunDisabled={isCompiling} onTfAws={onCompile(Target.TFAWS)} onTfAzure={onCompile(Target.TFAzure)} onTfGcp={onCompile(Target.TFGCP)} />
        </div>
        <div className='flex grow'>
          <RightResizableWidget className={
            classNames(
              "border-slate-900 h-full",
              "w-1/3 max-w-[50%] flex flex-col min-w-[10rem] min-h-[15rem] border-r border-b",
              {
                "w-5/12": fontSize === 16,
                "w-1/2": fontSize === 18,
              }
            )
          }>
            <div className="bg-slate-700 border-b border-slate-900 px-2 py-1 flex justify-end">
              <select
                className="bg-slate-700 text-slate-250 h-7 px-2 text-xs cursor-pointer focus:outline-none"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
              >
                <option value={12}>Font Size 12</option>
                <option value={16}>Font Size 16</option>
                <option value={18}>Font Size 20</option>
              </select>
            </div>
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
          <div className='grow h-full basis-auto'>
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
