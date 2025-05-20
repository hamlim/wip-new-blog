import bookshelf from "#/bookshelf.json";
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

export let reading = bookshelf.filter((book) => book.status === "reading");
export let toRead = bookshelf.filter((book) => book.status === "to-read");
export let read = bookshelf.filter((book) => book.status === "read");
