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
        <Heading level={3}>All Posts</Heading>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 not-prose">
          {metadata.toReversed().map((post) => (
            <PostCard key={post.path} post={post} />
          ))}
        </div>
      </ProseContainer>
    </main>
  );
}
