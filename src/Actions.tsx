
export interface ActionProps {
  isRunDisabled: boolean;
  onRun: (event: React.MouseEvent<HTMLElement>) => void;
  onTfAws: (event: React.MouseEvent<HTMLElement>) => void;
  onTfGcp?: (event: React.MouseEvent<HTMLElement>) => void;
  onTfAzure?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function Actions({ onRun, isRunDisabled, onTfAws, onTfGcp, onTfAzure }: ActionProps) {
  const comingSoon = (event: React.MouseEvent<HTMLElement>) => {
    alert("Coming soon...");
  };

  return (
    <div className="flex flex-row items-center justify-center">
      {/* <button
        className="m-0.5 p-2 text-[15px] inline-flex gap-2 items-center text-xs font-medium outline-none transition ease-in-out rounded hover:bg-slate-200"
        disabled={isRunDisabled}
        onClick={onRun}
      >
        Run
      </button> */}
      <button
        className="m-0.5 p-2 text-[15px] inline-flex gap-2 items-center text-xs font-medium outline-none transition ease-in-out rounded hover:bg-slate-200"
        onClick={comingSoon}
      >
        Deploy
      </button>
      <button
        className="m-0.5 p-2 text-[15px] inline-flex gap-2 items-center text-xs font-medium outline-none transition ease-in-out rounded hover:bg-slate-200"
        onClick={onTfAws}
      >
        Compile to AWS
      </button>
      <button
        className="m-0.5 p-2 text-[15px] inline-flex gap-2 items-center text-xs font-medium outline-none transition ease-in-out rounded hover:bg-slate-200"
        onClick={onTfGcp}
      >
        Compile to GCP
      </button>
      <button
        className="m-0.5 p-2 text-[15px] inline-flex gap-2 items-center text-xs font-medium outline-none transition ease-in-out rounded hover:bg-slate-200"
        onClick={onTfAzure}
      >
        Compile to Azure
      </button>
      <button
        className="m-0.5 p-2 text-[15px] inline-flex gap-2 items-center text-xs font-medium outline-none transition ease-in-out rounded hover:bg-slate-200"
        onClick={comingSoon}
      >
        Export as CDK construct
      </button>
    </div>
  )
}