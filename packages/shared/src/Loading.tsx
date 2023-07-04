import { FiCommand } from "react-icons/fi";
import classNames from "classnames";

export interface LoadingProps {
  status: string;
}

export function Loading({ status }: LoadingProps) {
  return <div className={classNames(
    "flex flex-col h-full w-full justify-start items-center",
    "text-slate-500 dark:text-[#f1f0f1]",
    "transition-colors duration-300",
  )}>
    <div className="mt-[20%]">
      <img className="h-[64px] w-[136px]" src="learn/wing_logo.svg" loading="lazy" alt="" />
    </div>
    <div className="flex items-center">
      <FiCommand className="animate-spin"/>
      <span className="pl-[5px]">{status}</span>
    </div>
  </div>
}
