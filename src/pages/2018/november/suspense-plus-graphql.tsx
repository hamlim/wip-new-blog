import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2018/november/suspense-plus-graphql.mdx";

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
