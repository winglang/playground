import {FC, PropsWithChildren} from "react";
import classNames from "classnames";

export const PanelHeader: FC<PropsWithChildren> = ({children}) => {
    return <h3 className={classNames(
      "px-4 py-1 border-b uppercase text-xs font-semibold leading-7 tracking-widest",
      "text-slate-700 bg-slate-300 dark:text-slate-300 dark:bg-slate-700 border-[#2A3A4B]",

    )}>{children}</h3>;
};
