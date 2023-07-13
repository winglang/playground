import { useTheme } from './theme-provider';
import classNames from 'classnames';

import { useCallback } from 'react';

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
        <svg width="24" height="24" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.633 10.5C7.439 10.5 8.166 10.054 8.664 9.42C9.44026 8.42962 10.4147 7.61218 11.525 7.02C12.248 6.636 12.875 6.064 13.178 5.305C13.3908 4.77325 13.5001 4.20575 13.5 3.633V3C13.5 2.80109 13.579 2.61032 13.7197 2.46967C13.8603 2.32902 14.0511 2.25 14.25 2.25C14.8467 2.25 15.419 2.48705 15.841 2.90901C16.263 3.33097 16.5 3.90326 16.5 4.5C16.5 5.652 16.24 6.743 15.777 7.718C15.511 8.276 15.884 9 16.502 9H19.628C20.654 9 21.573 9.694 21.682 10.715C21.727 11.137 21.75 11.565 21.75 12C21.7541 14.7363 20.8191 17.3912 19.101 19.521C18.713 20.003 18.114 20.25 17.496 20.25H13.48C12.997 20.25 12.516 20.172 12.057 20.02L8.943 18.98C8.48411 18.8274 8.00361 18.7497 7.52 18.75H5.904M5.904 18.75C5.987 18.955 6.077 19.155 6.174 19.352C6.371 19.752 6.096 20.25 5.651 20.25H4.743C3.854 20.25 3.03 19.732 2.771 18.882C2.42465 17.7452 2.24906 16.5633 2.25 15.375C2.25 13.822 2.545 12.339 3.081 10.977C3.387 10.203 4.167 9.75 5 9.75H6.053C6.525 9.75 6.798 10.306 6.553 10.71C5.69889 12.116 5.24843 13.7299 5.251 15.375C5.251 16.569 5.483 17.708 5.905 18.75H5.904ZM14.25 9H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 13C24.357 12.9993 25.711 13.1707 28.043 13.513C29.627 13.746 30.75 15.139 30.75 16.741V22.759C30.75 24.361 29.627 25.754 28.043 25.987C26.161 26.2634 24.2644 26.4284 22.363 26.481C21.9735 26.4909 21.6024 26.6493 21.326 26.924L17.25 31V26.356C16.142 26.27 15.044 26.147 13.957 25.987C12.373 25.754 11.25 24.36 11.25 22.76V22.759V19.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </button>
  );
}
