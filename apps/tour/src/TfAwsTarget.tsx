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

const ResourceIcon = ({type}: {type: string}) => {
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

  if (!resources.includes(type)) {
    return null;
  }
  return  <img className="w-full" src={`aws/${type}.svg`}/>
}

interface Item {
  id: string;
  name: string;
  description?: string;
  type?: string;
  contents: string;
}

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
        title={title}
        className={classNames(
          "flex items-center w-full px-2 py-1",
          "text-left text-sm font-medium leading-5",
          "text-gray-900",
          "hover:bg-gray-300 focus:bg-gray-300 focus:outline-none",
          selected && "bg-gray-300",
        )}
        onClick={onClick}
      >
      <div className="flex gap-x-2 truncate">
        {icon && <div className="w-6 my-auto shrink-0">
          {icon}
        </div>}
        <div className="h-full inline-block align-middle truncate">
          <div className="truncate">{title}</div>
          {description && <div className="text-xs truncate opacity-80">{description}</div>}
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
}:{
  title: string;
  items: Item[];
  selectedItem?: Item;
  loading: boolean;
  placeholder?: string;
  onClick: (item: Item) => void;
  actions?: React.ReactNode;
}) => {
  return (
    <>
     <div className="items-center px-2 py-2 border-b border-slate-600 bg-slate-700">
        <div className="text-sm text-white uppercase flex">
          <div className="space-x-1 grow">
            <span className="font-semibold">{title}</span>
            <span>({items?.length || 0})</span>
          </div>
          <div>
            {actions}
          </div>
        </div>
      </div>
      <div className="flex flex-col grow relative bg-slate-550">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="grow divide-y border-b divide-slate-600 border-slate-600">
            {items.length === 0 && !loading && (
              <div className="px-2 py-2 text-sm text-slate-200/50 text-center">
                {placeholder}
              </div>
            )}
            {items.map((item) => {
              return (
                <FileRow
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  icon={item.type && <ResourceIcon type={item.type}/>}
                  selected={selectedItem?.id === item.id}
                  onClick={() => onClick(item)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
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
      for (const [key, value] of Object.entries(json.resource)) {
        for (const [key2, value2] of Object.entries(value as object)) {
          const path = value2["//"]["metadata"]["path"] || key2;
          const resourceName = path.split("/").slice(-2, -1)[0];
          if (value2.policy) {
            value2.policy = JSON.parse(value2.policy);
          }
          resources.push({
            id: path,
            name: getResourceName(key),
            description: resourceName,
            type: key,
            contents: JSON.stringify(value2, null, 2)
          });
        }
      }
      return resources;
    } catch (e) {
      return [];
    }
  }, [files]);

  const assets: Item[] = useMemo(() => {
    if (!files) {
      return [];
    }
    const newAssets = files.filter((f) => f.name.startsWith(".wing/clients/")).map((file, index) => {
      return {
        name: `inflight${index + 1}.js`,
        contents: file.contents,
      }
    });
    return newAssets.map((asset) => {
      return {
        id: asset.name,
        name: asset.name,
        contents: asset.contents,
      }
    });
  }, [files]);

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    minimap: { enabled: false },
  };

  const compileEditorDidMount = async (editor: any, monaco: any) => {
    compileEditorRef.current = editor
  }

  useEffect(() => {
    setSelectedItem(resources[0] || assets[0]);
  }, [assets, resources]);


  return (
    <div className="bg-slate-500 w-full h-full flex relative">
      {loading && (
        <div className="absolute inset-0 bg-slate-600/50 items-center align-middle z-10">
          <Loading status=""/>
        </div>
      )}
      <div className="flex flex-col w-1/2 max-w-[20rem] border-r border-slate-900">
        <ItemsList
          title="Terraform"
          items={resources}
          selectedItem={selectedItem}
          loading={loading}
          placeholder="No resources found"
          onClick={setSelectedItem}
        />

        <ItemsList
          title="Assets"
          // actions={
          //   <button onClick={downloadCompiledCode} disabled={disabled}>
          //     <ArrowDownTrayIcon className="w-4 h-4 text-slate-100"/>
          //   </button>
          // }
          items={assets}
          selectedItem={selectedItem}
          loading={loading}
          placeholder="No assets found"
          onClick={setSelectedItem}
        />
      </div>

      <div className='flex flex-grow min-w-[15rem] max-w-[3/4] bg-[#334155]'>
        <Editor
          key={selectedItem?.id}
          theme="akkd-dark-plus"
          path="source.js"
          language="js"
          options={Object.assign({}, options, { readOnly: true })}
          onMount={compileEditorDidMount}
          value={selectedItem?.contents}
          />
      </div>
    </div>
  )
}
