import { getArticleForSlug } from "@/utils/content/getArticleForSlug";
import { getHostname } from "@/utils/getHostname";
import { ImageResponse } from "next/server";

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
  // Font
  const tillsdaleBold = await fetch(
    `${hostname}/fonts/BNTillsdale/BNTillsdale-Bold.otf`
  ).then((res) => res.arrayBuffer());

  const palmerLake = await fetch(
    `${hostname}/fonts/PalmerLake/PalmerLakePrint-Regular.otf`
  ).then((res) => res.arrayBuffer());

  const article = await getArticleForSlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          padding: 64,
          color: "#ebf1fd",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url("${hostname}/dot-grid.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "22px 22px",
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontFamily: "Tillsdale",
            textTransform: "uppercase",
          }}
        >
          {article.title}
        </div>
        <div
          style={{
            fontSize: 64,
            lineHeight: "3rem",
            fontFamily: "Palmer Lake",
          }}
        >
          {article.description}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: "Tillsdale",
          data: tillsdaleBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Palmer Lake",
          data: palmerLake,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
