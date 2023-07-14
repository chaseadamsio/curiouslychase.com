"use client";
import type { FC, JSX, PropsWithChildren, SyntheticEvent } from "react";
import { useEffect, useState } from "react";

type MarkdownHeading = {
  slug: string;
  text: string;
  depth: number;
};

export interface TocItem extends MarkdownHeading {
  children: TocItem[];
}

interface Props {
  toc: TocItem[];
  labels: {
    onThisPage: string;
  };
  isMobile?: boolean;
}

export const TableOfContents: FC<Props> = ({ toc = [], labels, isMobile }) => {
  const [currentHeading, setCurrentHeading] = useState({
    slug: toc[0].slug,
    text: toc[0].text,
  });
  const [open, setOpen] = useState(!isMobile);
  const onThisPageID = "on-this-page-heading";

  const Container: FC<PropsWithChildren> = ({ children }) => {
    return isMobile ? (
      <details
        {...{ open }}
        onToggle={(e) => setOpen(e.currentTarget.open)}
        className="toc-mobile-container"
      >
        {children}
      </details>
    ) : (
      <>{children}</>
    );
  };

  const HeadingContainer = ({ children }: { children: JSX.Element }) => {
    return isMobile ? (
      <summary className="toc-mobile-header">
        <div className="toc-mobile-header-content">
          <div className="toc-toggle">
            {children}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 1 16 16"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </div>
          {!open && currentHeading?.slug !== "overview" && (
            <span className="toc-current-heading">{currentHeading?.text}</span>
          )}
        </div>
      </summary>
    ) : (
      children
    );
  };

  useEffect(() => {
    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          if (id === onThisPageID) continue;
          setCurrentHeading({
            slug: entry.target.id,
            text: entry.target.textContent || "",
          });
          break;
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: "-100px 0% -66%",
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions
    );

    // Observe all the headings in the main page content.
    document
      .querySelectorAll("article :is(h1,h2,h3)")
      .forEach((h) => headingsObserver.observe(h));

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect();
  }, []);

  const onLinkClick = (e: SyntheticEvent) => {
    if (!isMobile) return;
    setOpen(false);
    setCurrentHeading({
      slug: e.currentTarget.getAttribute("href")!.replace("#", ""),
      text: e.currentTarget.textContent || "",
    });
  };

  const TableOfContentsItem = ({ heading }: { heading: TocItem }) => {
    const { depth, slug, text, children } = heading;
    return (
      <li>
        <a
          className={`header-link depth-${depth} ${
            currentHeading.slug === slug ? "current-header-link" : ""
          }`.trim()}
          href={`#${slug}`}
          onClick={onLinkClick}
        >
          {unescape(text)}
        </a>
        {children.length > 0 ? (
          <ul className="pl-4">
            {children.map((heading) => (
              <TableOfContentsItem key={heading.slug} heading={heading} />
            ))}
          </ul>
        ) : null}
      </li>
    );
  };

  return (
    <Container>
      <HeadingContainer>
        <h2 className="heading uppercase text-xs" id={onThisPageID}>
          {labels.onThisPage}
        </h2>
      </HeadingContainer>
      <ul className="toc-root pl-0">
        {toc.map((heading2) => (
          <TableOfContentsItem key={heading2.slug} heading={heading2} />
        ))}
      </ul>
    </Container>
  );
};

function diveChildren(item: TocItem, depth: number): TocItem[] {
  if (depth === 1) {
    return item.children;
  } else {
    // e.g., 2
    return diveChildren(item.children[item.children.length - 1], depth - 1);
  }
}

export default function generateToc(
  headings: MarkdownHeading[],
  title = "Overview"
) {
  const overview = { depth: 2, slug: "overview", text: title };
  headings = [
    overview,
    ...headings.filter(({ depth }) => depth > 1 && depth < 4),
  ];
  const toc: Array<TocItem> = [];

  for (const heading of headings) {
    if (toc.length === 0) {
      toc.push({
        ...heading,
        children: [],
      });
    } else {
      const lastItemInToc = toc[toc.length - 1];
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`);
      }
      if (heading.depth === lastItemInToc.depth) {
        // same depth
        toc.push({
          ...heading,
          children: [],
        });
      } else {
        // higher depth
        // push into children, or children' children alike
        const gap = heading.depth - lastItemInToc.depth;
        const target = diveChildren(lastItemInToc, gap);
        target.push({
          ...heading,
          children: [],
        });
      }
    }
  }
  return toc;
}
