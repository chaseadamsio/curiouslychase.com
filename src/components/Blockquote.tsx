import { cn } from "@/lib/utils";
import { AlertTriangle, FileWarning, Flame, Info, Zap } from "lucide-react";
import {
  BlockquoteHTMLAttributes,
  Component,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

import { startCase, toLower } from "lodash";

type Callout = "info" | "warning" | "tip" | "danger";

const getCalloutBackgroundTW = (calloutType?: Callout) => {
  switch (calloutType) {
    case "info":
      return `bg-slate-100 dark:bg-slate-900`;
    default:
      return `bg-slate-100 dark:bg-slate-900`;
  }
};
const getCalloutTitleTW = (calloutType?: Callout) => {
  switch (calloutType) {
    case "info":
      return `text-blue-600 dark:text-blue-400`;
    case "tip":
      return `text-cyan-600 dark:text-cyan-400`;
    case "warning":
      return `text-orange-600 dark:text-orange-400`;
    case "danger":
      return `text-red-600 dark:text-red-400`;
    default:
      return `text-slate-900`;
  }
};

const getCalloutIcon = (calloutType?: Callout) => {
  switch (calloutType) {
    case "info":
      return (
        <span>
          <Info width={"20px"} />
        </span>
      );
    case "tip":
      return (
        <span>
          <Flame width={"20px"} />
        </span>
      );
    case "warning":
      return (
        <span>
          <AlertTriangle width={"20px"} />
        </span>
      );
    case "danger":
      return (
        <span>
          <Zap width={"20px"} />
        </span>
      );
    default:
      return null;
  }
};
export const Blockquote: FC<
  PropsWithChildren<
    DetailedHTMLProps<
      BlockquoteHTMLAttributes<HTMLQuoteElement>,
      HTMLQuoteElement
    > & {
      calloutType?: Callout;
      calloutTitle?: string;
    }
  >
> = ({ children, calloutType, calloutTitle, ...rest }) => {
  return (
    <blockquote
      {...rest}
      className={cn(
        rest.className,
        getCalloutBackgroundTW(calloutType),
        "flex",
        "flex-col",
        "gap-2"
      )}
    >
      {calloutType ? (
        <p
          className={cn(
            "font-bold",
            getCalloutTitleTW(calloutType),
            "flex gap-1 items-center"
          )}
        >
          {getCalloutIcon(calloutType)}{" "}
          <span>
            {calloutTitle ? calloutTitle : startCase(toLower(calloutType))}
          </span>
        </p>
      ) : null}
      {children}
    </blockquote>
  );
};
