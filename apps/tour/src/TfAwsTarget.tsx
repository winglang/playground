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
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const FileRow = ({title, description, icon, selected, onClick}: {
  title: string,
  description?: string,
  icon?: React.ReactNode,
  selected: boolean,
  onClick: () => void
}) => {
  return (
    <div className="truncate">
      <button
      className={classNames(
        "flex items-center w-full px-2 py-1",
        "text-left text-sm font-medium leading-5",
        "text-gray-900",
        "hover:bg-gray-300 focus:bg-gray-300 focus:outline-none",
        selected && "bg-gray-200",
      )}
      onClick={onClick}
    >
      <div className="flex gap-x-2 truncate">
        {icon && <div className="w-6 my-auto shrink-0">
          {icon}
        </div>}
        <div className="h-full inline-block align-middle truncate">
          <div>{title}</div>
          {description && <div className="text-xs truncate opacity-80">{description}</div>}
        </div>
      </div>
    </button>
  </div>
  )
}

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
    default:
      return type.split("_").slice(1).join(" ").toUpperCase();
  }
}

const ResourceIcon = ({type}: {type: string}) => {
  const validType = [
    "aws_sqs_queue",
    "aws_s3_bucket",
    "aws_s3_object",
    "aws_lambda_function",
    "aws_iam_role",
    "aws_iam_role_policy",
    "aws_iam_role_policy_attachment",
  ].includes(type);
  if (!validType) {
    return null;
  }
  return  <img className="w-full" src={`aws/${type}.svg`}/>
}

export type Resource = {
  path: string;
  name: string;
  type: string;
  contents: string;
}

const getAwsResources = (tfFile: string) => {
  try {
    const json = JSON.parse(tfFile);
    if (!json.resource) {
      return [];
    }

    const resources: Resource[] = [];
    for (const [key, value] of Object.entries(json.resource)) {
      for (const [key2, value2] of Object.entries(value as object)) {
        const path = value2["//"]["metadata"]["path"] || key2;
        const resourceName = path.split("/").slice(-2, -1)[0];
        resources.push({
          path: path,
          name: resourceName,
          type: key,
          contents: JSON.stringify(value2, null, 2)
        });
      }
    }
    return resources;
  } catch (e) {
    return [];
  }
}

export interface TfAwsTargetProps {
  files?: CompilationItem[];
  downloadCompiledCode?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export const TfAwsTarget = ({ files, downloadCompiledCode, loading, disabled }: TfAwsTargetProps) => {
  const compileEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const [selectedFile, setSelectedFile] = useState<CompilationItem | undefined>(files?.[0]);

  const resources = useMemo(() => {
    if (!files) {
      return [];
    }
    const newResources = getAwsResources(
      files?.find((f) => f.name === "main.tf.json")?.contents || ""
    );
    return newResources;
  }, [files]);

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    minimap: { enabled: false },
  };

  const compileEditorDidMount = async (editor: any, monaco: any) => {
    compileEditorRef.current = editor
  }

  useEffect(() => {
    setSelectedFile({
      name: resources[0]?.path || files?.[0]?.name || "",
      contents: resources[0]?.contents || files?.[0]?.contents || "",
    });
  }, [files, resources]);


  return (
    <div className="bg-slate-500 w-full h-full flex">
      <div className="h-full w-full relative flex">
        {loading && (
          <div className="absolute inset-0 bg-slate-600/50 items-center align-middle z-10">
            <Loading status=""/>
          </div>
        )}

        <div className="h-full w-full max-w-[20rem]">
          <div className="flex flex-col h-1/2">
            <div className="items-center px-2 py-2 bg-slate-600">
              <div className="text-sm text-slate-100 uppercase flex">
                <div className="space-x-1 grow">
                  <span className="font-semibold">Terraform</span>
                  <span>({resources.length || 0})</span>
                </div>
              </div>
            </div>
            <div className="grow divide-y divide-slate-700 border-y border-slate-700 overflow-y-auto">
              {resources?.length === 0 && !loading && (
                <div className="px-2 py-2 text-sm text-slate-400">
                  No resources found
                </div>
              )}
              {resources?.map((resource) => {
                return (
                  <FileRow
                    key={resource.path}
                    title={getResourceName(resource.type)}
                    description={resource.name}
                    icon={<ResourceIcon type={resource.type}/>}
                    selected={selectedFile?.name === resource.path}
                    onClick={() => setSelectedFile({
                      name: resource.path,
                      contents: resource.contents,
                    })}
                  />
                )
              })}
            </div>
          </div>

          <div className="flex flex-col grow">
            <div className="items-center px-2 py-2 bg-slate-600">
              <div className="text-sm text-slate-100 uppercase flex">
                <div className="space-x-1 grow">
                  <span className="font-semibold">Assets</span>
                  <span>({files?.length || 0})</span>
                </div>
                <div>
                  <button onClick={() => downloadCompiledCode?.()} disabled={disabled}>
                    <ArrowDownTrayIcon className="w-4 h-4 text-slate-100"/>
                  </button>
                </div>
              </div>
            </div>
            <div className="grow divide-y divide-slate-700 border-y border-slate-700 overflow-y-auto">
              {files?.length === 0  && !loading && (
                <div className="px-2 py-2 text-sm text-slate-400">
                  No assets found
                </div>
              )}
              {files?.map((file) => {
                return (
                    <FileRow
                      key={file.name}
                      title={file.name}
                      selected={selectedFile?.name === file.name}
                      onClick={() => setSelectedFile(file)}
                    />
                  )
                })}
            </div>
          </div>
        </div>

        <div className='flex flex-grow min-w-[15rem] max-w-[3/4] bg-[#334155]'>
          <Editor
            key={selectedFile?.name}
            theme="akkd-dark-plus"
            path="source.js"
            language="js"
            options={Object.assign({}, options, { readOnly: true })}
            onMount={compileEditorDidMount}
            value={selectedFile?.contents}
            />
        </div>
      </div>
    </div>
  )
}
