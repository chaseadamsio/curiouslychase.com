import { getHostname } from "@/utils/getHostname";
import { ImageResponse } from "next/server";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const OpenGraphImageResponse = async (params: {
  title: string;
  description: string;
  preTitle?: () => JSX.Element;
}) => {
  const PreTitle = params.preTitle;
  const hostname = getHostname();

  const overusedGrotesk = await fetch(
    `${hostname}/fonts/overused-grotesk/ttf/OverusedGrotesk-Roman.ttf`
  ).then((res) => res.arrayBuffer());

  const overusedGroteskBold = await fetch(
    `${hostname}/fonts/overused-grotesk/ttf/OverusedGrotesk-Bold.ttf`
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          padding: "4rem",
          color: "hsl(225, 100%, 90%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundColor: "hsl(276, 100%, 8%)",
          backgroundImage:
            "linear-gradient(to bottom, rgb(0,0,0), rgb(28, 0, 64))",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <img
          alt="photo"
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            transform: "scale(1.75)",
            opacity: ".1",
          }}
          src={`${hostname}/img/magic-512x512.png`}
          width={512}
          height={512}
        />
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
            src={`${hostname}/img/Avatar.png`}
            width={128}
            height={128}
          />
          <div
            style={{
              fontSize: 24,
              fontFamily: "Overused Grotesk",
              fontWeight: "bold",
            }}
          >
            chaseadams.io
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "4rem",
            marginBottom: "auto",
          }}
        >
          {PreTitle && (
            <div style={{ display: "flex" }}>
              <PreTitle />
            </div>
          )}
          <div
            style={{
              fontSize: "60px",
              margin: 0,
              padding: 0,
              lineHeight: "64px",
              fontFamily: "Overused Grotesk",
              fontWeight: 700,
              color: `hsl(266 100% 95%)`,
            }}
          >
            {params.title}
          </div>
          {params.description?.length < 200 && (
            <div
              style={{
                marginTop: "1rem",
                fontSize: 36,
                fontFamily: "Overused Grotesk",
              }}
            >
              {params.description}
            </div>
          )}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: overusedGrotesk
        ? [
            {
              name: "Overused Grotesk",
              data: overusedGrotesk,
              style: "normal",
              weight: 400,
            },
            {
              name: "Overused Grotesk",
              data: overusedGroteskBold,
              style: "normal",
              weight: 700,
            },
          ]
        : [],
    }
  );
};

export const openGraphMetadata = {
  size,
  runtime: "nodejs",
  contentType: "image/png",
};
