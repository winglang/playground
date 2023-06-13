import {FC, useEffect, useMemo, useState } from "react";
import { Tab, Tabs } from "@wing-playground/shared/src/Tabs";
import classNames from "classnames";

export interface TargetView {
  id: string;
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
        id: target.id,
        name: target.title,
        panel: <target.Target />,
      });
    });
    return tabs;
  }, [targets]);

  useEffect(() => {
    if (targets.find((target) => target.id === currentTargetId)) {
      return;
    }
    setCurrentTargetId?.(targets[0].id);
  }, [currentTargetId, targets, setCurrentTargetId]);

  return (
    <Tabs
      className={classNames(
        "text-slate-700 bg-slate-300 dark:text-slate-300 dark:bg-slate-700 border-b border-[#2A3A4B]",
        "uppercase text-xs font-semibold leading-7 tracking-widest",
      )}
      tabs={tabs}
      currentTabId={currentTargetId}
      onTabChange={(tabId) => {
        const target = targets.find((target) => target.id === tabId);
        if (!target || !setCurrentTargetId) {
          return;
        }
        setCurrentTargetId(target.id);
      }}
    />
  );
}
