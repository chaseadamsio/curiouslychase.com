import { OnlineFrequent } from "@/components/Content/OnlineFrequent";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-8 pt-4 border-t-2 border-slate-200 dark:border-slate-800 gap-4 max-w-5xl mx-auto flex flex-col md:flex-row">
      <div className="w-3/4">
        <h3 className="uppercase font-subtitle text-lg">Online</h3>
        <OnlineFrequent />
      </div>
      <div className="w-1/4">
        <h3 className="uppercase font-subtitle text-lg">Sitemap</h3>
        <ul className="p-0 m-0 pt-4 md:pt-0 list-none">
          <li>
            <Link href="/sitemap.xml">Sitemap</Link>
          </li>
          <li>
            <Link href="/rss.xml">RSS Feed</Link>
          </li>
          <li>
            <Link href="/about/">About Me</Link>
          </li>
          <li>
            <Link href="/posts/">Blog</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
