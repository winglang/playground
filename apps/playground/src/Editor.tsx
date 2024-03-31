import "monaco-editor/esm/vs/editor/editor.all.js";

// support all editor features
import "monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js";
import "monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js";
import "monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickInput/standaloneQuickInputService.js";
import "monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js";
import "monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js";

import * as monaco from "monaco-editor";

import { buildWorkerDefinition } from "monaco-editor-workers";

import Editor, { loader } from "@monaco-editor/react";
import { StandaloneServices } from "vscode/services";
import getMessageServiceOverride from "vscode/service-override/messages";
import React, {
  createRef,
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Loading } from "@wing-playground/shared/src/Loading";
import {
  Compiler,
  Target,
  CompilationItem,
} from "@wing-playground/shared/src/compiler/compiler";
import { CompilationRequest } from "@wing-playground/shared/src/compiler/request";

import { useExamples } from "@wing-playground/shared/src/use-examples.js";
import { LoadingStatus } from "@wing-playground/shared/src/loading-status";
import { FilePicker } from "@wing-playground/shared/src/FilePicker.js";
import { ConsoleLayouts } from "@wing-playground/shared/src/console-layouts";
import { useEditor } from "@wing-playground/shared/src/editor/use-editor";
import { useAnalytics } from "@wing-playground/shared/src/analytics/use-analytics";
import { RightResizableWidget } from "@wing-playground/shared/src/RightResizableWidget";
import classNames from "classnames";

import { SimulatorTarget } from "@wing-playground/shared/src/SimulatorTarget";
import { TfAwsTarget } from "@wing-playground/shared/src/TfAwsTarget.js";
import {
  TargetsView,
  TargetView,
} from "@wing-playground/shared/src/TargetsView.js";
import { PanelHeader } from "@wing-playground/shared/src/PanelHeader";
import { debounce } from "lodash";
import {
  DefaultTheme,
  ThemeProvider,
  useTheme,
} from "@wing-playground/shared/src/theme-provider";
import { useSession } from "@wing-playground/shared/src/use-session";
import { Header } from "./Header";
import { useTimeout } from "usehooks-ts";
import { TooSlowAlert } from "@wing-playground/shared/src/alerts/TooSlow";
import { ServerErrorAlert } from "@wing-playground/shared/src/alerts/ServerError";
import { ServerDown } from "@wing-playground/shared/src/alerts/ServerDown";

const wingPackageJson = await import(
  "@winglang/compiler/package.json?raw"
).then((i) => JSON.parse(i.default));

loader.config({ monaco });

StandaloneServices.initialize({
  ...getMessageServiceOverride(document.body),
});
buildWorkerDefinition("dist", new URL("", window.location.href).href, false);

const compiler = new Compiler();

const TOO_SLOW_ERROR_SECONDS_THRESHOLD =
  (import.meta.env.VITE_TOO_SLOW_ERROR_SECONDS_THRESHOLD ?? 180) * 1000;

const IS_SERVER_DOWN = import.meta.env.VITE_IS_SERVER_DOWN === "true";

export type EditorProps = {
  defaultCode?: string;
  hostname?: string;
  port?: string;
  path?: string;
  className?: string;
};

