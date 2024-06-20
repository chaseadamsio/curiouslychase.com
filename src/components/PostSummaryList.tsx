import { FormattedDate } from "@/components/FormattedDate";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Article, stages } from "@/utils/content/getArticles";
import Link from "next/link";

export const PostSummaryList = ({ posts }: { posts: Array<Article> }) => (
  <div className="p-0 m-0 flex list-none gap-4 flex-wrap">
    {posts
      .sort((a, b) => {
        if (a.stage && !b.stage) return -1;
        if (b.stage && !a.stage) return 1;
        return 0;
      })
      .map((post) => (
        <div
          className={cn(
            "w-full",
            "flex",
            "gap-2",
            "md:items-center",
            "flex-col",
            "md:flex-row",
            "border-b border-magenta-000 md:border-0 pb-4 md:pb-0"
          )}
          key={post.slug}
        >
          <div
            className={cn(
              "mt-auto",
              "flex",
              "gap-2",
              "items-center",
              "flex-row"
            )}
          >
            <small>
              <FormattedDate slug={post.slug} date={post.pubDate} />
            </small>
            {post.stage ? <StageLabel stage={post.stage} /> : null}
          </div>
          <Link href={`/posts/${post.slug}/`} className="flex flex-col h-full">
            <div>
              <div className={cn("text-base mt-0")}>{post.title}</div>
            </div>
          </Link>
        </div>
      ))}
  </div>
);

const StageLabel = ({ stage }: { stage: keyof typeof stages }) => (
  <div
    className={cn(
      "text-xs rounded-full",
      "p-1 px-2",
      stage === "concept"
        ? "bg-tuna-200 text-tuna-950"
        : stage === "researching"
        ? "bg-blue-300 text-blue-950"
        : stage === "in_progress"
        ? "bg-yellow-300 text-yellow-950"
        : stage === "draft"
        ? "bg-tuna-200 text-tuna-950"
        : stage === "living_document"
        ? "bg-green-300 text-green-950"
        : stage === "stale"
        ? "bg-tuna-900 text-tuna-500"
        : "bg-magenta-950 text-magenta-200"
    )}
  >
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer">
        <span>{stages[stage].name}</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <h4 className="text-magenta-500 mt-0 text-base font-bold">
          {stages[stage].name}
        </h4>
        <p>{stages[stage].description}</p>
      </HoverCardContent>
    </HoverCard>
  </div>
);
