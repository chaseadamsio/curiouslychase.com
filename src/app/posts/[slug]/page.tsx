import { PageHeading } from "@/components/PageHeading";
import { getArticlesFilenameToSlugMap } from "@/utils/content/getArticlesFilenameToSlugMap";
import { getSlugFromTitle } from "@/utils/getSlugFromTitle";
import { remarkHeadingSizeRelevelPlugin } from "@/utils/markdown/remark/remarkHeadingSizeRelevel/remarkHeadingSizeRelevel";
import remarkObsidianEnhancedQuotesPlugin from "@/utils/markdown/remark/remarkObsidianEnhancedQuotes/remarkObsidianEnhancedQuotes";
import remarkObsidianImagePlugin from "@/utils/markdown/remark/remarkObsidianImage/remarkObsidianImage";
import rehypeTOC from "@jsdevtools/rehype-toc";
import rehypePrism from "@mapbox/rehype-prism";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGFM from "remark-gfm";
import remarkWikiLink from "remark-wiki-link";
import { getArticleForSlug } from "../../../utils/content/getArticleForSlug";
import { GetStaticProps, GetStaticPropsContext, Metadata } from "next";
import { getHostname } from "@/utils/getHostname";
import { ShareLinkOnTwitter } from "@/components/ShareLink";
import { getArticle } from "@/utils/content/getArticle";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleForSlug(slug);

  const hostname = getHostname();

  return {
    title: article.title,
    description: article.description,
    metadataBase: hostname,
    openGraph: {
      description: article.description,
      title: article.title,
      type: "article",
    },
  };
}

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const articlesFilenameToSlugMap = await getArticlesFilenameToSlugMap();
  const article = await getArticleForSlug(slug);

  return (
    <>
      <PageHeading>{article.title}</PageHeading>
      <div className="article">
        <ShareLinkOnTwitter title={article.title} />
        <MDXRemote
          source={article.content}
          options={{
            mdxOptions: {
              remarkPlugins: [
                remarkGFM,
                [
                  remarkWikiLink,
                  {
                    aliasDivider: "|",
                    hrefTemplate: (permalink: string) => {
                      const slug = getSlugFromTitle(
                        permalink.replace(/_/g, "-")
                      );
                      if (slug.startsWith("#")) {
                        return slug;
                      }
                      if (!articlesFilenameToSlugMap[slug]) {
                        return `#unpublished?slug=${slug}`;
                      }
                      return `/posts/${slug}`;
                    },
                  },
                ],
                [remarkObsidianImagePlugin, { permalinks: [] }],
                remarkObsidianEnhancedQuotesPlugin,
                remarkHeadingSizeRelevelPlugin,
              ],
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "append" }],
                [rehypePrism, { alias: { javascript: ["dataviewjs"] } }],
                rehypeTOC,
              ],
            },
          }}
        />
        <ShareLinkOnTwitter title={article.title} />
      </div>
    </>
  );
}
