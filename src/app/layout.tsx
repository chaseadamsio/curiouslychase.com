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
