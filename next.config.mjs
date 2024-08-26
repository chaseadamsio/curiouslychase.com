/** @type {import('next').NextConfig} */
import mdx from "@next/mdx";

const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  trailingSlash: true,
};

const withMDX = mdx({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
