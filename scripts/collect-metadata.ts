import matter from "gray-matter";
import { glob } from "tinyglobby";

export let mdxRootDir = "./src/mdx";

export type RawFrontmatter = {
  title: string;
  slug: string;
  path: string;
  date: number;
  status: "draft" | "public";
  tags: Array<string>;
  description: string;
  month: string;
  year: number;
  ogImage: string;
};

export async function getMDXFiles(): Promise<Array<string>> {
  return await glob(`${mdxRootDir}/**/*.mdx`);
}

export async function collectMetadata(files: Array<string>) {
  let metadata: Record<string, RawFrontmatter> = {};

  await Promise.all(
    files.map(async (file) => {
      let content = await Bun.file(file).text();
      let { data } = matter(content);
      metadata[
        file.replace(mdxRootDir.replace("./", ""), "").replace(".mdx", "")
      ] = data as RawFrontmatter;
    }),
  );

  return Object.fromEntries(
    Object.entries(metadata).sort((a, b) => a[1].date - b[1].date),
  );
}
