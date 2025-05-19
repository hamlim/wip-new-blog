import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2019/february/hooks-tips-dependency-array.mdx";

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
