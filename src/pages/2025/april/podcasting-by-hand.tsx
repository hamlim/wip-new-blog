import { Post } from "#/components/post";
import Content, { frontmatter } from "#/mdx/2025/april/podcasting-by-hand.mdx";

export default function PodcastByHand() {
  return (
    <Post frontmatter={frontmatter}>
      <Content />
    </Post>
  );
}

export function getConfig() {
  return {
    render: "static",
  };
}
