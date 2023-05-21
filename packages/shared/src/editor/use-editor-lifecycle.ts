import {wireGrammers} from "../grammers/utils";
import {initContainer, installDependencies, prepareForEvaluation} from "../containers";
import {startLsp} from "../lsp/lspClient";
import {WebContainer} from "@webcontainer/api";
import wingLanguageConfiguration from '../language-configurations/wing-configration.json';
import convertTheme from "../monaco-themes/convert-tmtheme";
import darkPlusTMTheme from "../monaco-themes/dark_plus";
import { MonacoServices } from 'monaco-languageclient';
import {LoadingStatus} from "../loading-status";
import {AnalyticsInstance} from 'analytics';
import {Example, LanguageContext} from "../use-examples";
import {debounce} from "lodash";
import {CompilationRequest} from "../compiler/request";
import {Compiler, Target} from "../compiler/compiler";


export interface UseEditorLifecycleOptions {
    editorRef: React.MutableRefObject<any>;
    monacoRef: React.MutableRefObject<any>;
    containerRef: React.MutableRefObject<WebContainer| undefined>;
    onLoadingStatusChange: (state: LoadingStatus) => void;
    onCompileStatusChange: (isCompiling: boolean) => void;
    isCompiling: boolean;
    analyticsService: AnalyticsInstance;
    wingVersion: string;
    setConsoleUrl: (url: string) => void;
    code: string;
    examples: Example[];
    languageContext: LanguageContext;
    compiler: Compiler;
}

const darkPlusTheme = convertTheme(darkPlusTMTheme);

export const useEditorLifecycle = ({editorRef, monacoRef, containerRef, onLoadingStatusChange, isCompiling, analyticsService, wingVersion, setConsoleUrl, code, examples, languageContext, onCompileStatusChange, compiler}: UseEditorLifecycleOptions) => {

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

        // install Monaco language client services
        MonacoServices.install(monaco);

        await wireGrammers(monaco);
        editorRef.current?.setValue(code);

        // do not wait for webcontainers
        initContainer().then(async instance => {
            containerRef.current = instance;
            onLoadingStatusChange(LoadingStatus.Install);
            const consoleUrl = await installDependencies(containerRef.current);
            startLsp({ onError: () => {
                    analyticsService.track('lsp crash', {
                        code: editorRef.current?.getValue(),
                        version: wingVersion
                    })
                }});
            setConsoleUrl(consoleUrl)
            onLoadingStatusChange(LoadingStatus.Eval)
            void evaluateCode(undefined, isCompiling);
        });
    };

    const evaluateCode = debounce(async (value: string | undefined, isCompiling: boolean) => {
        if (!containerRef.current || isCompiling) {
            return
        }

        console.log('evaluating...', languageContext)

        onCompileStatusChange(true)

        try {
            let compileValue = value;
            do {
                compileValue = editorRef.current?.getValue()
                await prepareForEvaluation(containerRef.current, compileValue, languageContext.file)
                const example = examples.find(e => e.text === languageContext.file)!;
                if (example) {
                    example.value = compileValue!;
                }
                await compiler.submit(new CompilationRequest(compileValue!, Target.TFAWS));
            } while (compileValue !== editorRef.current?.getValue());
        } finally {
            onLoadingStatusChange(LoadingStatus.Completed)
            onCompileStatusChange(false)
        }
    }, 700);

    return {
        editorWillMount,
        editorDidMount,
        evaluateCode
    }
}
