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

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        themes={["dark", "light", "vibes-light", "vibes-dark"]}
      >
        {children}
      </ThemeProvider>
    </PostHogProvider>
  );
};

export { Providers };
