import { Post } from "#/components/post";
import Content, { frontmatter } from "#/mdx/2020/july/enhancing-slack.mdx";

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
