/// <reference types="bun" />
import { generateImage as generateBaseImage } from "pikitia";

export async function generateImage({
  title,
  description,
  publishDate,
}: {
  title: string;
  description: string;
  publishDate: string;
}) {
  let pngBuffer = await generateBaseImage(
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
      <p style={{ color: "#3b82f6", textDecoration: "underline" }}>
        {publishDate}
      </p>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );

  return pngBuffer;
}

console.log("Generating og image for 123");
let pngBuffer = await generateImage({
  title: "Hello 👋",
  description: "World",
  publishDate: new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }),
});
await Bun.write("./public/og-image-test.png", pngBuffer);
