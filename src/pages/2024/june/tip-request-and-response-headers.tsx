import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2024/june/tip-request-and-response-headers.mdx";

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
