import classNames from "classnames";
import { WingLogo } from "./WingLogo";

export interface HeaderProps {
  tabs: {
    name: string;
    href: string;
  }[];
}

export const Header = ({ tabs }: HeaderProps) => {
  return (
    <div
      className={classNames(
        "flex items-center font-orbiter font-normal text-[#111414] dark:text-[#F6F6F6]",
        "h-[80px] w-full",
      )}
    >
      <a
        href="https://winglang.io/"
        rel="noreferrer"
        className={classNames(
          "hover:text-slate-600 dark:hover:text-white ml-[4.5px] mb-[0.5px] decoration-0",
          "mr-[30px] small:mr-[54px]",
        )}
      >
        <WingLogo className="h-[23.01px] w-[120.16px]" />
      </a>

      <div className="overflow-x-auto flex grow">
        {tabs.map((tab, index) => (
          <a
            key={tab.href}
            href={tab.href}
            rel="noreferrer"
            className={classNames(
              "decoration-0",
              "text-[16px] leading-[20px]",
              "px-[12px] small:px-[24px] py-[8px]",
              "dark:text-[#f1f0f1]",
              "tracking-[-0.010em]",
            )}
          >
            {tab.name}
          </a>
        ))}
      </div>
    </div>
  );
};
