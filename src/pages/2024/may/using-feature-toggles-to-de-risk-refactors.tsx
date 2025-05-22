import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2024/may/using-feature-toggles-to-de-risk-refactors.mdx";

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
