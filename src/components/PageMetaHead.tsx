import { getOgImageUrl } from "@/utils/getOgImageUrl";
import Head from "next/head";

type Props = {
  page: {
    thumbnail?: string;
    image?: string;
    title: string;
    slug: string;
    description?: string;
  };
};

export const PageMetaHead = async ({ page }: Props) => {
  let cardType = "summary_large_image";

  const description = page.description ?? "A post by Chase Adams";

  const imageUrl = await getOgImageUrl(page.slug);

  return (
    <Head>
      <title>{page.title}</title>

      <link rel="icon" href="/favicon-196x196.png" />
      <link rel="canonical" href={`https://curiouslychase.com${page.slug}`} />

      <meta name="og:title" content={page.title} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={imageUrl} />
      <meta name="twitter:card" content={cardType} />
      <meta name="twitter:creator" content="@curiouslychase" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:image" content={imageUrl} />
      {description ? (
        <>
          <meta name="description" content={description} />
          <meta name="twitter:description" content={description} />
          <meta name="og:description" content={description} />
        </>
      ) : null}
    </Head>
  );
};
