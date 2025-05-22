import matter from "gray-matter";
import { glob } from "tinyglobby";
import type { HydratedFrontmatter } from "#/types";

export let mdxRootDir = "./src/mdx";

export async function getMDXFiles(): Promise<Array<string>> {
  let filePaths = await glob(`${mdxRootDir}/**/*.mdx`);
  return filePaths.filter((path) => !path.includes("__sandbox"));
}

export async function collectMetadata(
  files: Array<string>,
): Promise<Array<HydratedFrontmatter>> {
  let metadata: Array<HydratedFrontmatter> = [];

  await Promise.all(
    files.map(async (filePath) => {
      let file = Bun.file(filePath);
      let content = await file.text();
      let { data } = matter(content);
      metadata.push({
        ...data,
        lastModified: file.lastModified,
      } as HydratedFrontmatter);
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
