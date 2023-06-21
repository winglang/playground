import {useEffect, useMemo, useRef, useState} from "react";
import Editor from "@monaco-editor/react";

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

import * as monaco from 'monaco-editor';
import classNames from "classnames";
import { CompilationItem } from "@wing-playground/shared/src/compiler/compiler";
import { Loading } from "@wing-playground/shared/src/Loading";
import { Cog8ToothIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@wing-playground/shared/src/theme-provider";

const getResourceName = (type: string) => {
  switch (type) {
    case "aws_sqs_queue":
      return "SQS";
    case "aws_s3_bucket":
      return "S3";
    case "aws_s3_object":
      return "S3 Object";
    case "aws_lambda_function":
      return "Lambda";
    case "aws_iam_role":
      return "IAM Role";
    case "aws_iam_role_policy":
      return "IAM Policy";
    case "aws_sns_topic":
      return "SNS";
    default:
      return type.split("_").slice(1).join(" ").toLowerCase();
  }
}

const ResourceIcon = ({type, className}: {type: string, className?: string}) => {
  const resources = [
    "aws_sqs_queue",
    "aws_s3_bucket",
    "aws_s3_object",
    "aws_lambda_function",
    "aws_lambda_permission",
    "aws_iam_role",
    "aws_iam_role_policy",
    "aws_iam_role_policy_attachment",
    "aws_sns_topic",
  ];

  if (type === "file") {
    return <DocumentIcon className={classNames("w-full", className)} />;
  }
  if (!resources.includes(type)) {
    return <Cog8ToothIcon className={classNames("w-full", className)} />;
  }
  return  <img className={classNames("w-full", className)} src={`aws/${type}.svg`}/>
}

interface Item {
  id: string;
  name: string;
  description?: string;
  type?: string;
  contents: string;
}

const FileRow = ({title, description, icon, selected, onClick, className}: {
  title: string,
  description?: string,
  icon?: React.ReactNode,
  selected: boolean,
  onClick: () => void,
  className?: string,
}) => {
  const { theme } = useTheme();
  return (
    <div className="truncate">
      <button
        title={title}
        className={classNames(
          "flex items-center w-full px-4 py-1",
          "text-left text-sm font-medium leading-5",
          "transition-colors duration-300",
          "outline-none",
          theme.textInput,
          selected && "bg-slate-200 dark:bg-slate-550",
          !selected && "bg-slate-50 hover:bg-slate-100 dark:bg-slate-650 dark:hover:bg-slate-600",
          className,
        )}
        onClick={onClick}
      >
      <div className="flex gap-x-2 truncate">
        {icon &&
          <div className={classNames("my-auto shrink-0", description ? "w-6" : "w-4")}>
            {icon}
          </div>
        }
        <div className="h-full inline-block align-middle truncate">
          <div className="truncate">{title}</div>
          {description && <div className="text-xs truncate opacity-70">{description}</div>}
        </div>
      </div>
    </button>
  </div>
  )
}

const ItemsList = ({
  title,
  items,
  selectedItem,
  loading,
  placeholder,
  onClick,
  actions,
  group
}:{
  title: string;
  items: Item[];
  selectedItem?: Item;
  loading: boolean;
  placeholder?: string;
  onClick: (item: Item) => void;
  actions?: React.ReactNode;
  group?: boolean;
}) => {
  const { theme } = useTheme();

  return (
    <div className="grow flex flex-col">
      <div className={classNames(
         theme.text1,
         'bg-slate-150 dark:bg-slate-700',
         "transition-colors duration-300",
         "px-4 py-1 uppercase text-xs font-semibold leading-7 tracking-widest",
      )}>
        <div className="space-x-1 grow">
          <span className="font-semibold text-xs capitalize text-slate-900 dark:text-slate-300 transition-colors duration-300">
            {title}
          </span>
          <span>({items?.length || 0})</span>
        </div>
        <div>
          {actions}
        </div>
      </div>
      <div className={classNames(
        "flex flex-col grow relative border-t-[0.5px]",
        "bg-white dark:bg-gray-750",
        theme.border4,
        "transition-colors duration-300",
      )}>
        <div className="absolute inset-0 overflow-y-auto">
          <div className="grow">
            {items?.length === 0 && (
              <div className={classNames(
                theme.text2,
                "px-2 py-2 text-sm text-center",
              )}>
                {placeholder}
              </div>
            )}
            {items.map((item, index) => {
              const prev = items[index - 1];
              return (
                <>
                {group && item.description !== prev?.description && (
                  <div className={classNames(
                    "bg-slate-200/60 dark:bg-slate-700/60",
                    "text-slate-500 dark:text-slate-300",
                    "pl-6 pr-2 py-1 text-xs",
                    "transition-colors duration-300",
                    "border-y border-slate-100 dark:border-gray-600"
                  )}>
                    {item.description}
                  </div>
                )}
                  <FileRow
                    key={item.id}
                    title={item.name}
                    description={group ? "" : item.description}
                    icon={item.type && <ResourceIcon type={item.type}/>}
                    selected={selectedItem?.id === item.id}
                    onClick={() => onClick(item)}
                    className={
                      classNames(
                        "pl-8",
                        "transition-colors duration-300",
                      )
                    }
                  />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export interface TfAwsTargetProps {
  files?: CompilationItem[];
  downloadCompiledCode?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export const TfAwsTarget = ({
  files,
  downloadCompiledCode,
  loading = false,
  disabled = false
}: TfAwsTargetProps) => {
  const compileEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const [selectedItem, setSelectedItem] = useState<Item | undefined>();

  const { theme, mode } = useTheme();

  const resources: Item[] = useMemo(() => {
    if (!files) {
      return [];
    }

    const tfFile = files?.find((file) => file.name === "main.tf.json")?.contents;
    if (!tfFile) {
      return [];
    }
    try {
      const json = JSON.parse(tfFile);
      if (!json.resource) {
        return [];
      }
      const resources: Item[] = [];
      for (const [resourceType, value] of Object.entries(json.resource)) {
        for (const [key, content] of Object.entries(value as object)) {
          const path = content["//"]["metadata"]["path"] || key;
          const resourceName = path.split("/").slice(-2, -1)[0];
          if (content.policy) {
            content.policy = JSON.parse(content.policy);
          }
          if (content.assume_role_policy) {
            content.assume_role_policy = JSON.parse(content.assume_role_policy);
          }
          resources.push({
            id: path,
            name: getResourceName(resourceType),
            description: resourceName,
            type: resourceType,
            contents: JSON.stringify(content, null, 2)
          });
        }
      }
      return resources.sort((a, b) => a.description?.localeCompare(b.description || "") || 0);
    } catch (e) {
      return [];
    }
  }, [files]);

  const assets: Item[] = useMemo(() => {
    if (!files) {
      return [];
    }
    const newAssets = files.filter((f) => f.name.startsWith(".wing/inflight")).map((file, index) => {
      return {
        name: `inflight${index + 1}.js`,
        contents: file.contents,
      }
    });
    return newAssets.map((asset) => {
      return {
        id: asset.name,
        name: asset.name,
        type: "file",
        contents: asset.contents,
      }
    });
  }, [files]);

  const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
    minimap: { enabled: false },
    readOnly: true,
    fontSize: 12,
    tabSize: 2,
  };

  const compileEditorDidMount = async (editor: any, monaco: any) => {
    compileEditorRef.current = editor
  }

  useEffect(() => {
    setSelectedItem(resources[0] || assets[0]);
  }, [assets, resources]);


  return (
    <div className={classNames(
      theme.bg1,
      "w-full h-full relative"
    )}>
      {loading && (
        <div className={classNames(
          "absolute inset-0 z-20",
          "bg-slate-300/50 dark:bg-slate-600/50"
        )}>
          <Loading status=""/>
        </div>
      )}
      <div className="w-full h-full flex relative gap-[1px]">
        <div className={classNames(
          "flex flex-col w-1/2 max-w-[20rem]",
          "divide-y divide-slate-400 dark:divide-slate-800"
        )}>
          <ItemsList
            title="Resources"
            items={resources}
            selectedItem={selectedItem}
            loading={loading}
            placeholder="No resources found"
            onClick={setSelectedItem}
            group
          />

          <ItemsList
            title="Assets"
            items={assets}
            selectedItem={selectedItem}
            loading={loading}
            placeholder="No assets found"
            onClick={setSelectedItem}
          />
        </div>

        <div className={
          classNames(
            "flex flex-col flex-grow min-w-[15rem] max-w-[3/4] relative"
        )}>
          {!selectedItem && (
            <div className={classNames(
              theme.bg3,
              theme.text2,
              "absolute inset-0 z-10 grid place-items-center",

            )}>
              <div>Select a resource or asset to view</div>
            </div>
          )}
          <Editor
            key={selectedItem?.id}
            theme={mode}
            path="source.js"
            language="js"
            options={editorOptions}
            onMount={compileEditorDidMount}
            value={selectedItem?.contents}
          />
        </div>
      </div>
    </div>
  )
}
