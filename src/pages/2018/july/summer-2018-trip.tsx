import { Post } from "#/components/post";
import Content, { frontmatter } from "#/mdx/2018/july/summer-2018-trip.mdx";

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
