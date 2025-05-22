import { metadata } from "#/metadata.gen";
import type { RawFrontmatter } from "#/types";

export function collectByTag(): Map<string, Array<RawFrontmatter>> {
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

export function collectByDate(): Record<
  number,
  Record<string, Array<RawFrontmatter>>
> {
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
