import {useEffect, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import * as monaco from 'monaco-editor';
import classNames from "classnames";
import { CompilationItem } from "./compiler/compiler";

export interface AwsTerraformTargetProps {
  items?: CompilationItem[];
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


export const AwsTerraformTarget = ({ items }: AwsTerraformTargetProps) => {

  const compileEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const [tfFiles, setTfFiles] = useState<CompilationItem[]>([]);
  const [assets, setAssets] = useState<CompilationItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<CompilationItem>();

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    minimap: { enabled: false },
  };


const compileEditorDidMount = async (editor: any, monaco: any) => {
  compileEditorRef.current = editor
}

  useEffect(() => {
    if (!items) {
      return;
    }
    const files: CompilationItem[] = [];
    const assets: CompilationItem[] = []
    items.forEach((file) => {
      if (file.name.endsWith(".tf")) {
        files.push(file);
      } else {
        assets.push(file);
      }
    });
    setTfFiles(files);
    setAssets(assets);
    setSelectedFile(files[0]);
  }, [items]);

  return (
      <div className="h-full flex bg-slate-500">
          <div className="w-1/4">
            <div className="items-center px-2 py-2 border-b border-slate-500">
              <div className="text-sm font-semibold text-slate-100 uppercase">Terraform</div>
            </div>
            <div className="space-y-2">
              {tfFiles.map((file) => {
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
            <div className="grow"/>
            <div className="items-center px-2 py-2 border-b border-slate-500">
              <div className="text-sm font-semibold text-slate-100 uppercase">Assets</div>
            </div>
            <div className="space-y-2">
              {assets.map((asset) => {
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

          <div className='flex flex-grow h-full max-w-[3/4]'>
            <Editor
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
