// @ts-nocheck
"use client";

import * as React from "react";

import { TableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface TocProps {
  toc: TableOfContents;
}

export function TableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc]
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  const flattenItems = (
    parentItem: TableOfContents,
    items: TableOfContents[]
  ) => {
    return [
      parentItem,
      ...items.map((item) => {
        if (item.items) {
          return flattenItems(item, item.items);
        }
        return { ...item, title: `${parentItem.title} > ${item.title}` };
      }),
    ];
  };

  const flattenedItems = React.useMemo(() => {
    return toc.items
      .map((item) => {
        if (item.items) {
          return flattenItems(item, item.items);
        }
        return item;
      })
      .flat();
  }, [toc]);

  const [currentHeading, setCurrentHeading] = React.useState(
    flattenedItems.find((item) => item.url === `#${itemIds[0]}`)?.title
  );

  React.useEffect(() => {
    if (!activeHeading) return;
    setCurrentHeading(
      flattenedItems.find((item) => item.url === `#${activeHeading}`)?.title
    );
  }, [activeHeading]);

  const [open, setOpen] = React.useState(false);

  const setCurrentHeadingAndCollapse = React.useCallback(
    (heading: string) => {
      setCurrentHeading(heading);
      setOpen(false);
    },
    [setCurrentHeading, setOpen]
  );

  if (!toc?.items || !mounted) {
    return null;
  }

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn(
        "inline-flex",
        "z-100 bg-fixed bg-gradient-to-b from-bg-from to-bg-to pl-6 pr-8 py-3 text-sm border border-magenta-900",
        open ? "rounded-md flex-col w-full p-3" : "rounded-full"
      )}
    >
      <CollapsibleTrigger className={cn(open ? "hidden" : "flex flex-col")}>
        <span className="uppercase text-xs text-tuna-600">Section</span>
        <span>{currentHeading}</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Tree
          tree={toc}
          activeItem={activeHeading}
          setCurrentHeading={setCurrentHeadingAndCollapse}
        />
      </CollapsibleContent>
    </Collapsible>
  );
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem?: string;
  setCurrentHeading: (heading: string) => void;
}

function Tree({ tree, level = 1, activeItem, setCurrentHeading }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0")}>
            <a
              href={item.url}
              onClick={() => setCurrentHeading(item.title)}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                item.url === `#${activeItem}`
                  ? "font-bold text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree
                tree={item}
                level={level + 1}
                activeItem={activeItem}
                setCurrentHeading={setCurrentHeading}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
