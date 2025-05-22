import { Post } from "#/components/post";
import Content, { frontmatter } from "#/mdx/2021/december/2021-in-music.mdx";

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
