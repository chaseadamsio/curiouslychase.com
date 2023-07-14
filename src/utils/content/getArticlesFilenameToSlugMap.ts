import { getAllFiles } from "@/utils/content/getAllFiles";
import { postsDirectory } from "@/utils/content/getArticles";
import { getSlugFromTitle } from "@/utils/getSlugFromTitle";
import { getTitleFromPath } from "@/utils/getTitleFromPath";

export async function getArticlesFilenameToSlugMap(directory = postsDirectory) {
  const filenames = await getAllFiles(directory);
  return filenames.reduce((acc, filename) => {
    const slug = getSlugFromTitle(getTitleFromPath(filename));
    return {
      ...acc,
      [slug]: filename,
    };
  }, {} as Record<string, string>);
}
