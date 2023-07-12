import { useTheme } from './theme-provider';
import classNames from 'classnames';

import { useCallback } from 'react';
import { ChatBubbleLeftRightIcon, PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";

export interface SendFeedbackButtonProps {
  onClick: (url: URL) => void;
  className?: string;
}

export const SendFeedbackButton = ({ onClick, className } : SendFeedbackButtonProps) => {
  const { theme } = useTheme();

  const handleClick = useCallback(() => {
    const url = new URL("https://github.com/winglang/wing/issues/new");
    onClick(url);
  }, [onClick]);

  return (
    <button
      className={classNames(
        "flex items-center justify-center cursor-pointer",
        theme.textInput,
        "p-1.5 rounded-3xl font-medium flex focus:outline-none",
        "hover:bg-slate-200 hover:dark:bg-slate-700",
        "transition-color duration-300",
        className,
      )}
      onClick={handleClick}
      title="Send Feedback"
    >
      <div className="relative h-[24px] w-[24px] leading-[20px]">
        <ChatBubbleLeftRightIcon className="w-[24px] h-[24px]" />
        <PlusSmallIcon className="w-[7px] absolute top-[4px] left-[3.5px]" />
        <MinusSmallIcon className="w-[7px] absolute top-[9.5px] left-[12.5px]" />
      </div>
    </button>
  );
}
