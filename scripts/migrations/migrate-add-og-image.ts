// collect all mdx files, add `ogImage` field to the bottom of their frontmatter
// `ogImage` should be a string that looks like `/og-images/<slug>.png`
// where `<slug>` is the slug field in frontmatter
import matter from "gray-matter";
import { getMDXFiles } from "../build/collect-metadata";

let files = await getMDXFiles();

for (let file of files) {
  let content = await Bun.file(file).text();
  let { data, content: markdownContent } = matter(content);

  // Skip if no slug or already has ogImage
  if (!data.slug || data.ogImage) continue;

  // Add ogImage field
  data.ogImage = `/og-images/${data.slug}.png`;

  // Write back to file
  let newContent = matter.stringify(markdownContent, data);
  await Bun.write(file, newContent);
  console.log(`Added ogImage to ${file}`);
}
