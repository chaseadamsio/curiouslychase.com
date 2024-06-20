import { stages } from "./stages";

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
