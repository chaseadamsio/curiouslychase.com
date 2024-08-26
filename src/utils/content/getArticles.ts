import { getAllFiles } from "@/utils/content/getAllFiles";
import { getSlugFromTitle } from "@/utils/getSlugFromTitle";
import { getTitleFromPath } from "@/utils/getTitleFromPath";
import { format, isBefore, parseISO } from "date-fns";
import { readFileSync, statSync } from "fs";
import matter from "gray-matter";
import path from "path";
import slugify from "slugify";
import { Article } from "./Article";

export const postsDirectory = path.join(process.cwd(), "content", "posts");

export const getArticles = async (args?: {
  limit?: number;
  directory?: string;
}): Promise<Array<Article>> => {
  const directory = args?.directory ?? postsDirectory;

  const allFiles = await getAllFiles(directory);

  const posts = await Promise.all(allFiles.map(getArticleContentAndMetadata));

  let allPosts = posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  // if (process.env.NODE_ENV !== "development") {
  allPosts = allPosts
    .filter((p) => isBefore(parseISO(p.data.pubDate.valueOf()), new Date()))
    .filter((p) => p.data.status.toLowerCase() === "published");
  // }

  const convertedPosts = await Promise.all(
    allPosts.map((post) => ({
      content: post.content,
      subhead: post.data.subhead ?? null,
      id: post.data.slug,
      slug: post.data.slug,
      filename: post.data.filename,
      featured: !!post.data.featured,
      date: post.data.date ?? Date.now(),
      pubDate: post.data.pubDate ?? Date.now(),
      updatedDate:
        post.data.updatedDate ??
        post.data.pubDate ??
        post.data.date ??
        Date.now(),
      ...(post.data.thumbnail && { thumbnail: post.data.thumbnail }),
      title: post.data.title,
      stage: post.data.stage,
      image: post.data.image ?? null,
      description: post.data.description ?? null,
      status: post.data.status,
    }))
  );

  if (args?.limit) {
    return convertedPosts.slice(0, args.limit);
  }

  return convertedPosts;
};

export const getArticlesCount = async (args?: {
  directory?: string;
}): Promise<number> => {
  const directory = args?.directory ?? postsDirectory;
  const allFiles = await getAllFiles(directory);
  return allFiles.length;
};

export const getArticleContentAndMetadata = async (
  fullPath: string
): Promise<matter.GrayMatterFile<string>> => {
  const title = getTitleFromPath(fullPath);
  const slug = getSlugFromTitle(title);

  let fileContents, fileMeta;
  try {
    fileContents = readFileSync(fullPath, "utf8");
    fileMeta = statSync(fullPath);
  } catch (err) {
    try {
      fullPath = path.join(postsDirectory, `${title}.md`);
      fileContents = readFileSync(fullPath, "utf8");
      fileMeta = statSync(fullPath);
    } catch (err) {
      throw new Error(err as string);
    }
  }

  const matterResult = matter(fileContents);

  let tags = [];
  if (matterResult.data.tags) {
    tags = matterResult.data.tags.map((tag: string) => ({
      text: tag,
      slug: `/tags/${slugify(tag.toLowerCase())}`,
    }));
  }

  return {
    ...matterResult,
    data: {
      ...matterResult.data,
      thumbnail: matterResult.data.thumbnail,
      pubDate: matterResult.data.pubDate ?? matterResult.data.date,
      date:
        matterResult.data.date ??
        format(fileMeta.ctime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      filename: fullPath,
      slug,
      tags,
      stage: matterResult.data.stage,
      title: matterResult.data.title ?? title,
    },
  };
};
