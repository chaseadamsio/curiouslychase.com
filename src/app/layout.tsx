import { getArticles } from "@/utils/content/getArticles";
import "@/styles/globals.css";
import "@/styles/prism-github-dark.css";
import { Providers } from "@/app/providers";

import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const publicSans = Public_Sans({ subsets: ["latin"] });

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
      <link
        rel="preload"
        href="/fonts/BNTillsdale/BNTillsdale.woff"
        as="font"
        type="font/woff"
      />
      <link
        rel="preload"
        href="/fonts/BNTillsdale/BNTillsdale-Bold.woff"
        as="font"
        type="font/woff"
      />
      <link
        rel="preload"
        href="/fonts/BNTillsdale/BNTillsdale.otf"
        as="font"
        type="font/otf"
      />
      <link
        rel="preload"
        href="/fonts/BNTillsdale/BNTillsdale-Bold.otf"
        as="font"
        type="font/otf"
      />
      <link
        rel="preload"
        href="/fonts/PalmerLake/PalmerLakePrint-Regular.woff"
        as="font"
        type="font/woff"
      />
      <link
        rel="preload"
        href="/fonts/PalmerLake/PalmerLakePrint-Regular.woff2"
        as="font"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="/fonts/PalmerLake/PalmerLakePrint-Regular.otf"
        as="font"
        type="font/otf"
      />

      <body className={publicSans.className}>
        <Providers>
          <Header />
          <main className="mx-auto max-w-5xl">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
