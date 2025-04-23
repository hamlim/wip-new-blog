/// <reference types="bun" />
// import { ImageResponse } from "@vercel/og";

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

// @todo
let emoji = {};

async function generateOgImage(id: string) {
  let svg = await satori(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "50px 200px",
        fontSize: 40,
        color: "black",
        background: "white",
        fontFamily: "Inter",
      }}
    >
      👋 Hello {id}
    </div>,
    {
      width: 1200,
      height: 630,
      embedFont: false,
      fonts: [
        {
          name: "Inter",
          data: await Bun.file("./public/inter-regular.ttf").arrayBuffer(),
          weight: 400,
          style: "normal",
        },
      ],
      graphemeImages: emoji,
    },
  );

  let resvg = new Resvg(svg, {});
  let pngData = resvg.render();
  let pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}

console.log("Generating og image for 123");
let res = generateOgImage("123");
// console.log(res);
// console.log("Writing to ./public/og-image-123.png");
// await Bun.write("./public/og-image-123.png", res.body);
// console.log("Done");

Bun.serve({
  port: 42069,
  async fetch() {
    return await generateOgImage("123");
  },
});
