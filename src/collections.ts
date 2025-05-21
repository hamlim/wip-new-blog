import bookshelf from "#/bookshelf.json";
import { metadata } from "#/metadata.gen";
import type { RawFrontmatter } from "#/types";

function collectByTag() {
  let postsByTag = new Map<string, Array<RawFrontmatter>>();

  for (let post of metadata) {
    for (let tag of post.tags) {
      if (!postsByTag.has(tag)) {
        postsByTag.set(tag, [post]);
      } else {
        postsByTag.get(tag)?.push(post);
      }
    }
  }

  return postsByTag;
}

export let postsByTag = collectByTag();

function collectByDate() {
  let result: Record<
    /* year */ number,
    Record</* month */ string, Array<RawFrontmatter>>
  > = {};

  for (let post of metadata) {
    let year = post.year;
    let month = post.month;
    if (!result[year]) {
      result[year] = {};
    }
    if (!result[year][month]) {
      result[year][month] = [];
    }
    result[year][month].push(post);
  }

  return result;
}

export let postsByDate = collectByDate();

export let reading = bookshelf.filter((book) => book.status === "reading");
export let toRead = bookshelf.filter((book) => book.status === "to-read");
export let read = bookshelf.filter((book) => book.status === "read");

let topPostSlugs = [
  "/2025/february/youre-building-software-wrong",
  "/2025/january/the-ai-development-conundrum",
  "/2018/december/testing-software",
  "/2019/may/maintenance-costs",
  "/2023/june/fractal-refactoring",
  "/2023/june/10x",
] as Array<RawFrontmatter["path"]>;

export let topPosts = topPostSlugs
  .map((path) => metadata.find((post) => post.path === path))
  .filter((post): post is RawFrontmatter => post !== undefined);
