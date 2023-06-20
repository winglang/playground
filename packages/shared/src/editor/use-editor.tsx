import {wireGrammers} from "../grammers/utils";
import {initContainer, prepareForEvaluation} from "../containers";
import {startLsp} from "../lsp/lspClient";
import {WebContainer} from "@webcontainer/api";
import wingLanguageConfiguration from '../language-configurations/wing-configration.json';
import convertTheme from "../monaco-themes/convert-tmtheme";
import darkPlusTMTheme from "../monaco-themes/dark_plus";
import { MonacoServices } from 'monaco-languageclient';
import {LoadingStatus} from "../loading-status";
import {LanguageContext} from "../use-examples";
import {CompilationRequest} from "../compiler/request";
import {CompilationItem, Compiler, Target} from "../compiler/compiler";
import {useRef, useState, MutableRefObject, useEffect, useCallback} from "react";
import * as monaco from 'monaco-editor';

export interface UseEditorOptions {
    editorRef: MutableRefObject<any>;
    onLoadingStatusChange: (state: LoadingStatus) => void;
    onLspError: () => void;
    code: string;
    languageContext: LanguageContext;
    compiler: Compiler;
    targets?: Target[];
    editorOptions: monaco.editor.IStandaloneEditorConstructionOptions;
    installConsole?: (containerRef: MutableRefObject<WebContainer>) => Promise<void>;
    editorTheme?: string;
    shouldInitContainer: boolean;
}

export type CompilerOutput = {
  target: Target,
  files: CompilationItem[],
}

const darkPlusTheme = convertTheme(darkPlusTMTheme);

export const useEditor = ({
  editorRef,
  onLoadingStatusChange,
  onLspError,
  code,
  languageContext,
  compiler,
  targets = [],
  installConsole,
  editorTheme,
  shouldInitContainer
}: UseEditorOptions) => {

    const [isCompiling, setIsCompiling] = useState(false);
    const containerRef = useRef<WebContainer>();
    const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor>();

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

        monaco.editor.defineTheme(editorTheme || 'akkd-dark-plus', darkPlusTheme);
    };

    const editorDidMount = async (editor: any, monaco: any) => {
        editorRef.current = editor
        monacoRef.current = monaco

        // install Monaco language client services
        MonacoServices.install(monaco);

        await wireGrammers(monaco);
        editorRef.current?.setValue(code);

        if(shouldInitContainer) {
            // do not wait for webcontainers
            initContainer().then(async instance => {
                containerRef.current = instance;
                onLoadingStatusChange(LoadingStatus.Install);
                if (installConsole) {
                    // @ts-ignore
                    await installConsole(containerRef);
                }
                startLsp({ onError: onLspError});
                onLoadingStatusChange(LoadingStatus.Eval)
                void evaluateCode("");
            });
        }
    };

    const evaluateCode = async (compileValue: string | undefined) => {
        if (!containerRef.current || isCompiling) {
            return;
        }
        console.log('evaluating...', languageContext)
        setIsCompiling(true);

        try {
          await prepareForEvaluation(containerRef.current, compileValue, languageContext.file)

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
    };

    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const debounceEvaluateCode = useCallback(
       (compileValue: string | undefined, time = 700) => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          evaluateCode(compileValue);
        }, time);

      },
      [containerRef.current, isCompiling, languageContext, targets]
    );

    useEffect(() => {
      return () => {
        clearTimeout(timeoutRef.current);
      };
    }, []);

    return {
        editorWillMount,
        editorDidMount,
        evaluateCode: debounceEvaluateCode,
        isCompiling,
    }
}
