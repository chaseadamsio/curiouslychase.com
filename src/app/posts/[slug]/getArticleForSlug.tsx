import { getArticle } from "@/utils/content/getArticle";
import { Article } from "@/utils/content/getArticles";
import { getArticlesFilenameToSlugMap } from "@/utils/content/getArticlesFilenameToSlugMap";

// export async function generateMetadata({
//   params: { slug },
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const article = await getArticleForSlug(slug);
//   const maybeOgImage = await getOgImageUrl(article.slug);
//   let imageUrl;
//   if (!maybeOgImage) {
//     imageUrl = `https://curiouslychase.com/apple-touch-icon-180x180.png`;
//   } else {
//     imageUrl = maybeOgImage;
//   }
//   return {
//     title: article.title,
//     openGraph: {
//       images: imageUrl,
//     },
//   };
// }
export async function getArticleForSlug(slug: string) {
  const articlesFilenameToSlugMap = await getArticlesFilenameToSlugMap();

  const articleFilename = articlesFilenameToSlugMap[slug];
  const article: Article = await getArticle(
    articleFilename,
    articlesFilenameToSlugMap
  );

  return article;
}
