import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2023/november/ai-driven-development.mdx";

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
