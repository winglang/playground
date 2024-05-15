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
      if (!number) {
        return "";
      }
      return (Math.round(number / 100) * 100).toString();
    };
    const stars = watchersCount ? round(Number(watchersCount)) : "";
    const starsK =
      stars.length > 3
        ? `${stars.slice(0, -3)}.${stars.slice(-3, -2)}k`
        : stars;
    setStars(starsK);
  }, [watchersCount]);

  const url = new URL(window.location.href);
  const isFullScreen = Number(url.searchParams.get("full"));

  return (
    <div className={isFullScreen ? "hidden" : "flex"}>
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
            href="https://t.winglang.io/discord"
            className="flex items-center justify-center h-[26px] pb-[2px]"
          >
            <div className="h-[24px] w-[24px] leading-[20px]">
              <svg
                className="overflow-hidden"
                width="100%"
                height="100%"
                viewBox="0 0 127.14 96.36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>

          <a
            href="https://github.com/winglang/wing"
            target="_blank"
            className={classNames(
              "flex gap-x-[8px] rounded-[4px] items-center font-orbiter text-[15px] py-[8px] px-[16px]",
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
              "items-center gap-2 font-orbiter font-medium text-[14px]",
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
