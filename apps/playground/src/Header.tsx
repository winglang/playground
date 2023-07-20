import { useEffect, useState } from "react";
import { Header as GlobalHeader } from "@wing-playground/shared/src/Header";
import { ThemeToggle } from "@wing-playground/shared/src/ThemeToggle";
import { Mode } from "@wing-playground/shared/src/theme-provider";
import classNames from "classnames";
import { SendFeedbackButton } from "@wing-playground/shared/src/SendFeedbackButton";

export interface HeaderProps {
  currentMode: Mode;
  onToggleTheme: () => void;
  onSendFeedback: (url: URL) => void;
}

export function Header({
  currentMode,
  onToggleTheme,
  onSendFeedback,
}: HeaderProps) {
  const [stars, setStars] = useState("");
  const [watchersCount, setWatchersCount] = useState("");

  useEffect(() => {
    const getStarsCount = async () => {
      const res = await fetch("https://api.github.com/repos/winglang/wing");
      const data = await res.json();

      if (!data.watchers_count) {
        return;
      }
      setWatchersCount(data.watchers_count);
    };
    getStarsCount();
  }, []);

  useEffect(() => {
    const round = (number: number): string => {
      if(!number) {
        return "";
      }
      return (Math.round(number / 100) * 100).toString();
    }
    const stars = round(Number(watchersCount));
    const starsK =
      stars.length > 3
        ? `${stars.slice(0, -3)}.${stars.slice(-3, -2)}k`
        : stars;
    setStars(starsK);
  }, [watchersCount]);

  return (
    <div className="flex">
      <div className="flex justify-between w-full">
        <GlobalHeader
          tabs={[
            {
              name: "Install",
              href: "https://www.winglang.io/docs/start-here/installation",
            },
            {
              name: "Playground",
              href: "https://play.winglang.io/",
            },
            {
              name: "Docs",
              href: "https://docs.winglang.io/",
            },
            {
              name: "Community",
              href: "https://www.winglang.io/community",
            },
            {
              name: "Contributing",
              href: "https://www.winglang.io/contributing",
            },
            {
              name: "Blog",
              href: "https://docs.winglang.io/blog",
            },
            {
              name: "Contact",
              href: "https://www.winglang.io/contact",
            },
          ]}
        />
        <div
          className={classNames(
            "flex grow items-center justify-end flex-none",
            "text-[#1c1e21] dark:text-[#f1f0f1] hover:text-slate-600 dark:hover:text-[#2ad5c1]",
            "transition-colors duration-300",
            "gap-x-[8px] xl:gap-x-[16px]",
            "leading-[20px]",
          )}
        >
          <SendFeedbackButton onClick={onSendFeedback} />

          <a
            href="https://t.winglang.io/slack"
            className="flex items-center justify-center h-[26px] pb-[2px]"
          >
            <div className="h-[24px] w-[24px] leading-[20px]">
              <svg
                className="overflow-hidden"
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.42692 3.36307C8.42692 5.22294 9.92891 6.72613 11.7873 6.72613H15.1477V3.36307C15.1477 1.50319 13.6457 0 11.7873 0C9.92891 0 8.42692 1.50319 8.42692 3.36307ZM15.1477 11.7962C15.1477 9.93633 13.6457 8.43314 11.7873 8.43314H3.36088C1.50248 8.43314 0.000488281 9.93633 0.000488281 11.7962C0.000488281 13.6561 1.50248 15.1593 3.36088 15.1593H11.7873C13.6457 15.1593 15.1477 13.6561 15.1477 11.7962ZM3.38627 23.592C5.24467 23.592 6.74666 22.0888 6.74666 20.2289V16.8659H3.38627C1.52787 16.8659 0.0258789 18.3691 0.0258789 20.2289C0.0258789 22.0888 1.52787 23.592 3.38627 23.592ZM11.7872 16.8659C9.92885 16.8659 8.42685 18.3691 8.42685 20.2289V28.6366C8.42685 30.4965 9.92885 31.9997 11.7872 31.9997C13.6456 31.9997 15.1476 30.4965 15.1476 28.6366V20.2289C15.1476 18.3691 13.6456 16.8659 11.7872 16.8659ZM25.2537 11.7962C25.2537 9.93633 26.7557 8.43314 28.6141 8.43314C30.4725 8.43314 31.9745 9.93633 31.9745 11.7962C31.9745 13.6561 30.4725 15.1593 28.6141 15.1593H25.2537V11.7962ZM23.5735 11.7962C23.5735 13.6561 22.0715 15.1593 20.2131 15.1593C18.3547 15.1593 16.8527 13.6561 16.8527 11.7962V3.36307C16.8527 1.50319 18.3547 0 20.2131 0C22.0715 0 23.5735 1.50319 23.5735 3.36307V11.7962ZM23.5735 28.6366C23.5735 26.7767 22.0715 25.2735 20.2131 25.2735H16.8527V28.6366C16.8527 30.4965 18.3547 31.9997 20.2131 31.9997C22.0715 31.9997 23.5735 30.4965 23.5735 28.6366ZM16.8527 20.2289C16.8527 22.0888 18.3547 23.592 20.2131 23.592H28.6395C30.4979 23.592 31.9999 22.0888 31.9999 20.2289C31.9999 18.3691 30.4979 16.8659 28.6395 16.8659H20.2131C18.3547 16.8659 16.8527 18.3691 16.8527 20.2289Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </a>

          <a
            href="https://github.com/winglang/wing"
            target="_blank"
            className={classNames(
              "flex gap-x-[8px] rounded-[4px] items-center font-sans text-[15px] py-[8px] px-[16px]",
              "border-[1px] border-slate-300 dark:border-slate-600",
              "transition-colors duration-300",
              "h-[44px]",
            )}
          >
            <div className="w-[24px] h-[26px] pb-[2px]">
              <svg
                className="overflow-hidden"
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 0C7.16 0 0 7.3411 0 16.4047C0 23.6638 4.58 29.795 10.94 31.9687C11.74 32.1122 12.04 31.6201 12.04 31.1894C12.04 30.7998 12.02 29.508 12.02 28.1341C8 28.8928 6.96 27.1293 6.64 26.2065C6.46 25.7349 5.68 24.279 5 23.8893C4.44 23.5818 3.64 22.823 4.98 22.8025C6.24 22.782 7.14 23.9919 7.44 24.484C8.88 26.9652 11.18 26.268 12.1 25.8374C12.24 24.7711 12.66 24.0534 13.12 23.6433C9.56 23.2332 5.84 21.8183 5.84 15.5435C5.84 13.7594 6.46 12.283 7.48 11.1347C7.32 10.7246 6.76 9.04309 7.64 6.78745C7.64 6.78745 8.98 6.35682 12.04 8.46893C13.32 8.09982 14.68 7.91527 16.04 7.91527C17.4 7.91527 18.76 8.09982 20.04 8.46893C23.1 6.33632 24.44 6.78745 24.44 6.78745C25.32 9.04309 24.76 10.7246 24.6 11.1347C25.62 12.283 26.24 13.7389 26.24 15.5435C26.24 21.8388 22.5 23.2332 18.94 23.6433C19.52 24.1559 20.02 25.1402 20.02 26.6781C20.02 28.8723 20 30.6358 20 31.1894C20 31.6201 20.3 32.1327 21.1 31.9687C27.42 29.795 32 23.6433 32 16.4047C32 7.3411 24.84 0 16 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="text-[15px]">Star us</div>
            {stars && (
              <>
                <div
                  className={classNames(
                    "w-[1px] h-[1.5em] border-r-[1px]",
                    "border-slate-300 dark:border-slate-600",
                    "transition-colors duration-300",
                  )}
                />
                <div className="text-block-13">
                  ⭐️ {stars}
                  <br />
                </div>
              </>
            )}
          </a>

          <ThemeToggle mode={currentMode} onToggle={onToggleTheme} />

          <a
            href="https://learn.winglang.io/"
            target="_blank"
            className={classNames(
              "hidden medium:flex",
              "bg-[#2ad5c1] text-[#03120e] rounded px-[24px] py-[1px] h-[40px]",
              "items-center gap-2 font-sans font-medium text-[14px]",
              "border-[1px] border-[#2ad5c1]",
            )}
          >
            Take a Tour
          </a>
        </div>
      </div>
    </div>
  );
}
