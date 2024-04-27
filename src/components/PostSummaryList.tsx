import { FormattedDate } from "@/components/FormattedDate";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Article } from "@/utils/content/getArticles";
import Link from "next/link";

export const PostSummaryList = ({ posts }: { posts: Array<Article> }) => (
  <div className="p-0 m-0 flex list-none gap-4 flex-wrap">
    {posts.map((post) => (
      <div className={cn("w-full", "flex", "gap-2")} key={post.slug}>
        <div className={cn("mt-auto")}>
          <small>
            <FormattedDate date={post.pubDate} />
          </small>
        </div>
        <Link
          href={`/posts/${post.slug}/`}
          className="flex flex-col h-full hover:bg-accent"
        >
          <div>
            <div className={cn("text-base font-bold mt-0")}>{post.title}</div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);
