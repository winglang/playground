import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface ButtonProps {
  disabled?: boolean;
  invisible?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  disabled = false,
  invisible = false,
  onClick = () => {},
  className = "",
  children,
}:  PropsWithChildren<ButtonProps>) => {
  return (
    <button
    disabled={disabled}
    className={classNames(
      "text-slate-600 bg-slate-200 hover:bg-slate-300 hover:text-slate-650 dark:text-[#BDCECC] dark:bg-slate-700 dark:hover:bg-[#2AD5C1] dark:hover:text-slate-700",
      "transition-colors duration-300",
      "text-xs px-4 py-2 cursor-pointer border border-transparent",
      className,
      disabled && "opacity-50 cursor-not-allowed",
      invisible && "opacity-0"
    )}
    onClick={onClick}
  >
    {children}
  </button>
  )
}
