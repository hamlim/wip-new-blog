import { topPosts } from "#/collections";
import { LinkAnchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { PostCard } from "#/components/post-card";
import { metadata } from "#/metadata.gen";

export default function Blog() {
  return (
    <main className="pt-10">
      <title>Matt's Blog</title>
      <meta rel="description" content="Matt's Blog" />
      <ProseContainer>
        <Heading level={2}>Blog</Heading>
        <p>
          Welcome to my blog - a lot of these posts are still pretty rough
          around the edges!
        </p>
        <p>
          <LinkAnchor href="/blog/tags">View posts by tag →</LinkAnchor>
        </p>
        <p>
          <LinkAnchor href="/blog/timeline">View posts by date →</LinkAnchor>
        </p>
        <Heading level={3}>Popular Blog Posts:</Heading>
        <ol>
          {topPosts.map((post) => (
            <li key={post.slug}>
              <LinkAnchor href={post.path}>{post.title}</LinkAnchor>
            </li>
          ))}
        </ol>
        <Heading level={3}>All Posts</Heading>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 not-prose">
          {metadata.map((post) => (
            <PostCard key={post.path} post={post} />
          ))}
        </div>
      </ProseContainer>
    </main>
  );
}
