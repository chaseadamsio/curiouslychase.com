import { PageHeading } from "@/components/PageHeading";
import { ShareLinkOnTwitter } from "@/components/ShareLink";
import { StageLabel } from "@/components/StageLabel";
import { TableOfContents } from "@/components/toc";
import { getArticlesFilenameToSlugMap } from "@/utils/content/getArticlesFilenameToSlugMap";
import { getHostname } from "@/utils/getHostname";
import { getSlugFromTitle } from "@/utils/getSlugFromTitle";
import { remarkHeadingSizeRelevelPlugin } from "@/utils/markdown/remark/remarkHeadingSizeRelevel/remarkHeadingSizeRelevel";
import remarkObsidianEnhancedQuotesPlugin from "@/utils/markdown/remark/remarkObsidianEnhancedQuotes/remarkObsidianEnhancedQuotes";
import remarkObsidianImagePlugin from "@/utils/markdown/remark/remarkObsidianImage/remarkObsidianImage";
import rehypePrism from "@mapbox/rehype-prism";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGFM from "remark-gfm";
import remarkWikiLink from "remark-wiki-link";
import { Blockquote } from "../../../components/Blockquote";
import { getArticleForSlug } from "../../../utils/content/getArticleForSlug";
import { IncompleteArticle } from "./IncompleteArticle";
import plumb_card from "./plumb_card.png";

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
    twitter: {
      card: "summary_large_image",
    },
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
    <div className="flex gap-4 flex-col md:flex-row">
      <div className="max-w-full md:max-w-xl lg:max-w-3xl">
        <PageHeading>{article.title}</PageHeading>
        <div className="pt-2 flex">
          <StageLabel stage={article.stage} />
        </div>
        <div>
          {article.description ? (
            <span className="block pt-2 lead">{article.description}</span>
          ) : null}
          <div className="relative py-6 lg:gap-10 lg:py-8 ">
            <div className="article">
              <MDXRemote
                source={article.content}
                components={{
                  blockquote: Blockquote,
                }}
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
                    ],
                  },
                }}
              />
            </div>
            {!(
              article.stage === "living_document" || article.stage === "stable"
            ) ? (
              <IncompleteArticle slug={slug} />
            ) : null}
            {Object.keys(article.toc).length > 0 ? (
              <div className="sticky bottom-3 z-10">
                <div>
                  <TableOfContents toc={article.toc} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="sticky top-10 flex flex-col gap-4 justify-start">
          <ShareLinkOnTwitter title={article.title} />
          <a
            href="https://useplumb.com"
            className="block hover:text-purple-500 dark:hover:text-purple-200"
          >
            <Image
              className=" rounded-md border"
              src={plumb_card}
              alt="Plumb: An AI visual pipeline builder"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <span className="text-sm block pt-1 text-center">
              Check out Plumb
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
