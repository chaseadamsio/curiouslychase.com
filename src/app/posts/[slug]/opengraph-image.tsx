import { getArticleForSlug } from "@/utils/content/getArticleForSlug";
import { getHostname } from "@/utils/getHostname";
import { ImageResponse } from "next/server";
import photo from "./curiouslychase_photo.png";
import NextImage from "next/image";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const hostname = getHostname();

  const spaceGrotesk = await fetch(
    `${hostname}/fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf`
  ).then((res) => res.arrayBuffer());

  const spaceGroteskBold = await fetch(
    `${hostname}/fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf`
  ).then((res) => res.arrayBuffer());

  const article = await getArticleForSlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          padding: "4rem",
          color: "hsl(225, 100%, 90%)",
          width: "100%",
          height: "100%",
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundColor: "hsl(276, 100%, 8%)",
          backgroundImage:
            "linear-gradient(to bottom, rgb(8, 7, 13), rgb(24, 0, 41))",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: "100%",
          }}
        >
          <img
            alt="photo"
            src={`${hostname}/assets/curiouslychase_photo.png`}
            width={120}
            height={128}
          />
          <div
            style={{
              fontSize: 24,
              fontFamily: "Space Grotesk",
            }}
          >
            curiouslychase.com
          </div>
        </div>

        <div
          style={{
            fontSize: "60px",
            lineHeight: "64px",
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            color: `hsl(299 100% 50%)`,
          }}
        >
          {article.title}
        </div>
        {article.description?.length < 200 && (
          <div
            style={{
              fontSize: 36,
              fontFamily: "Space Grotesk",
            }}
          >
            {article.description}
          </div>
        )}
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGrotesk,
          style: "normal",
          weight: 400,
        },
        {
          name: "Space Grotesk",
          data: spaceGroteskBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
