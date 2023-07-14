import { PageHeading } from "@/components/PageHeading";
import { PostSummaryList } from "@/components/PostSummaryList";
import { getArticles } from "@/utils/content/getArticles";

export default async function Posts() {
  const posts = await getArticles();

  return (
    <>
      <div className="pb-4">
        <PageHeading>The Blog</PageHeading>
        <span className="pt-4 text-3xl font-subtitle">
          Articles I've Written
        </span>
      </div>
      <section>
        <PostSummaryList posts={posts} />
      </section>
    </>
  );
}
