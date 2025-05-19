import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2025/april/server-side-rendering-compatible-css-theming.mdx";

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
