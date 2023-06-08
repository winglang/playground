import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";

export interface Tab {
  id: string;
  name: string;
  icon?: ReactNode;
  panel?: ReactNode | (() => ReactNode);
  count?: number;
  tabClassName?: string;
}

export interface TabsProps {
  tabs: Tab[];
  currentTabId?: string;
  onTabChange?: (tabId: string) => void;
  renderActiveTabPanelOnly?: boolean;
  tabsWithNotifications?: string[];
  className?: string;
}

export const Tabs = (props: TabsProps) => {
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
                  "relative flex items-center cursor-pointer group",
                  "px-4 py-1 h-full border-b border-transparent",
                   isCurrent && props.tabs.length > 1 && "border-white",
                    !isCurrent && "hover:text-white",
                    tab.tabClassName,
                )}
                onClick={() => setCurrentTabId(tab.id)}
              >
                {tab.icon && <div className="mr-1.5">{tab.icon}</div>}
                <div className="whitespace-nowrap space-x-1">
                  <span>{tab.name}</span>
                  {tab.count !== undefined && (
                    <span className="text-xs">({tab.count})</span>
                  )}
                </div>

                {props.tabsWithNotifications?.includes(tab.id) && (
                  <div className="ml-2">
                    <span className="relative flex h-2 w-2">
                      <span
                        className={classNames(
                          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                          "bg-gray-800"
                        )}
                      />
                      <span
                        className={classNames(
                          "relative inline-flex rounded-full h-2 w-2",
                          "bg-gray-800"
                        )}
                      />
                    </span>
                  </div>
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
