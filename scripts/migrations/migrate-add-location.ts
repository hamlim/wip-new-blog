// collect all mdx files, add `location` field to the bottom of their frontmatter
// `location` should be a string that looks like `"San Francisco, CA"`
// will default to `""` if not provided
import matter from "gray-matter";
import { getMDXFiles } from "../build/collect-metadata";

let files = await getMDXFiles();

for (let file of files) {
  let content = await Bun.file(file).text();
  let { data, content: markdownContent } = matter(content);

  // Skip if no slug or already has location
  if (!data.slug || data.location) continue;

  // Add location field
  data.location = "";

  // Write back to file
  let newContent = matter.stringify(markdownContent, data);
  await Bun.write(file, newContent);
  console.log(`Added ogImage to ${file}`);
}
