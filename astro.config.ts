import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkWikiLink from "remark-wiki-link";
import { getSlugFromTitle } from "./src/utils/getSlugFromTitle";
import remarkObsidianImage from "./src/utils/remark/remarkObsidianImage/remarkObsidianImage";
import remarkResizeHeaderLevel from "./src/utils/remark/remarkResizeHeaderLevel/remarkResizeHeaderLevel";
import remarkObsidianEnhancedQuotes from "./src/utils/remark/remarkObsidianEnhancedQuotes/remarkObsidianEnhancedQuotes";
import rehypeSlug from "rehype-slug";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./src/plugins/rehype-autolink-config";
import rehypePrism from "rehype-prism";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://curiouslychase.com",
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, autolinkConfig],
      rehypeSlug,
      rehypePrism,
    ],
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          aliasDivider: "|",
          hrefTemplate: (permalink: string) => {
            const slug = getSlugFromTitle(permalink.replace(/_/g, "-"));
            if (slug.startsWith("#")) {
              return slug;
            }
            return `/posts/${slug}`;
          },
        },
      ],
      [
        remarkObsidianImage,
        {
          permalinks: [],
        },
      ],
      remarkObsidianEnhancedQuotes,
      remarkResizeHeaderLevel,
    ],
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx({
      optimize: {
        customComponentNames: ["a", "h1", "h2", "h3", "h4", "h5", "blockquote"],
      },
    }),
    sitemap(),
    preact({
      compat: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
