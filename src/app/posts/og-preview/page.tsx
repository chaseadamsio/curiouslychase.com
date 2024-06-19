import { PageHeading } from "@/components/PageHeading";
import { PostSummaryList } from "@/components/PostSummaryList";
import { cn } from "@/lib/utils";
import { getArticles } from "@/utils/content/getArticles";

export default async function Posts() {
  const posts = await getArticles();

  return (
    <>
      <div className="pb-4">
        <PageHeading>OG Image Preview</PageHeading>
        <span className="block pt-4 lead">Articles I've Written</span>
      </div>
      <section>
        {posts.slice(101, 150).map((post) => (
          <div className={cn("w-full", "flex", "gap-2")} key={post.slug}>
            <div className={cn("mt-auto", "w-1/2")}>
              <img src={`/posts/${post.slug}/opengraph-image`} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
