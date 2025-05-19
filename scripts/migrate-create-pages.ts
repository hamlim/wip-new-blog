// Create page entrypoints for each MDX file
import { $ } from "bun";
import matter from "gray-matter";
import { getMDXFiles } from "./collect-metadata";

let files = await getMDXFiles();

for (let file of files) {
  let content = await Bun.file(file).text();
  let { data } = matter(content);

  let { year, month, slug } = data;

  let pagePath = `src/pages/${year}/${month}/${slug}.tsx`;

  await Bun.write(
    pagePath,
    `import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/${year}/${month}/${slug}.mdx";

export default function PodcastByHand() {
  return (
    <Post frontmatter={frontmatter}>
      <Content />
    </Post>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
`,
  );

  console.log(`Created page ${pagePath}`);
}

await $`bun run format`;
