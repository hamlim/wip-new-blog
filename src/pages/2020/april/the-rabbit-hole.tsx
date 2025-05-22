import { Post } from "#/components/post";
import Content, { frontmatter } from "#/mdx/2020/april/the-rabbit-hole.mdx";

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
