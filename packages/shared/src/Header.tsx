import classNames from "classnames";
import { WingLogo } from "./WingLogo";

export interface HeaderProps {
  tabs: {
    name: string;
    href: string;
  }[];
}

export const Header = ({tabs}: HeaderProps) => {
  return (
    <div className={
      classNames(
        "flex items-center font-sans font-normal text-[#1c1e21] dark:text-[#2bd5c1]",
        "h-[80px]"
    )}>
      <a href="https://winglang.io/" target="_blank" rel="noreferrer" className="hover:text-slate-600 dark:hover:text-white mr-[40px] decoration-0">
          <WingLogo className="h-[24px] w-[88px]"/>
      </a>
      {tabs.map((tab, index) => (
        <a href={tab.href} target="_blank" rel="noreferrer" className={
          classNames(
            "px-[12px] xl:px-[24px] py-[8px] decoration-0",
            "text-[16px] xl:text-[17px] leading-[20px]"
          )
        }>{tab.name}</a>
      ))}
    </div>
  );
}
