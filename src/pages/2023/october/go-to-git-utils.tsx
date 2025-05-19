import { Post } from "#/components/post";
import Content, { frontmatter } from "#/mdx/2023/october/go-to-git-utils.mdx";

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
