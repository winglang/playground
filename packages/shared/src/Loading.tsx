import { FiCommand } from "react-icons/fi";

export interface LoadingProps {
  status: string;
}

export function Loading({ status }: LoadingProps) {
  return <div className="flex flex-col h-full w-full text-slate-500 dark:text-[#f1f0f1]  justify-start items-center">
    <div className="mt-[20%]">
      <img className="h-[64px] w-[136px]" src="wing_logo.svg" loading="lazy" alt="" />
    </div>
    <div className="flex items-center">
      <FiCommand className="animate-spin"/>
      <span className="pl-[5px]">{status}</span>
    </div>
  </div>
}
