import {FC, useEffect, useMemo, useState } from "react";
import { Tab, Tabs } from "@wing-playground/shared/src/Tabs";
import classNames from "classnames";
import { useTheme } from "./theme-provider";

export interface TargetView {
  id: string;
  title: string;
  Target: FC;
  disabled?: boolean;
  tooltip?: string;
}
export interface TargetsViewProps {
  targets: TargetView[];
  currentTargetId?: string;
  setCurrentTargetId?: (targetId: string) => void;
}
export const TargetsView = ({targets, setCurrentTargetId, currentTargetId}: TargetsViewProps) => {
  const {theme} = useTheme();

  const tabs = useMemo(() => {
    const tabs: Tab[] = [];
    targets.forEach((target) => {
      tabs.push({
        id: target.id,
        name: target.title,
        panel: <target.Target />,
        isDisabled: target.disabled,
        tooltip: target.tooltip,
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
        theme.text1,
        theme.bg3,
        "transition-colors duration-300",
        "border-b",
        theme.border4,
        "transition-colors duration-300",
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
