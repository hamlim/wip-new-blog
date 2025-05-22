import { Post } from "#/components/post";
import Content, {
  frontmatter,
} from "#/mdx/2019/february/why-you-should-useReducer.mdx";

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
