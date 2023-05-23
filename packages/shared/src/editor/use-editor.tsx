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
import {debounce} from "lodash";
import {CompilationRequest} from "../compiler/request";
import {CompilationItem, Compiler, Target} from "../compiler/compiler";
import React, {useRef, useState} from "react";
import * as monaco from 'monaco-editor';


export interface UseEditorOptions {
    editorRef: React.MutableRefObject<any>;
    onLoadingStatusChange: (state: LoadingStatus) => void;
    onLspError: () => void;
    code: string;
    languageContext: LanguageContext;
    compiler: Compiler;
    targets: Target[];
    editorOptions: monaco.editor.IStandaloneEditorConstructionOptions;
    installConsole?: (containerRef: React.MutableRefObject<WebContainer>) => Promise<void>;
    editorTheme?: string;
    shouldInitContainer: boolean;
}

export type TargetOutput = {
  target: Target,
  files: CompilationItem[]
}

const darkPlusTheme = convertTheme(darkPlusTMTheme);

export const useEditor = ({editorRef, onLoadingStatusChange, onLspError, code, languageContext, compiler, targets, installConsole, editorTheme, shouldInitContainer}: UseEditorOptions) => {

    const [isCompiling, setIsCompiling] = useState(false);
    const containerRef = useRef<WebContainer>();
    const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const [targetsOutput, setTargetsOutput] = useState<TargetOutput[]>([]);

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
                void evaluateCode(undefined);
            });
        }
    };

    const evaluateCode = debounce(async (value: string | undefined) => {
        if (!containerRef.current || isCompiling) {
            return;
        }
        console.log('evaluating...', languageContext)
        setIsCompiling(true);

        try {
          const outputs: TargetOutput[] = [];
          let compileValue = editorRef.current?.getValue()
          await prepareForEvaluation(containerRef.current, compileValue, languageContext.file)
          targets.forEach(async target => {
            const compilation = await compiler.compile(new CompilationRequest(compileValue!, target));
            const output = {
              target,
              files: compilation.files
            }
            outputs.push(output);
          })
          setTargetsOutput(outputs);
        } finally {
            onLoadingStatusChange(LoadingStatus.Completed)
            setIsCompiling(false)
        }
    }, 700);

    return {
        editorWillMount,
        editorDidMount,
        evaluateCode,
        isCompiling,
        targetsOutput,
    }
}
