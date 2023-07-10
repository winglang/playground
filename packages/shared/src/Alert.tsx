import { PropsWithChildren } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export interface AlertProps {
  title: string;
}

export const Alert = (props: PropsWithChildren<AlertProps>) => {
  return (
    <div className="rounded-md bg-red-50 p-4 border-2 border-red-500/30">
      <div className="flex">
        <div className="flex-shrink-0 mt-0.5">
          <ExclamationTriangleIcon
            className="h-6 w-6 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-red-800">{props.title}</h3>
          <div className="mt-2 text-base text-red-700">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
