import { getAllFiles } from "@/utils/content/getAllFiles";
import { getSlugFromTitle } from "@/utils/getSlugFromTitle";
import { getTitleFromPath } from "@/utils/getTitleFromPath";
import { readFileSync, statSync } from "fs";
import matter from "gray-matter";
import { ElementContent } from "hast";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import path from "path";
import slugify from "slugify";
import { format, isBefore, parseISO } from "date-fns";

export const stages = {
  concept: {
    name: "Concept",
    description: "Initial idea or concept",
  },
  researching: {
    name: "Researching",
    description: "Requires research",
  },
  in_progress: {
    name: "In Progress",
    description: "Initial draft, needs significant work",
  },
  draft: {
    name: "In Review",
    description: "Draft, needs review and revision",
  },
  stable: {
    name: "Stable",
    description: "Stable version, but open to future edits",
  },
  living_document: {
    name: "Living Document",
    description: "Continuously revised and updated",
  },
  stale: {
    name: "Stale",
    description: "Outdated, needs review and revision",
  },
};

export type ArticleMeta = {
  id: string;
  slug: string;
  filename: string;
  stage: keyof typeof stages;
  path: string;
  featured?: boolean;
  description: string;
  title: string;
  status: string;
  thumbnail?: string;
  summary?: string;
  subhead?: string;
  image?: string;
  date: string;
  pubDate: string;
  updatedDate: string;
};

export type ArticleRaw = ArticleMeta & { content: string };

export type Article = ArticleMeta & {
  content: string;
};

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

  if (process.env.NODE_ENV !== "development") {
    allPosts = allPosts
      .filter((p) => isBefore(parseISO(p.data.pubDate.valueOf()), new Date()))
      .filter((p) => p.data.status.toLowerCase() === "published");
  }

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
      updatedDate: post.data.updatedDate ?? Date.now(),
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
