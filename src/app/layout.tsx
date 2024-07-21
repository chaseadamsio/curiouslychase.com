import { Providers } from "@/app/providers";
import "@/styles/globals.css";
import "@/styles/prism-github-dark.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curiously Chase",
  description: "The personal website of Chase Adams",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/OverusedGrotesk-VF.woff2"
          as="font"
          type="font/woff2"
        />
      </head>
      <body className={cn("")}>
        <div
          className={cn(
            "min-h-screen",
            "flex flex-col",
            "max-w-5xl mx-auto",
            "px-4"
          )}
        >
          <Providers>
            <div>
              <Header />
            </div>
            <main className="pt-8 w-full lg:mx-auto lg:max-w-5xl">
              {children}
            </main>
            <div className="mt-auto">
              <Footer />
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
