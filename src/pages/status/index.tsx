import { recentMicroposts } from "#/collections/recent-microposts.gen";
import { LinkAnchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { PostCard } from "#/components/post-card";
import { metadata } from "#/metadata.gen";

export default function Status() {
  return (
    <main className="pt-10">
      <title>Matt's Status Updates</title>
      <meta rel="description" content="Matt's Blog" />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta property="og:title" content="Matt Hamlin's Status" />
      <meta property="og:description" content="Matt Hamlin's Status" />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta property="og:site_name" content="Matt Hamlin's Status" />
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
      <meta name="twitter:title" content="Matt Hamlin's Status" />
      <meta name="twitter:description" content="Matt Hamlin's Status" />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
      <ProseContainer>
        <Heading level={2}>Status</Heading>
        <p>
          Welcome to my status updates - a collection of small microblog-like
          updates that I've added to my personal website.
        </p>
        <Heading level={3}>Recent Status Updates:</Heading>
        <ol>
          {recentMicroposts.map((micropost) => (
            <li key={micropost.slug}>
              <LinkAnchor href={micropost.path}>{micropost.title}</LinkAnchor>
            </li>
          ))}
        </ol>
        <Heading level={3}>All Status Updates</Heading>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 not-prose">
          {metadata
            .filter((micropost) => micropost.type === "micropost")
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
