"use client";

import { ThemeProvider } from "next-themes";
import { PostHogProvider } from "posthog-js/react";
import { posthog } from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";

import { FC, PropsWithChildren, useEffect } from "react";

if (typeof window !== "undefined") {
  posthog.init("phc_tI9exCHyiVIHBZw0UpaU1AQvatZCnJ26BzeBsH6Iwl5", {
    api_host: "https://app.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.opt_out_capturing();
    },
  });
}
export function PostHogPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider>{children}</ThemeProvider>
    </PostHogProvider>
  );
};

export { Providers };
