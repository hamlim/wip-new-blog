import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2021/august/updating-forked-repos.mdx";

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
