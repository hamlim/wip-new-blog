import { Post } from "#/components/post";
import Content, { frontmatter } from "#/mdx/2020/december/sandbox-part-1.mdx";

export default function PodcastByHand() {
  return (
    <Post frontmatter={frontmatter}>
      <Content />
    </Post>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
