import { getArticles } from "@/utils/content/getArticles";
import RSS from "rss";

const HOSTNAME = "https://chaseadams.io";
export async function GET() {
  const feed = new RSS({
    title: "Curiously Chase",
    site_url: "https://chaseadams.io",
    feed_url: "https://chaseadams.io/rss.xml",
    description: "The Personal Website of Chase Adams",
  });
  const articles = await getArticles();

  articles.map((post) => {
    feed.item({
      title: post.title,
      guid: `${HOSTNAME}/posts/${post.slug}/`,
      url: `${HOSTNAME}/posts/${post.slug}/`,
      date: post.updatedDate,
      description: post.description,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
