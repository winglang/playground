import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "@wing-playground/shared/src/Tabs";
import classNames from "classnames";

export interface TargetView {
    title: string;
    Target: React.FC;
}
export interface TargetsViewProps {
    targets: TargetView[];
    currentTarget?: TargetView;
    setCurrentTarget?: (target: TargetView) => void;
}
export const TargetsView = ({targets, setCurrentTarget, currentTarget}: TargetsViewProps) => {

    const [tabs, setTabs] = useState<Tab[]>([]);

    useEffect(() => {
      const tabs: Tab[] = [];
      targets.forEach((target) => {
        tabs.push({
          id: target.title,
          name: target.title,
          panel: <target.Target />,
        });
      });
      setTabs(tabs);
    }, [targets]);

    return (
        <Tabs
          className={classNames(
            "text-white bg-gray-800 border-b border-black",
            "uppercase text-xs font-semibold leading-7 tracking-widest",
            "rounded-t-lg overflow-hidden"
          )}
          tabs={tabs}
          currentTabId={currentTarget?.title}
          onTabChange={(tabId) => {
            const target = targets.find((target) => target.title === tabId);
            if (!target || !setCurrentTarget) {
              return;
            }
            setCurrentTarget(target);
          }}
        />
    );
}
