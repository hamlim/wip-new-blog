import rehypeShiki from "@shikijs/rehype";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeSlug from "rehype-slug";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import type { PluggableList } from "unified";

export let mdxConfig = {
  remarkPlugins: [
    remarkFrontmatter,
    [remarkMdxFrontmatter, { name: "frontmatter" }],
    remarkGfm,
    remarkFlexibleMarkers,
  ] as PluggableList,
  rehypePlugins: [
    [
      rehypeShiki,
      {
        themes: {
          light: "vitesse-light",
          dark: "vitesse-dark",
        },
      },
    ],
    rehypeSlug,
    rehypeMdxCodeProps,
  ] as PluggableList,
};
