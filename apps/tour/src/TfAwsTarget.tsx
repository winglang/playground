import {useEffect, useMemo, useRef, useState} from "react";
import Editor from "@monaco-editor/react";

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
import classNames from "classnames";
import { CompilationItem } from "@wing-playground/shared/src/compiler/compiler";


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
        "hover:bg-gray-300 focus:bg-gray-300",
        selected && "bg-gray-200",
      )}
      onClick={onClick}
    >
      <div className="flex gap-x-2 truncate">
        {icon && <div className="w-6 my-auto shrink-0">
          {icon}
        </div>}
        <div className="h-full inline-block align-middle">
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
  ].includes(type);
  if (!validType) {
    return null;
  }
  return  <img className="w-full" src={`aws/${type}.svg`}/>
}

export type Resource = {
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
      const resourceId = Object.keys(value as object)[0];
      resources.push({
        name: resourceId,
        type: key,
        contents: JSON.stringify(value, null, 2)
      });
    }
    return resources;
  } catch (e) {
    return [];
  }
}

export interface TfAwsTargetProps {
  files?: CompilationItem[];
}

export const TfAwsTarget = ({ files }: TfAwsTargetProps) => {
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

  return (
      <div className="flex grow bg-slate-500">
          <div className="w-full max-w-[20rem]">
            <div className="items-center px-2 py-2 border-b border-slate-700">
              <div className="text-sm font-semibold text-slate-100 uppercase">Terraform</div>
            </div>
            <div className="divide-y divide-slate-700 overflow-y-auto h-1/2">
              {resources?.length === 0 && (
                <div className="px-2 py-2 text-sm text-slate-400">
                  No resources found
                </div>
              )}
              {resources?.map((resource) => {
                return (
                  <FileRow
                    key={resource.name}
                    title={getResourceName(resource.type)}
                    description={resource.name}
                    icon={<ResourceIcon type={resource.type}/>}
                    selected={selectedFile?.name === resource.name}
                    onClick={() => setSelectedFile(resource)}
                  />
                )
              })}
            </div>

            <div className="items-center px-2 py-2 border-b border-slate-700">
              <div className="text-sm font-semibold text-slate-100 uppercase">Assets</div>
            </div>

            <div className="divide-y divide-slate-700 overflow-y-auto h-1/2">
            {files?.length === 0 && (
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
  )
}
