import { getCollection } from "astro:content";
import { isBefore, parseISO } from "date-fns";

export const getPosts = async (props: { limit?: number } = {}) => {
  let allPosts = await getCollection("posts");

  if (!import.meta.env.DEV) {
    allPosts = allPosts
      .filter((p) => isBefore(parseISO(p.data.pubDate.valueOf()), new Date()))
      .filter((p) => p.data.status.toLowerCase() === "published");
  }

  const posts = allPosts.sort(
    (a, b) =>
      // @ts-ignore
      new Date(b.data.pubDate.valueOf()) - new Date(a.data.pubDate.valueOf())
  );

  if (props?.limit) return posts.slice(0, props.limit);

  return posts;
};
