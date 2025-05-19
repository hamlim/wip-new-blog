import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2024/july/simple-obsidian-task-management.mdx";

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
