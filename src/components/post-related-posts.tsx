import { Fragment } from "react";
import { Heading } from "#/components/heading";
import { PostCard } from "#/components/post-card";
import { metadata } from "#/metadata.gen";
import type { HydratedFrontmatter, RawFrontmatter } from "#/types";

function getRelatedPosts(
  frontmatter: RawFrontmatter,
): Record<string, Array<HydratedFrontmatter>> {
  let postTags = frontmatter.tags;
  let relatedPosts: Record<string, Array<HydratedFrontmatter>> = {};
  for (let tag of postTags) {
    relatedPosts[tag] = [];
    for (let post of metadata) {
      if (
        post.tags.includes(tag) &&
        post.path !== frontmatter.path &&
        post.description.length > 0
      ) {
        relatedPosts[tag].push(post);
      }
    }
  }
  return relatedPosts;
}

export function RelatedPosts({ frontmatter }: { frontmatter: RawFrontmatter }) {
  let relatedPosts = getRelatedPosts(frontmatter);

  if (Object.keys(relatedPosts).length === 0) {
    return null;
  }

  return (
    <Fragment>
      <Heading level={3}>Related Posts</Heading>
      <div className="flex flex-col gap-2 not-prose">
        {Object.entries(relatedPosts).map(([tag, posts]) => {
          if (posts.length === 0) {
            return null;
          }
          return (
            <Fragment key={tag}>
              <Heading level={4} className="mb-2">
                {tag}
              </Heading>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {posts.map((post) => (
                  <PostCard key={post.path} post={post} />
                ))}
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}
