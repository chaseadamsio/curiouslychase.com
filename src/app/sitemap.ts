import { getArticles } from "@/utils/content/getArticles";
import { MetadataRoute } from "next";

const HOSTNAME = "https://curiouslychase.com";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();
  return [
    {
      url: HOSTNAME,
      lastModified: new Date(),
    },
    {
      url: `${HOSTNAME}/about/`,
      lastModified: new Date(),
    },
    {
      url: `${HOSTNAME}/posts/`,
      lastModified: new Date(),
    },
    ...articles.map((article) => ({
      url: `${HOSTNAME}/posts/${article.slug}/`,
      lastModified: new Date(article.updatedDate),
    })),
  ];
}
