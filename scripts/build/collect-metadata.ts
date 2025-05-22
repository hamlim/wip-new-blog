import matter from "gray-matter";
import { glob } from "tinyglobby";
import type { RawFrontmatter } from "#/types";

export let mdxRootDir = "./src/mdx";

export async function getMDXFiles(): Promise<Array<string>> {
  let filePaths = await glob(`${mdxRootDir}/**/*.mdx`);
  return filePaths.filter((path) => !path.includes("__sandbox"));
}

export async function collectMetadata(
  files: Array<string>,
): Promise<Array<RawFrontmatter>> {
  let metadata: Array<RawFrontmatter> = [];

  await Promise.all(
    files.map(async (file) => {
      let content = await Bun.file(file).text();
      let { data } = matter(content);
      metadata.push(data as RawFrontmatter);
    }),
  );

  return metadata.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    if (Number.isNaN(aDate.getTime()) || Number.isNaN(bDate.getTime())) {
      return 0;
    }
    if (aDate.getTime() === bDate.getTime()) {
      return a.title.localeCompare(b.title);
    }
    return bDate.getTime() - aDate.getTime();
  });
}
