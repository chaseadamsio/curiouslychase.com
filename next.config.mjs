/** @type {import('next').NextConfig} */
import mdx from "@next/mdx";

const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.curiouslychase.com",
          },
          {
            type: "host",
            value: "curiouslychase.com",
          },
        ],
        destination: "https://chaseadams.io/:path*",
        permanent: true,
      },
    ];
  },
};

const withMDX = mdx({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
