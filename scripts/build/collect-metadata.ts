import matter from "gray-matter";
import { glob } from "tinyglobby";
import type { RawFrontmatter } from "#/types";

export let mdxRootDir = "./src/mdx";

export async function getMDXFiles(): Promise<Array<string>> {
  let filePaths = await glob(`${mdxRootDir}/**/*.mdx`);
  return filePaths
    .filter((path) => !path.includes("__sandbox"))
    .toSorted((a, b) => a.localeCompare(b));
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
    Object.entries(metadata).sort((a, b) => a[0].localeCompare(b[0])),
  );
}
