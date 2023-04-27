
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
      <button
        className="m-0.5 p-2 text-[#f1f0f1] bg-[#64748B] text-[14px] inline-flex gap-2 items-center font-medium outline-none transition ease-in-out rounded hover:bg-[#1E293B]"
        onClick={onTfAws}
      >
        Compile to AWS
      </button>
      <button
        className="m-0.5 p-2 text-[#f1f0f1] bg-[#64748B] text-[14px] inline-flex gap-2 items-center font-medium outline-none transition ease-in-out rounded hover:bg-[#1E293B]"
        onClick={onTfGcp}
      >
        Compile to GCP
      </button>
      <button
        className="m-0.5 p-2 text-[#f1f0f1] bg-[#64748B] text-[14px] inline-flex gap-2 items-center font-medium outline-none transition ease-in-out rounded hover:bg-[#1E293B]"
        onClick={onTfAzure}
      >
        Compile to Azure
      </button>
    </div>
  )
}
