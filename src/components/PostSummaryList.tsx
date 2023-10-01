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
      <Card className={cn("w-full md:w-[320px]")} key={post.slug}>
        <Link href={`/posts/${post.slug}/`}>
          <CardHeader>
            <CardTitle className={cn("text-xl mt-0")}>{post.title}</CardTitle>
            <CardDescription>
              <p>{post.description}</p>
            </CardDescription>
          </CardHeader>
          <CardFooter className={cn("mt-auto")}>
            <small>
              <FormattedDate date={post.pubDate} />
            </small>
          </CardFooter>
        </Link>
      </Card>
    ))}
  </div>
);
