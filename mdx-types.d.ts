declare module "*.mdx" {
  import type { RawFrontmatter } from "#/types";

  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontmatter: RawFrontmatter;
}
