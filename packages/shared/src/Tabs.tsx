import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export interface Tab {
  id: string;
  name: string;
  icon?: ReactNode;
  panel?: ReactNode | (() => ReactNode);
  count?: number;
  tabClassName?: string;
  isDisabled?: boolean;
  tooltip?: string;
}

export interface TabsProps {
  tabs: Tab[];
  currentTabId?: string;
  onTabChange?: (tabId: string) => void;
  renderActiveTabPanelOnly?: boolean;
  className?: string;
}

export const Tabs = (props: TabsProps) => {
  const { theme } = useTheme();
  const [currentTabId, setCurrentTabId] = useState(props.currentTabId);

  useEffect(() => {
    if (props.currentTabId) {
      setCurrentTabId(props.currentTabId);
    }
  }, [props]);

  useEffect(() => {
    if (props.onTabChange && currentTabId) {
      props.onTabChange(currentTabId);
    }
  }, [currentTabId]);

  return (
    <div className="h-full flex flex-col w-full">
      <div
        className={classNames(
          "relative w-full text-sm select-none",
          props.className,
        )}
      >
        <div
          className={classNames(
            "flex gap-[1px] h-full",
          )}
        >
          {props.tabs.map((tab) => {
            const isCurrent = tab.id === currentTabId;
            return (
              <div
                key={tab.id}
                className={classNames(
                  !tab.isDisabled ? theme.text1 : theme.text2,
                  !tab.isDisabled && theme.text3Hover,
                  !tab.isDisabled && "cursor-pointer",
                  "relative flex items-center group",
                  "px-4 py-1 h-full border-b",
                  isCurrent && props.tabs.length > 1 && "border-gray-400 dark:border-white",
                  (!isCurrent || props.tabs.length === 1) && "border-transparent",
                  tab.tabClassName,
                )}
                onClick={() => {
                  if (tab.isDisabled) {
                    return;
                  }
                  setCurrentTabId(tab.id)
                }}
              >
                {tab.icon && <div className="mr-1.5">{tab.icon}</div>}
                <div className="whitespace-nowrap space-x-1">
                  <span>{tab.name}</span>
                  {tab.count !== undefined && (
                    <span className="text-xs">({tab.count})</span>
                  )}
                </div>
                {tab.tooltip && (
                    <span className={classNames(
                        "after:content-[''] after:absolute",
                        "after:top-full after:left-1/2 after:ml-[-5px]",
                        "after:border-[5px] after:border:solid after:border-t-gray-800",
                        "after:border-r-transparent after:border-b-transparent after:border-l-transparent",
                        "pointer-events-none",
                        "absolute -top-8 w-max px-2 py-1",
                        "rounded bg-gray-800 text-sm font-medium text-gray-50",
                        "opacity-0 shadow transition-opacity group-hover:opacity-80"
                    )}>
                      {tab.tooltip}
                    </span>
                  )}
              </div>
            );
          })}
        </div>
      </div>

      {props.tabs.map((tab) => {
        const isCurrent = tab.id === currentTabId;
        if (props.renderActiveTabPanelOnly && !isCurrent) {
          return;
        }

        return (
          <div
            key={tab.id}
            className={classNames("flex flex-col", {
              "invisible overflow-hidden h-0": !isCurrent,
              grow: isCurrent,
            })}
          >
            {typeof tab.panel === "function" ? tab.panel() : tab.panel}
          </div>
        );
      })}
    </div>
  );
};
