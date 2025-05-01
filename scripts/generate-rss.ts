import { Feed } from "feed";
import matter from "gray-matter";
import { collectMetadata, getMDXFiles } from "./generate-metadata";
import { transformMdx } from "./transform-mdx";

export async function generateRSS() {
  let mdxFiles = await getMDXFiles();
  let metadata = await collectMetadata(mdxFiles);

  let feed = new Feed({
    title: "Matt Hamlin's Blog",
    description: "Matt Hamlin's Blog",
    id: "https://matthamlin.me",
    link: "https://matthamlin.me",
    language: "en",
    // IMAGE TODO
    image: "https://matthamlin.me/og.png",
    // FAVICON TODO
    favicon: "https://matthamlin.me/favicon.ico",
    copyright: "© 2025 Matt Hamlin",
    updated: new Date(),
    generator: "Matt by Hand",
    feedLinks: {
      rss2: "https://matthamlin.me/rss.xml",
    },
    author: {
      name: "Matt Hamlin",
      email: "matthewjameshamlin@gmail.com",
    },
  });

  let enhancedMetadata = await Promise.all(
    Object.entries(metadata).map(async ([slug, meta]) => {
      let rawContent = await Bun.file(`./src/mdx/${slug}.mdx`).text();
      let { content } = matter(rawContent);
      try {
        let transformedContent = await transformMdx(content);
        return { ...meta, content: transformedContent };
      } catch (error) {
        console.error(`Error transforming content for ${slug}:`, error);
        throw error;
      }
    }),
  );

  for (let [slug, meta] of Object.entries(enhancedMetadata)) {
    let url = `https://matthamlin.me/${meta.path}`;
    feed.addItem({
      title: meta.title,
      link: url,
      id: url,
      description: meta.description,
      date: new Date(meta.date),
      author: [
        {
          name: "Matt Hamlin",
          email: "matthewjameshamlin@gmail.com",
        },
      ],
      content: meta.content,
      image: meta.ogImage,
    });
  }
  await Bun.write("./public/rss.xml", feed.rss2());
}

if (import.meta.main) {
  await generateRSS();
}
