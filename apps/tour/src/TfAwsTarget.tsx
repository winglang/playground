import {useEffect, useRef, useState} from "react";
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


const FileButton = ({file, icon, selected, onClick}: {
  file: CompilationItem,
  icon?: React.ReactNode,
  selected: boolean,
  onClick: () => void
}) => {
  return (
    <button
      className={classNames(
        "flex items-center justify-between w-full px-2 py-1",
        "text-left text-sm font-medium leading-5 text-gray-900",
        "hover:bg-gray-100 focus:outline-none focus:bg-gray-100",
        selected && "bg-gray-100",
      )}
      onClick={onClick}
    >
      {icon && (
      <div className="flex items-center gap-2">
        {icon}
      </div>
      )}
      <div className="flex items-center gap-2">
        <span>{file.name}</span>
      </div>
    </button>
  )
}

const getResourceName = (type: string) => {
  if (type === "aws_sqs_queue") {
    return "SQS";

  }
  return type;
}

const getIconName = (type: string) => {
  switch (type) {
    case "aws_sqs_queue":
      return "aws_sqs.svg";
    case "aws_s3_bucket":
      return "aws_s3.svg";
    case "aws_lambda_function":
      return "aws_lambda.svg";
    default:
      return null;
  }
}


const ResourceIcon = ({type}: {type: string}) => {
  const iconName = getIconName(type);
  if (!iconName) {
    return null;
  }
  return  <img className="w-full" src={iconName}/>
}

export type Resource = {
  name: string;
  type: string;
  contents: string;
}

const ResourceRow = ({resource, selected, onClick}: {
  resource: Resource,
  selected: boolean,
  onClick: () => void
}) => {
  return (
    <button
      className={classNames(
        "truncate",
        "flex items-center w-full px-2 py-1",
        "text-left text-sm font-medium leading-5 text-gray-900",
        "hover:bg-gray-100 focus:outline-none focus:bg-gray-100",
        selected && "bg-gray-100",
      )}
      onClick={onClick}
    >
      <div className="flex gap-x-2 truncate">
        <div className="w-6 my-auto shrink-0">
          <ResourceIcon type={resource.type} />
        </div>
        <div className="h-full inline-block align-middle">
          <div>{getResourceName(resource.type)}</div>
          <div className="text-xs text-gray-700 truncate">{resource.name}</div>
        </div>
      </div>
    </button>
  )
}

const extractAwsResources = (tfFile: string) => {
  try {
    const json = JSON.parse(tfFile);
    console.log(json);
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
  const [resources, setResources] = useState<Resource[]>([]);

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    minimap: { enabled: false },
  };

  const compileEditorDidMount = async (editor: any, monaco: any) => {
    compileEditorRef.current = editor
  }

  useEffect(() => {
    const filename = "main.tf.json";
    const newResources = extractAwsResources(
      files?.find((f) => f.name === filename)?.contents || ""
    );
    console.log(newResources);
    setResources(newResources);
  }, [files]);

  return (
      <div className="h-full flex bg-slate-500">
          <div className="w-1/4 min-w-[15rem]">
            <div className="items-center px-2 py-2 border-b border-slate-500">
              <div className="text-sm font-semibold text-slate-100 uppercase">Terraform</div>
            </div>
            <div className="space-y-2">
              {resources?.map((resource) => {
                return (
                    <ResourceRow
                      key={resource.name}
                      resource={resource}
                      selected={selectedFile?.name === resource.name}
                      onClick={() => setSelectedFile(resource)}
                    />
                  )
                })}
            </div>
            <div className="flex-col grow"/>
            <div className="items-center px-2 py-2 border-b border-slate-500">
              <div className="text-sm font-semibold text-slate-100 uppercase">Assets</div>
            </div>
            <div className="space-y-2">
              {files?.map((file) => {
                return (
                    <FileButton
                      key={file.name}
                      file={file}
                      selected={selectedFile?.name === file.name}
                      onClick={() => setSelectedFile(file)}
                    />
                  )
                })}
            </div>
          </div>

          <div className='flex flex-grow h-full min-w-[15rem] max-w-[3/4] bg-[#334155]'>

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
