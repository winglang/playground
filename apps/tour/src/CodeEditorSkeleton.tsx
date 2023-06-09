export const CodeEditorSkeleton = () => {
  return (
    <div className='flex flex-col h-full w-full relative'>
      <div className="absolute inset-0 overflow-hidden flex flex-col p-[33px] gap-[8px]">
        <div className="flex gap-x-[25px] h-5">
          <div className="w-5 bg-gray-700 rounded-sm shrink-0"/>
          <div className="w-[110px] bg-gray-700 rounded-sm shrink-0"/>
        </div>
        <div className="flex gap-x-[25px] h-5">
          <div className="w-5 bg-gray-700 rounded-sm shrink-0"/>
          <div className="w-[70px] bg-gray-700 rounded-sm shrink-0"/>
        </div>
        <div className="flex gap-x-[25px] h-5">
          <div className="w-5 bg-gray-700 rounded-sm shrink-0"/>
          <div className="w-[275px] bg-gray-700 rounded-sm shrink-0"/>
        </div>
        <div className="flex gap-x-[25px] h-5">
          <div className="w-5 bg-gray-700 rounded-sm shrink-0"/>
          <div className="w-[150px] bg-gray-700 rounded-sm shrink-0"/>
        </div>
      </div>
    </div>
  );
}
