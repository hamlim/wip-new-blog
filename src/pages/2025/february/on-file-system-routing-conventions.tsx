import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2025/february/on-file-system-routing-conventions.mdx";

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
