import {wireGrammers} from "../grammers/utils";
import {ConsoleLayouts, initContainer, prepareForEvaluation, installDependencies} from "../containers";
import {startLsp} from "../lsp/lspClient";
import {WebContainer} from "@webcontainer/api";
import wingLanguageConfiguration from '../language-configurations/wing-configration.json';
import convertTheme from "../monaco-themes/convert-tmtheme";
import darkPlusTMTheme from "../monaco-themes/dark_plus";
import lightPlusTMTheme from "../monaco-themes/light_plus";
import { MonacoServices } from 'monaco-languageclient';
import {LoadingStatus} from "../loading-status";
import {LanguageContext} from "../use-examples";
import {CompilationRequest} from "../compiler/request";
import {CompilationItem, Compiler, Target} from "../compiler/compiler";
import {useRef, useState, MutableRefObject, useEffect, useCallback} from "react";
import * as monaco from 'monaco-editor';
import { useDebounce } from "../use-debounce";
import { createConsole } from "../create-console";
import { isChrome } from "../utils";

const isWebContainerConsole = isChrome();

export interface UseEditorOptions {
    editorRef: MutableRefObject<any>;
    onLoadingStatusChange: (state: LoadingStatus) => void;
    onLspError: () => void;
    code: string;
    languageContext: LanguageContext;
    compiler: Compiler;
    targets?: Target[];
    editorTheme?: 'dark' | 'light';
    layout: ConsoleLayouts,
    setIframeSrc: (src: string) => void;
}

export type CompilerOutput = {
  target: Target,
  files: CompilationItem[],
}

const darkPlusTheme = convertTheme(darkPlusTMTheme);
const lightPlusTheme = convertTheme(lightPlusTMTheme);

export const useEditor = ({
  editorRef,
  onLoadingStatusChange,
  onLspError,
  code,
  languageContext,
  compiler,
  targets = [],
  editorTheme = 'dark',
  layout,
  setIframeSrc
}: UseEditorOptions) => {

    const [isCompiling, setIsCompiling] = useState(false);
    const [serverConsoleFailed, setServerConsoleFailed] = useState(false);
    const consoleRef = useRef<string>();
    const containerRef = useRef<WebContainer>();
    const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor>();

    const installWebContainerConsole = async () => {
      const consoleUrl = await installDependencies(containerRef.current!, layout);
      setIframeSrc(consoleUrl);
    }

    const installServerConsole = async (): Promise<string> => {
      const { uiUrl, updateUrl } = await createConsole(layout);
      setIframeSrc(uiUrl)
      return updateUrl;
    }

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
        console.log('editor theme', editorTheme);
        monaco.editor.defineTheme('dark', darkPlusTheme);
        monaco.editor.defineTheme('light', lightPlusTheme);
    };

    const editorDidMount = async (editor: any, monaco: any) => {
        editorRef.current = editor
        monacoRef.current = monaco

        // install Monaco language client services
        MonacoServices.install(monaco);

        await wireGrammers(monaco);
        editorRef.current?.setValue(code);

        if(isWebContainerConsole) {
            // do not wait for webcontainers
            initContainer().then(async instance => {
                containerRef.current = instance;
                onLoadingStatusChange(LoadingStatus.Install);
                await installWebContainerConsole();
                onLoadingStatusChange(LoadingStatus.Eval)
                startLsp({ onError: onLspError});
                void evaluateCode();
            });
        } else {
          try {
            onLoadingStatusChange(LoadingStatus.Eval);
            const updateUrl = await installServerConsole();
            consoleRef.current = updateUrl;
            startLsp({ onError: onLspError});
            void evaluateCode();
          } catch (err) {
            console.error("installing server console", err);
            setServerConsoleFailed(true);
          }
        }
    };

    const evaluateCode = useCallback(async () => {
      if ((!consoleRef.current && !containerRef.current) || isCompiling) {
          return;
      }
      console.log('evaluating...', languageContext)
      setIsCompiling(true);

      try {
        let compileValue: string;
        if (isWebContainerConsole) {
          compileValue = editorRef.current?.getValue();
          await prepareForEvaluation(containerRef.current!, compileValue, languageContext.file);
        } else {
          do {
            compileValue = editorRef.current?.getValue();
            await fetch(consoleRef.current!, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ code: compileValue })
            })
          } while (compileValue !== editorRef.current?.getValue());
        }

        targets.forEach(async (target, index) => {
          compiler.submit(new CompilationRequest(compileValue!, target));
          if (index === targets.length - 1) {
            onLoadingStatusChange(LoadingStatus.Completed)
            setIsCompiling(false)
          }
        });
        if (targets.length === 0) {
          onLoadingStatusChange(LoadingStatus.Completed)
          setIsCompiling(false)
        }
      } catch (error) {
        console.error(error);
        onLoadingStatusChange(LoadingStatus.CompileError)
        setIsCompiling(false)
      }
    }, [containerRef, consoleRef, isCompiling, languageContext, targets, compiler]);

    window.addEventListener('message', function(event: any) {
      if (event && event.data && event.data.heartbeat === false) {
        setServerConsoleFailed(true);
      }
    });

    return {
        editorWillMount,
        editorDidMount,
        evaluateCode: useDebounce(evaluateCode, 700),
        isCompiling,
        serverConsoleFailed,
    }
}
