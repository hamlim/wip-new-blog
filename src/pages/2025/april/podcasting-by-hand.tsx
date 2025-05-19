import { Post } from "#/components/post";
import PodcastByHandMDX, {
  frontmatter,
} from "#/mdx/2025/april/podcasting-by-hand.mdx";

export default function PodcastByHand() {
  return (
    <Post frontmatter={frontmatter}>
      <PodcastByHandMDX />
    </Post>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
