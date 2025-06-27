import { recentSnippets } from "#/collections/recent-snippets.gen";
import { LinkAnchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { PostCard } from "#/components/post-card";
import { metadata } from "#/metadata.gen";

export default function Status() {
  return (
    <main className="pt-10">
      <title>Matt's Snippets</title>
      <meta rel="description" content="Matt's Blog" />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta property="og:title" content="Matt Hamlin's Snippets" />
      <meta property="og:description" content="Matt Hamlin's Snippets" />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta property="og:site_name" content="Matt Hamlin's Snippets" />
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
      <meta name="twitter:title" content="Matt Hamlin's Snippets" />
      <meta name="twitter:description" content="Matt Hamlin's Snippets" />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
      <ProseContainer>
        <Heading level={2}>Snippets</Heading>
        <p>
          Welcome to my snippets - a collection of small code snippets that I've
          been collecting over the years.
        </p>
        <Heading level={3}>Recent Snippets:</Heading>
        <ol>
          {recentSnippets.map((snippet) => (
            <li key={snippet.slug}>
              <LinkAnchor href={snippet.path}>{snippet.title}</LinkAnchor>
            </li>
          ))}
        </ol>
        <Heading level={3}>All Snippets</Heading>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 not-prose">
          {metadata
            .filter((snippet) => snippet.type === "snippet")
            .map((micropost) => (
              <PostCard key={micropost.path} post={micropost} />
            ))}
        </div>
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "static",
  };
}
