import { metadata } from "#/metadata.gen";
import type { HydratedFrontmatter } from "#/types";

export function collectByTag(): Map<string, Array<HydratedFrontmatter>> {
  let postsByTag = new Map<string, Array<HydratedFrontmatter>>();

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
  Record<string, Array<HydratedFrontmatter>>
> {
  let result: Record<
    /* year */ number,
    Record</* month */ string, Array<HydratedFrontmatter>>
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
