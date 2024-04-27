import { cn } from "@/lib/utils";
import { AlertTriangle, FileWarning, Flame, Info, Zap } from "lucide-react";
import React, {
  BlockquoteHTMLAttributes,
  Component,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

import { startCase, toLower } from "lodash";
import { FunctionComponent } from "mdx/types";

type Callout = "info" | "warning" | "tip" | "danger";

const getCalloutBackgroundTW = (calloutType?: Callout) => {
  switch (calloutType) {
    case "info":
      return `bg-callout border border-border`;
    default:
      return `bg-callout border border-border`;
  }
};
const getCalloutTitleTW = (calloutType?: Callout) => {
  switch (calloutType) {
    case "info":
      return `text-info-foreground`;
    case "tip":
      return `text-tip-foreground`;
    case "warning":
      return `text-warning-foreground`;
    case "danger":
      return `text-danger-foreground`;
    default:
      return `text-foreground`;
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
export const Blockquote: FunctionComponent<
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
