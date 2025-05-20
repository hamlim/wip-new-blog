/// <reference types="bun" />
import { generateImage as generateBaseImage } from "pikitia";
import { collectMetadata, getMDXFiles } from "./collect-metadata";
import imageCacheJSON from "./image-cache.json";

let imageCache = new Map(Object.entries(imageCacheJSON)) as Map<
  string,
  { title: string; description: string }
>;

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

export async function generateOGImages() {
  let files = await getMDXFiles();

  let metadata = await collectMetadata(files);

  for (let meta of Object.values(metadata)) {
    if (imageCache.has(meta.slug)) {
      let cacheHit = imageCache.get(meta.slug);
      if (
        cacheHit &&
        "title" in cacheHit &&
        "description" in cacheHit &&
        cacheHit.title === meta.title &&
        cacheHit.description === meta.description
      ) {
        continue;
      }
    }
    imageCache.set(meta.slug, {
      title: meta.title,
      description: meta.description || "",
    });
    let pngBuffer = await generateImage({
      title: meta.title,
      description: meta.description || "",
      publishDate: new Date(meta.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    });

    await Bun.write(`./public/og-images/${meta.slug}.png`, pngBuffer);
  }

  await Bun.write(
    "./image-cache.json",
    JSON.stringify(Object.fromEntries(imageCache)),
  );
}
