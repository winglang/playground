export const Input = (props: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => (
  <input
    {...props}
    className="border-slate-300 dark:border-slate-800 items-center px-2.5 py-1.5 border text-md rounded outline-none shadow-inner bg-white dark:bg-slate-800 text-slate-900 placeholder:text-slate-500 dark:text-slate-300 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 outline-none w-full"
  />
);

export const Button = (props: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: any;
}) => (
  <button
    {...props}
    type="button"
    className="loading inline-flex gap-2 items-center text-sm font-medium outline-none rounded focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 outline-none bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-900 placeholder:text-slate-500 dark:text-slate-300 dark:placeholder:text-slate-500 border shadow-sm border-slate-300 dark:border-slate-800 px-2.5 py-1.5 min-w-fit"
  >
    {props.children}
  </button>
);
