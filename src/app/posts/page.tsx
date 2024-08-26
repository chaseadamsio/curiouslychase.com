import { PageHeading } from "@/components/PageHeading";
import { PostSummaryList } from "@/components/PostSummaryList";
import { getArticles } from "@/utils/content/getArticles";
import { getHostname } from "@/utils/getHostname";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const hostname = getHostname();
  return {
    title: "The Blog",
    description: "The Blog",
    metadataBase: hostname,
    alternates: {
      canonical: "/posts",
    },
  };
}

export default async function Posts() {
  const posts = await getArticles();

  return (
    <>
      <div className="pb-4">
        <PageHeading>The Blog</PageHeading>
      </div>
      <section>
        <PostSummaryList posts={posts} displayFacets={true} />
      </section>
    </>
  );
}
