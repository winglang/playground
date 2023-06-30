import classNames from "classnames";
import { WingLogo } from "./WingLogo";

export interface HeaderProps {
  tabs: {
    name: string;
    href: string;
  }[];
  size?: "small" | "auto";
}

export const Header = ({tabs, size = "auto"}: HeaderProps) => {
  return (
    <div className={
      classNames(
        "flex items-center font-sans font-normal text-[#1c1e21] dark:text-[#2bd5c1]",
        "h-[80px] w-full",
    )}>
      <a href="https://winglang.io/" target="_blank" rel="noreferrer" className={classNames(
        "hover:text-slate-600 dark:hover:text-white mr-[16px] decoration-0",
        size === "auto" && "small:mr-[40px]"
      )}>
          <WingLogo className="h-[24px] w-[88px]"/>
      </a>

      <div className="overflow-x-auto flex grow">
        {tabs.map((tab, index) => (
          <a href={tab.href} target="_blank" rel="noreferrer" className={
            classNames(
              "decoration-0",
              "px-[12px] py-[8px]",
              "text-[16px] leading-[20px]",
              size === "auto" && "small:px-[24px] small:text-[17px]"
            )
          }>{tab.name}</a>
        ))}
      </div>
    </div>
  );
}
