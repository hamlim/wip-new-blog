import { collectByTag } from "#/collections";
import { LinkAnchor } from "#/components/anchor";
import { BlueskyIntentLink } from "#/components/bluesky-share-link";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

let postsByTag = collectByTag();

export default async function TagPage({ tagName }: { tagName: string }) {
  let tagNameDecoded = decodeURIComponent(tagName);
  let posts = postsByTag.get(tagNameDecoded);

  if (!posts) {
    return (
      <main className="pt-10">
        <ProseContainer>
          <Heading level={2}>{tagNameDecoded}</Heading>
          <p>
            Whoops! There are no posts found associated with that tag,{" "}
            <BlueskyIntentLink
              intent={`@matthamlin.me please write a blog post about ${tagName}!`}
            >
              pester me to write one!
            </BlueskyIntentLink>
          </p>
        </ProseContainer>
      </main>
    );
  }

  return (
    <main className="pt-10">
      <ProseContainer>
        <Heading level={2}>Posts tagged with {tagNameDecoded}</Heading>
        <p>
          <LinkAnchor href="/blog/tags">View posts by tag →</LinkAnchor>
        </p>
        <p>
          <LinkAnchor href="/blog">View all posts →</LinkAnchor>
        </p>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <LinkAnchor href={post.path}>{post.title}</LinkAnchor>
            </li>
          ))}
        </ul>
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
