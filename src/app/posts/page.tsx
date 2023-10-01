import { PageHeading } from "@/components/PageHeading";
import { PostSummaryList } from "@/components/PostSummaryList";
import { getArticles } from "@/utils/content/getArticles";

export default async function Posts() {
  const posts = await getArticles();

  return (
    <>
      <div className="pb-4">
        <PageHeading>The Blog</PageHeading>
        <span className="block pt-4 lead">Articles I've Written</span>
      </div>
      <section>
        <PostSummaryList posts={posts} />
      </section>
    </>
  );
}
