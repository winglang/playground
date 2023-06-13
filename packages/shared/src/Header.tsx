import classNames from "classnames";
import { WingLogo } from "./WingLogo";

export const Header = () => {
  return (
    <div className={
      classNames(
        "py-4 flex gap-12 items-center font-sans text-[#BDCECC] bg-[#293443]",
        "text-[17px] leading-[20px]"
    )}>
      <a href="https://winglang.io/" target="_blank" rel="noreferrer" className="text-[#2AD5C1] hover:text-white">
          <WingLogo className='h-6' />
      </a>
      <a href="https://docs.winglang.io/" target="_blank" rel="noreferrer">
        Docs
      </a>
      <a href="https://docs.winglang.io/blog" target="_blank" rel="noreferrer">
        Blog
      </a>
    </div>
  );
}
