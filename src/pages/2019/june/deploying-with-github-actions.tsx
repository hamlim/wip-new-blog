import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2019/june/deploying-with-github-actions.mdx";

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
