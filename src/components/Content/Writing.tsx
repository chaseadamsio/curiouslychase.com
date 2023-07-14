import { PostSummaryList } from "@/components/PostSummaryList";
import { getArticles, getArticlesCount } from "@/utils/content/getArticles";

export const Writing = async () => {
  const posts = await getArticles({ limit: 6 });

  const count = await getArticlesCount();
  return (
    <main className="mt-12 max-w-5xl mx-auto">
      <div className="pb-4">
        <h2 className="uppercase my-0 text-3xl font-display">
          What I'm Writing
        </h2>
      </div>
      <section>
        <PostSummaryList posts={posts} />

        <div className="mt-8">
          <a href="/posts/" className="text-md">
            See all {count} posts
          </a>
        </div>
      </section>
    </main>
  );
};
