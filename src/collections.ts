import { metadata } from "#/metadata.gen";
import type { RawFrontmatter } from "#/types";

function collectByTag() {
  let postsByTag = new Map<string, Array<RawFrontmatter>>();

  for (let post of Object.values(metadata)) {
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
