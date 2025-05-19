import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2019/july/theme-first-ui-development.mdx";

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
