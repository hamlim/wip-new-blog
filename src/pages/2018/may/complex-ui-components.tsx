import { Post } from "#/components/post";
import Content, { frontmatter } from "#/mdx/2018/may/complex-ui-components.mdx";

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
