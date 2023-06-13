import classNames from "classnames";

export interface CodeEditorSkeletonProps {
  loading?: boolean;
}

const CodeRow = ({loading, width} : {loading?: boolean, width: string}) => {
  return (
    <div className="flex gap-x-[25px] h-5">
      <div className={classNames("w-5 bg-gray-700 rounded-sm shrink-0", loading && "animate-pulse")}/>
      <div className={classNames(`w-[${width}]`,"bg-gray-700 rounded-sm shrink-0", loading && "animate-pulse")}/>
    </div>
  );
}

export const CodeEditorSkeleton = ({loading} : CodeEditorSkeletonProps) => {
  return (
    <div className='flex flex-col h-full w-full relative'>
      <div className="absolute inset-0 overflow-hidden flex flex-col p-[33px] gap-[8px]">
        <CodeRow loading={loading} width="110px"/>
        <CodeRow loading={loading} width="70px"/>
        <CodeRow loading={loading} width="275px"/>
        <CodeRow loading={loading} width="70px"/>
      </div>
    </div>
  );
}
