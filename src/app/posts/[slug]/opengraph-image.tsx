import {
  OpenGraphImageResponse,
  openGraphMetadata,
} from "@/components/OpenGraphImage/OpenGraphImage";
import { getArticleForSlug } from "@/utils/content/getArticleForSlug";

// Route segment config
export const { runtime, size, contentType } = openGraphMetadata;

// Image generation
export default async function Image({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const article = await getArticleForSlug(slug);

  return await OpenGraphImageResponse({
    title: article.title,
    description: article.description,
  });
}
