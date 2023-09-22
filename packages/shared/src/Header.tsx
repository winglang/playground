import classNames from "classnames";
import { WingLogo } from "./WingLogo";

export interface HeaderProps {
  tabs: {
    name: string;
    href: string;
  }[];
  size?: "small" | "auto";
}

export const Header = ({ tabs, size = "auto" }: HeaderProps) => {
  return (
    <div
      className={classNames(
        "flex items-center font-sans font-normal text-[#1c1e21] dark:text-[#f1f0f1]",
        "h-[80px] w-full",
      )}
    >
      <a
        href="https://winglang.io/"
        rel="noreferrer"
        className={classNames(
          "hover:text-slate-600 dark:hover:text-white mr-[16px] decoration-0 mb-[1px]",
          size === "auto" && "small:mr-[40px]",
        )}
      >
        <WingLogo className="h-[23px] w-[138px] mr-[1px]" />
      </a>

      <div className="overflow-x-auto flex grow">
        {tabs.map((tab, index) => (
          <a
            key={tab.href}
            href={tab.href}
            rel="noreferrer"
            className={classNames(
              "decoration-0",
              "px-[12px] py-[8px]",
              "text-[16px] leading-[20px]",
              size === "auto" && "small:px-[24px] small:text-[14px]",
              "dark:text-[#f1f0f1]",
            )}
          >
            {tab.name}
          </a>
        ))}
      </div>
    </div>
  );
};
