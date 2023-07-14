/** @type {import('next').NextConfig} */
import mdx from "@next/mdx";

const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: `/posts/Most%20Common%20Programming%20Case%20Types/`,
        destination: `/notes/most-common-programming-case-types/`,
        permanent: true,
      },
      {
        source: `/notes/:path*`,
        destination: `/posts/:path*/`,
        permanent: true,
      },
      {
        source: `/blog/:path*`,
        destination: `/posts/:path*/`,
        permanent: true,
      },
      {
        source: `/most-common-programming-case-types/`,
        destination: `/posts/most-common-programming-case-types/`,
        permanent: true,
      },
      {
        source: `/notes/`,
        destination: `/posts/👋-start-here/`,
        permanent: true,
      },
      {
        source: `/posts/start-week-on-monday-in-google-calendar-and-apple-calendar/`,
        destination: `/posts/start-week-on-monday-in-google-calendar-apple-calendar-spark-email-and-cron-calendar/`,
        permanent: true,
      },
      {
        source: `/posts/Disable%20ESLint%20Rules%20with%20Comment%20Syntax/`,
        destination: "/posts/disable-eslint-rules-with-comment-syntax/",
        permanent: true,
      },
      {
        source: `/notes/20%20-%20Notes%2FDisable%20ESLint%20Rules%20with%20Comment%20Syntax/`,
        destination: "/notes/disable-eslint-rules-with-comment-syntax/",
        permanent: true,
      },
      {
        source: `/2019-05-07-fix-a-failed-docker-port-allocation/`,
        destination: `/notes/fix-docker-error-for-failed-port-allocation/`,
        permanent: true,
      },
      {
        source: `/notes/my-home-office/`,
        destination: `/notes/my-home-office-setup/`,
        permanent: true,
      },
      {
        source: `/notes/desktop-apps-i-always-have-open/`,
        destination: `/notes/my-digital-tool-stack`,
        permanent: true,
      },
      {
        source: `/posts/Fix%20Docker%20Error%20for%20Failed%20Port%20Allocation/`,
        destination: `/posts/fix-docker-error-for-failed-port-allocation/`,
        permanent: true,
      },
      {
        source: `/posts/fix-docker-error-for-failed-port-allocation/`,
        destination: `/posts/fix-docker-error-for-failed-port-allocation/`,
        permanent: true,
      },
      {
        source: `/posts/Find%20messages%20in%20Slack%20based%20on%20a%20date%20or%20date%20range/`,
        destination:
          "/posts/20%20-%20Notes%2FFind%20messages%20in%20Slack%20based%20on%20a%20date%20or%20date%20range/",
        permanent: true,
      },
      {
        source: `/principles/`,
        destination: `/posts/principles/`,
        permanent: true,
      },
      {
        source: `/gatsby-drafts/`,
        destination: `/posts/gatsby-drafts/`,
        permanent: true,
      },
      {
        source: `/posts/Book Review - Making Work Visible`,
        destination: `/posts/book-review-making-work-visible/`,
        permanent: true,
      },
      {
        source: `/book-review-making-work-visible/`,
        destination: `/posts/book-review-making-work-visible/`,
        permanent: true,
      },
      {
        source: `/notes/`,
        destination: `/posts/`,
        permanent: true,
      },
      {
        source: `/blog/`,
        destination: `/posts/`,
        permanent: true,
      },
      {
        source: `/about-me/`,
        destination: `/about/`,
        permanent: true,
      },
      {
        source: `/writing/`,
        destination: `/blog/`,
        permanent: true,
      },
      {
        source: `/connect/`,
        destination: `/about/`,
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
