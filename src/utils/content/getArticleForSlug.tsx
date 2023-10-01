import { getTableOfContents } from "@/lib/toc";
import { getArticle } from "@/utils/content/getArticle";
import { Article } from "@/utils/content/getArticles";
import { getArticlesFilenameToSlugMap } from "@/utils/content/getArticlesFilenameToSlugMap";

export async function getArticleForSlug(slug: string) {
  const articlesFilenameToSlugMap = await getArticlesFilenameToSlugMap();

  const articleFilename = articlesFilenameToSlugMap[slug];
  const article: Article = await getArticle(
    articleFilename,
    articlesFilenameToSlugMap
  );

  const toc = await getTableOfContents(article.content);

  return { ...article, toc };
}
