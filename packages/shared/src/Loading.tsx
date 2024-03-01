import { FiCommand } from "react-icons/fi";
import classNames from "classnames";
import { WingLogo } from "./WingLogo";

export interface LoadingProps {
  status: string;
}

export function Loading({ status }: LoadingProps) {
  return (
    <div
      className={classNames(
        "flex flex-col",
        "h-full justify-center items-center",
        "text-slate-500 dark:text-[#f1f0f1]",
        "transition-colors duration-300",
        "space-y-4",
      )}
    >
      <WingLogo className="h-[40px]" />
      <div className="flex items-center">
        <FiCommand className="animate-spin" />
        <span className="pl-[5px]">{status}</span>
      </div>
    </div>
  );
}
