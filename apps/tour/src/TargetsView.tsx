import {FC, useEffect, useMemo, useState } from "react";
import { Tab, Tabs } from "@wing-playground/shared/src/Tabs";
import classNames from "classnames";

export interface TargetView {
    title: string;
    Target: FC;
}
export interface TargetsViewProps {
  targets: TargetView[];
  currentTargetId?: string;
  setCurrentTargetId?: (targetId: string) => void;
}
export const TargetsView = ({targets, setCurrentTargetId, currentTargetId}: TargetsViewProps) => {

  const tabs = useMemo(() => {
    const tabs: Tab[] = [];
    targets.forEach((target) => {
      tabs.push({
        id: target.title,
        name: target.title,
        panel: <target.Target />,
      });
    });
    return tabs;
  }, [targets]);

  return (
    <Tabs
      className={classNames(
        "text-white bg-gray-800 border-b border-black",
        "uppercase text-xs font-semibold leading-7 tracking-widest",
        "rounded-t-lg overflow-hidden",
      )}
      tabs={tabs}
      currentTabId={currentTargetId}
      onTabChange={(tabId) => {
        const target = targets.find((target) => target.title === tabId);
        if (!target || !setCurrentTargetId) {
          return;
        }
        setCurrentTargetId(target.title);
      }}
    />
  );
}
