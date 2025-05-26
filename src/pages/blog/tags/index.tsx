import { collectByTag } from "#/collections";
import { LinkAnchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

let postsByTag = collectByTag();

export default async function TagIndexPage() {
  return (
    <main className="pt-10">
      <title>Matt's Blog Tags</title>
      <meta rel="description" content="Matt's Blog Tags" />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta property="og:title" content="Matt's Blog Tags" />
      <meta property="og:description" content="Matt's Blog Tags" />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta property="og:site_name" content="Matt's Blog Tags" />
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
      <meta name="twitter:title" content="Matt's Blog Tags" />
      <meta name="twitter:description" content="Matt's Blog Tags" />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
      <ProseContainer>
        <Heading level={2}>Blog Tags:</Heading>
        <ul>
          {[...postsByTag.entries()].map(([tag, posts]) => (
            <li key={tag}>
              <Heading level={3}>{tag}</Heading>
              <ul>
                {posts.map((post) => (
                  <li key={post.slug}>
                    <LinkAnchor href={post.path}>{post.title}</LinkAnchor>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "static",
  };
}
