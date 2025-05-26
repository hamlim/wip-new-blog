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
        <title>{`No known posts tagged with ${tagNameDecoded}`}</title>
        <meta
          rel="description"
          content={`No known posts tagged with ${tagNameDecoded}`}
        />
        <link rel="author" href="https://matthamlin.me" />
        <meta name="author" content="Matt Hamlin" />
        <meta
          name="keywords"
          content="Matt Hamlin,blog,portfolio,web developer,software engineer"
        />
        <meta name="creator" content="Matt Hamlin" />
        <meta
          property="og:title"
          content={`No known posts tagged with ${tagNameDecoded}`}
        />
        <meta
          property="og:description"
          content={`No known posts tagged with ${tagNameDecoded}`}
        />
        <meta property="og:url" content="https://matthamlin.me" />
        <meta
          property="og:site_name"
          content={`No known posts tagged with ${tagNameDecoded}`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://matthamlin.me/me.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta
          property="og:image:alt"
          content="Matt Hamlin's Personal Website"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@immatthamlin" />
        <meta name="twitter:creator" content="@immatthamlin" />
        <meta
          name="twitter:title"
          content={`No known posts tagged with ${tagNameDecoded}`}
        />
        <meta
          name="twitter:description"
          content={`No known posts tagged with ${tagNameDecoded}`}
        />
        <meta name="twitter:image" content="https://matthamlin.me/me.png" />
        <meta name="twitter:image:width" content="512" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="Matt Hamlin's Personal Website"
        />
        <meta name="twitter:image:type" content="image/png" />
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
      <title>{`Posts tagged with ${tagNameDecoded}`}</title>
      <meta rel="description" content={`Posts tagged with ${tagNameDecoded}`} />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta
        property="og:title"
        content={`Posts tagged with ${tagNameDecoded}`}
      />
      <meta
        property="og:description"
        content={`Posts tagged with ${tagNameDecoded}`}
      />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta
        property="og:site_name"
        content={`Posts tagged with ${tagNameDecoded}`}
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://matthamlin.me/me.png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Matt Hamlin's Personal Website" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@immatthamlin" />
      <meta name="twitter:creator" content="@immatthamlin" />
      <meta
        name="twitter:title"
        content={`Posts tagged with ${tagNameDecoded}`}
      />
      <meta
        name="twitter:description"
        content={`Posts tagged with ${tagNameDecoded}`}
      />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
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
