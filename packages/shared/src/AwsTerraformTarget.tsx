import {useEffect, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import * as monaco from 'monaco-editor';
import classNames from "classnames";

export interface AwsTerraformTargetProps {
  compilations: any[];
}

export interface TerraformFile {
  name: string;
  description: string;
  content: string;
}

export interface Asset {
  name: string;
  description: string;
  content: string;
}

const FileButton = ({file, icon, selected, onClick}: {
  file: TerraformFile,
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


export const AwsTerraformTarget = ({compilations}: AwsTerraformTargetProps) => {

  const compileEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  const tfFiles: TerraformFile[] = [
    {
      name: "main.tf",
      description: "The main file",
      content: `resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}`,
    },
    {
      name: "variables.tf",
      description: "The variables file",
      content: `variable "aws_region" {
  default = "us-east-1"
}`,
    },
    {
      name: "outputs.tf",
      description: "The outputs file",
      content: `output "instance_ip_addr" {
  value = aws_instance.example.public_ip
}`,
    },
  ];

  const asseets: Asset[] = [
    {
      name: "Javascript",
      description: "cloud.Function1/Code",
      content: `exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};`,
    },
    {
      name: "Javascript 2",
      description: "cloud.Function2/Code",
      content: `exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};`}
  ];

  const [selectedFile, setSelectedFile] = useState(tfFiles[0]);

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    minimap: { enabled: false },
  };


const compileEditorDidMount = async (editor: any, monaco: any) => {
  compileEditorRef.current = editor
}

  useEffect(() => {
    console.log("AwsTerraformTarget", compilations[compilations.length - 1]);
    console.log("AwsTerraformTarget", compilations);
  }, [compilations]);

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
                      selected={selectedFile.name === file.name}
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
              {asseets.map((asset) => {
                return (
                    <FileButton
                      key={asset.name}
                      file={asset}
                      selected={selectedFile.name === asset.name}
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
              value={selectedFile.content}
              />
          </div>
      </div>
  )
}
