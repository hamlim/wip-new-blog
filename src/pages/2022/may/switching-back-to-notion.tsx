import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2022/may/switching-back-to-notion.mdx";

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
