import { PostSummaryList } from "@/components/PostSummaryList";
import { Button } from "@/components/ui/button";
import { getArticles, getArticlesCount } from "@/utils/content/getArticles";
import Link from "next/link";

export const Writing = async () => {
  const posts = await getArticles({ limit: 6 });

  const count = await getArticlesCount();
  return (
    <main className="mt-12 max-w-5xl mx-auto">
      <div className="pb-4">
        <h2 className="my-0 text-3xl font-medium">What I'm Writing</h2>
      </div>
      <section>
        <PostSummaryList posts={posts} />

        <div className="mt-8 flex justify-center">
          <Button variant={"primary"}>
            <Link href="/posts/" className="text-md">
              See all {count} posts
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};
