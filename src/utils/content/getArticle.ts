import {
  Article,
  ArticleRaw,
  getArticleContentAndMetadata,
} from "@/utils/content/getArticles";

export const getArticle = async (
  id: string,
  articlesFilenameToSlugMap: Record<string, string>
): Promise<Article> => {
  const post = await getArticleContentAndMetadata(id);

  const article = {
    content: post.content,
    subhead: post.data.subhead ?? null,
    id: post.data.slug,
    slug: post.data.slug,
    filename: post.data.filename,
    featured: !!post.data.featured,
    date: post.data.date ?? Date.now(),
    ...(post.data.thumbnail && { thumbnail: post.data.thumbnail }),
    title: post.data.title,
    image: post.data.image ?? null,
    description: post.data.description ?? null,
    status: post.data.status,
  };

  return await parseContent(article, articlesFilenameToSlugMap);
};

export const parseContent = async (
  article: ArticleRaw,
  articlesFilenameToSlugMap: Record<string, string>
) => {
  return {
    ...article,
    content: article.content,
  };
};
