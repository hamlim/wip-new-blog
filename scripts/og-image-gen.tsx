/// <reference types="bun" />
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

let inter = {
  name: "Inter",
  data: await Bun.file("./public/inter-regular.ttf").arrayBuffer(),
  weight: 400,
  style: "normal",
} as const;

export async function generateImage({
  title,
  description,
  publishDate,
}: {
  title: string;
  description: string;
  publishDate: string;
}) {
  let svg = await satori(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "50px 200px",
        fontSize: 40,
        background: "white",
        fontFamily: "Inter",
      }}
    >
      <h1 style={{ color: "black" }}>{title}</h1>
      <p style={{ color: "#3b82f6" }}>{description}</p>
      <p style={{ color: "#3b82f6" }}>{publishDate}</p>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [inter],
      async loadAdditionalAsset(code: string, segment: string) {
        if (code === "emoji") {
          // if segment is an emoji
          let svgText = await Bun.file(
            `./assets/svg/${segment.codePointAt(0)?.toString(16)}.svg`,
          ).text();
          let svgBuf = Buffer.from(svgText).toString("base64");
          return `data:image/svg+xml;base64,${svgBuf}`;
        }

        return `missing-segment - ${code} - ${segment}`;
      },
    },
  );

  let resvg = new Resvg(svg, {});
  let pngData = resvg.render();
  let pngBuffer = pngData.asPng();

  return pngBuffer;
}

console.log("Generating og image for 123");
let pngBuffer = await generateImage({
  title: "Hello",
  description: "World",
  publishDate: new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }),
});
await Bun.write("./public/og-image-test.png", pngBuffer);
