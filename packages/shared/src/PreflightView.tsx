import {
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from '@wing-playground/shared/src/theme-provider';
import { throttle } from 'lodash';
import classNames from "classnames";
import { Fragment, useEffect, useRef, useState } from "react";

interface LogEntryProps {
  log: string;
}

export const formatAbsolutePaths = (
  error: string,
  className: string,
  expanded: boolean = false,
) => {
  return error
    .replaceAll(
      /\B((?:[a-z]:)?[/\\]\S+):(\d+):(\d+)/gi,
      (match, path, line, column) => {
        return `<a class="${className}" onclick="event.stopPropagation()" href="vscode://file/${path}:${line}:${column}">${match}</a>`;
      },
    )
    .replaceAll(/(\r\n|\n|\r)/gm, expanded ? "<br />" : "\n");
};

const LogEntryRow = ({
  log,
}: LogEntryProps) => {
  const { theme } = useTheme();

  const [expanded, setExpanded] = useState(false);
  const expandableRef = useRef<HTMLElement>(null);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const computeOverflows = throttle(() => {
      const element = expandableRef.current?.parentNode as HTMLElement;
      if (!element) {
        return;
      }
      setOverflows(element.offsetWidth < element.scrollWidth);
    }, 500);

    computeOverflows();

    window.addEventListener("resize", computeOverflows);
    return () => {
      window.removeEventListener("resize", computeOverflows);
    };
  }, []);
  const [canBeExpanded, setCanBeExpanded] = useState(false);
  useEffect(() => {
    setCanBeExpanded(overflows || expanded);
  }, [expanded, overflows]);

  const ChevronIcon = expanded ? ChevronDownIcon : ChevronRightIcon;

  useEffect(() => {
    if (expandableRef.current === null) {
      return;
    }
    const html = formatAbsolutePaths(
      log,
      "text-sky-500 underline hover:text-sky-800",
      expanded,
    );
    expandableRef.current.innerHTML = html;
  }, [log, expanded]);

  return (
    <Fragment>
      <div
        className={classNames(
          "group w-full flex",
          "flex min-w-0",
          "justify-between",
          theme.border4,
          theme.bg2Hover,
          "border-t text-2xs py-0.5 px-2",
          theme.text1,
          theme.bg4,
        )}
      >
        <div
          className={classNames(
            "cursor-default select-text min-w-0 text-left grow ml-2",
          )}
        >
          {canBeExpanded && (
            <button
              onClick={() => {
                setExpanded((expanded) => !expanded);
              }}
            >
              <ChevronIcon
                className={classNames(
                  "w-3.5 h-3.5",
                  "mr-0.5 inline-block -mt-0.5",
                  theme.text1,
                  theme.text1Hover,
                )}
              />
            </button>
          )}
          <span
            className={classNames(
              theme.text2,
            )}
            ref={expandableRef}
          />
        </div>
      </div>
    </Fragment>
  );
};

export interface PreflightView {
  stdout?: string;
}

export const PreflightView = ({
  stdout,
}: PreflightView) => {
  const { theme } = useTheme();
  const lines = stdout ? stdout.split("\n") : [];

  return (
    <div className="w-full gap-x-2 text-2xs font-mono">
      {lines.map((log, i) => (
        <LogEntryRow
          key={`${i}`}
          log={log}
        />
      ))}
      {lines.length === 0 && (
        <div className={classNames(theme.text1, "text-2xs px-2")}>No logs</div>
      )}
    </div>
  );
};
