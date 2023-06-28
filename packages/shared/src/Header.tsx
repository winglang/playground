import classNames from "classnames";
import { WingLogo } from "./WingLogo";
import { PropsWithChildren } from "react";

export const Header = ({children}:PropsWithChildren) => {
  return (
    <div className={
      classNames(
        "py-2 flex gap-12 items-center font-sans text-slate-700 dark:text-[#BDCECC]",
        "text-[17px] leading-[20px]"
    )}>
      <a href="https://winglang.io/" target="_blank" rel="noreferrer" className="hover:text-slate-600 dark:hover:text-white">
          <WingLogo className='h-[24px] w-[88px]' />
      </a>
      <a href="https://docs.winglang.io/" target="_blank" rel="noreferrer">
        Docs
      </a>
      <a href="https://docs.winglang.io/blog" target="_blank" rel="noreferrer">
        Blog
      </a>
      {children}
    </div>
  );
}
