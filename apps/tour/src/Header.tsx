import classNames from "classnames"

export const Header = () => {
  return (
    <div className={
      classNames("py-4 flex gap-12 items-center font-sans text-[#BDCECC] bg-[#293443]")
    }>
      <div className="flex items-center gap-x-2">
        <img src="/turquoise.svg" className='w-10' />
        <span className="text-xl">Wing</span>
      </div>
      <a href="https://docs.winglang.io/" target="_blank" rel="noreferrer">
        Docs
      </a>
      <a href="https://docs.winglang.io/blog" target="_blank" rel="noreferrer">
        Blog
      </a>
    </div>
  );
}
