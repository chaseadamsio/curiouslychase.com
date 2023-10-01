import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import {
  BlockquoteHTMLAttributes,
  Component,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

type Callout = "info";

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
        calloutTitle ? "flex flex-col" : "flex flex-row",
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
          {getCalloutIcon(calloutType)} {calloutTitle}
        </p>
      ) : null}
      {children}
    </blockquote>
  );
};
