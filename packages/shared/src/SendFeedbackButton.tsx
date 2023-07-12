import { useTheme } from './theme-provider';
import classNames from 'classnames';

import { useCallback } from 'react';
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

export interface SendFeedbackButtonProps {
  onClick: (url: URL) => void;
}

export const SendFeedbackButton = ({ onClick } : SendFeedbackButtonProps) => {
  const { theme } = useTheme();

  const handleClick = useCallback(() => {
    const url = new URL("https://github.com/winglang/wing/issues/new");
    url.searchParams.set("labels", "🐛 bug");
    url.searchParams.set("template", "bug.yml");
    onClick(url);
  }, [onClick]);

  return (
    <button
      className={classNames(
        "flex items-center justify-center h-[26px] pb-[2px] cursor-pointer",
        theme.textInput,
      )}
      onClick={handleClick}
      title="Send Feedback"
    >
      <div className="h-[24px] w-[24px] leading-[20px]">
        <ChatBubbleBottomCenterTextIcon className="w-[24px] h-[24px]" />
      </div>
    </button>
  );
}
