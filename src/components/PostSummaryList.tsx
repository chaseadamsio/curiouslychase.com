import { FormattedDate } from "@/components/FormattedDate";
import { Article } from "@/utils/content/getArticles";
import Link from "next/link";

export const PostSummaryList = ({ posts }: { posts: Array<Article> }) => (
  <ul className="p-0 m-0 flex flex-col list-none gap-4">
    {posts.map((post) => (
      <li key={post.slug} className="flex flex-col md:flex-row">
        <span className="pr-4">
          <FormattedDate date={post.pubDate} />
        </span>
        <Link href={`/posts/${post.slug}/`}>{post.title}</Link>
      </li>
    ))}
  </ul>
);
