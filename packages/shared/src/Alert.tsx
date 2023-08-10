import { PropsWithChildren } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
export interface AlertProps {
  title: string;
}

export const Alert = (props: PropsWithChildren<AlertProps>) => {
  return (
    <div className="text-red-950">
      <div className="flex flex-col self-center">
        <div className="self-center mb-2.5">
          <ExclamationTriangleIcon
            className="h-6 w-6 text-red-950"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col text-red-950">
          <h3 className="self-center text-lg font-medium">{props.title}</h3>
          <div className="flex flex-col self-center mt-2 text-base">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