export const ReactMonacoEditor: React.FC<EditorProps> = ({}) => {
  const {
    examples,
    currentExample,
    setCurrentExample,
    languageContext,
    setLanguageContext,
  } = useExamples();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const ref = createRef<HTMLDivElement>();
  const refIframe = useRef(null);
  const [iframeSrc, setIframeSrc] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Init);
  const { track } = useAnalytics({
    platform: "play",
    state: loadingStatus,
  });

  const [tooSlow, setTooSlow] = useState(false);
  useTimeout(() => {
    if (
      loadingStatus === LoadingStatus.Init ||
      loadingStatus === LoadingStatus.Install ||
      loadingStatus === LoadingStatus.Eval
    ) {
      setTooSlow(true);
    }
  }, TOO_SLOW_ERROR_SECONDS_THRESHOLD);

  const { theme, mode } = useTheme();
  const [currentMode, setCurrentMode] = useState(mode ?? "dark");

  const onToggleTheme = useCallback(() => {
    const newMode = currentMode === "light" ? "dark" : "light";
    setIframeSrc(iframeSrc.replace(/theme=(light|dark)/, `theme=${newMode}`));
    setCurrentMode(newMode);
  }, [currentMode, iframeSrc]);

  const onSendFeedback = useCallback(
    (url: URL) => {
      url.searchParams.set(
        "body",
        "\n\n" +
          `// **wing version:** ${wingPackageJson.version} \n` +
          "// **wing code snippet:**\n" +
          "```\n" +
          `${editorRef.current?.getValue() ?? ""}\n` +
          "```",
      );
      window.open(url.href, "_blank");
    },
    [editorRef.current?.getValue()],
  );

  const [fontSize, setFontSize] = useState(14);
  const fontSizes = [12, 14, 16];

  const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions =
    useMemo(() => {
      return {
        minimap: { enabled: false },
        fontSize: fontSize,
        tabSize: 2,
      };
    }, [fontSize]);

  const onLspError = () => {
    track("play_lsp_crash", {
      code: editorRef.current?.getValue(),
      version: wingPackageJson.version,
    });
  };

  const { getSession, setSession } = useSession("code", true);

  const url = new URL(window.location.href);
  const urlLayout = Number(url.searchParams.get("layout"));
  const isFullScreen = Number(url.searchParams.get("full"));

  const { evaluateCode, editorWillMount, editorDidMount, serverConsoleFailed } =
    useEditor({
      editorRef,
      onLoadingStatusChange: setLoadingStatus,
      onLspError,
      editorTheme: currentMode,
      languageContext,
      code: getSession() || currentExample.value,
      compiler,
      targets: [Target.TFAWS],
      layout:
        urlLayout in ConsoleLayouts ? urlLayout : ConsoleLayouts.Playground,
      setIframeSrc,
    });

  const [isCompiling, setIsCompiling] = useState(true);
  const [compilationItems, setCompilationItems] = useState<CompilationItem[]>(
    [],
  );
  const [currentTargetId, setCurrentTargetId] = useState("simulator");

  const retrieveCompilationFiles = useCallback(
    debounce(async (value: string, target: Target) => {
      setIsCompiling(true);
      const request = new CompilationRequest(value, target);
      const result = await compiler.compile(request);
      if (result.error) {
        console.error("compilation failed", result.error.stderr);
        setIsCompiling(false);
        return;
      }
      setCompilationItems(result.files);
      setIsCompiling(false);
    }, 1000),
    [compiler],
  );

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
    const example = examples.find((e) => e.text === languageContext.file);
    if (example) {
      editorRef.current?.setValue(example.value);
    }
  }, [languageContext]);

  const simulatorTarget: TargetView = useMemo(() => {
    return {
      id: "simulator",
      title: "Simulator",
      Target: () => (
        <SimulatorTarget frameSrc={iframeSrc} iframeRef={refIframe} />
      ),
    };
  }, [iframeSrc, refIframe]);

  const tfAwsTarget: TargetView = useMemo(() => {
    return {
      id: Target.TFAWS,
      title: "AWS/TERRAFORM",
      Target: () => (
        <TfAwsTarget loading={isCompiling} files={compilationItems} />
      ),
    };
  }, [isCompiling, compilationItems]);

  const tfGcpTarget: TargetView = {
    id: Target.TFGCP,
    title: "GCP/TERRAFORM",
    Target: () => <></>,
    disabled: true,
    tooltip: "Coming soon",
  };

  const tfAzureTarget: TargetView = {
    id: Target.TFAzure,
    title: "AZURE/TERRAFORM",
    Target: () => <></>,
    disabled: true,
    tooltip: "Coming soon",
  };

  const targetViews: TargetView[] = useMemo(() => {
    return [simulatorTarget, tfAwsTarget, tfGcpTarget, tfAzureTarget];
  }, [simulatorTarget, tfAwsTarget, tfGcpTarget, tfAzureTarget]);

  const getAlert = () => {
    if (IS_SERVER_DOWN) {
      return ServerDown;
    }
    if (tooSlow) {
      return TooSlowAlert;
    } else if (serverConsoleFailed) {
      return ServerErrorAlert;
    } else {
      return null;
    }
  };
  const Alert = getAlert();

  return (
    <ThemeProvider mode={currentMode} theme={DefaultTheme}>
      <div
        className={classNames(
          "w-full flex flex-col grow px-[32px] pb-[32px]",
          theme.bg4,
          "transition-colors duration-300",
          "min-w-[1024px]",
        )}
      >
        <div className="flex flex-col grow relative">
          <Header
            currentMode={currentMode}
            onToggleTheme={onToggleTheme}
            onSendFeedback={onSendFeedback}
          />
          {Alert && (
            <div className={"h-full grid content-center"}>
              <Alert />
            </div>
          )}
          {!Alert && (
            <div className="flex flex-col h-full">
              <div className="flex grow gap-2">
                <RightResizableWidget
                  className={classNames(
                    "border h-full",
                    theme.border4,
                    "transition-colors duration-300",
                    "max-w-[60%] flex flex-col min-w-[10rem] min-h-[15rem]",
                    {
                      "w-[33%]": fontSize === 12,
                      "w-[38%]": fontSize === 14,
                      "w-[43%]": fontSize === 16,
                    },
                  )}
                >
                  <PanelHeader>
                    <div className="flex">
                      <div
                        className="bg-transparent h-7 px-2 text-xs cursor-pointer focus:outline-none"
                        style={{ marginTop: "-2px" }}
                      >
                        <FilePicker
                          examples={examples}
                          currentExample={currentExample}
                          setCurrentExample={setCurrentExample}
                          setLanguageContext={setLanguageContext}
                        />
                      </div>
                      <div className="grow" />
                      <select
                        className="bg-transparent h-7 px-2 text-xs cursor-pointer focus:outline-none"
                        value={fontSize}
                        onChange={(e) => setFontSize(parseInt(e.target.value))}
                      >
                        {fontSizes.map((size) => (
                          <option key={size} value={size} className="truncate">
                            Font Size {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </PanelHeader>

                  <Editor
                    theme={currentMode}
                    options={editorOptions}
                    path={languageContext.path}
                    language={languageContext.language}
                    onMount={editorDidMount}
                    beforeMount={editorWillMount}
                    onChange={(value) => {
                      setSession(value || "");
                      evaluateCode();
                    }}
                  />
                </RightResizableWidget>
                <div
                  className={classNames(
                    "grow h-full basis-auto border",
                    theme.border4,
                    "transition-colors duration-300",
                    isFullScreen
                      ? "absolute w-full h-full top-2 right-0 border-2"
                      : "",
                  )}
                >
                  {loadingStatus !== LoadingStatus.Completed && (
                    <div className="flex flex-col h-full relative">
                      <div className="absolute inset-0 z-10">
                        <Loading status={loadingStatus} />
                      </div>
                    </div>
                  )}
                  {loadingStatus === LoadingStatus.Completed && (
                    <TargetsView
                      targets={targetViews}
                      currentTargetId={currentTargetId}
                      setCurrentTargetId={setCurrentTargetId}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};
