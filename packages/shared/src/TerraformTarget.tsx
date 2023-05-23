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
import { CompilationItem } from "./compiler/compiler";

export interface TerraformTargetProps {
  files?: CompilationItem[];
}

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


export const TerraformTarget = ({ files }: TerraformTargetProps) => {

  const compileEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const [selectedFile, setSelectedFile] = useState<CompilationItem>();

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    minimap: { enabled: false },
  };


const compileEditorDidMount = async (editor: any, monaco: any) => {
  compileEditorRef.current = editor
}
  useEffect(() => {
    if (!files) {
      return;
    }
    setSelectedFile(files[0]);
  }, [files]);

  return (
      <div className="h-full flex bg-slate-500">
          <div className="w-1/4 min-w-[15rem]">
            <div className="items-center px-2 py-2 border-b border-slate-500">
              <div className="text-sm font-semibold text-slate-100 uppercase">Terraform</div>
            </div>
            <div className="space-y-2">
              {files?.map((file) => {
                if (file.name.endsWith(".js")) {
                  return null;
                }
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
            <div className="flex-col grow"/>
            <div className="items-center px-2 py-2 border-b border-slate-500">
              <div className="text-sm font-semibold text-slate-100 uppercase">Assets</div>
            </div>
            <div className="space-y-2">
              {files?.map((asset) => {
                if (!asset.name.endsWith(".js")) {
                  return null;
                }
                return (
                    <FileButton
                      key={asset.name}
                      file={asset}
                      selected={selectedFile?.name === asset.name}
                      onClick={() => setSelectedFile(asset)}
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
