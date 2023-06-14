import {FC, PropsWithChildren} from "react";
import classNames from "classnames";
import { useTheme } from "./theme-provider";

export const PanelHeader: FC<PropsWithChildren> = ({children}) => {
  const {theme} = useTheme();
  return <h3 className={classNames(
    theme.bg3,
    theme.text1,
    "px-4 py-1 border-b uppercase text-xs font-semibold leading-7 tracking-widest",
    "border-gray-400 dark:border-gray-800",

  )}>{children}</h3>;
};
