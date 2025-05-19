import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2023/november/teams-and-caterpillar-tracks.mdx";

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
