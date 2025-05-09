import type { ReactNode } from "react";
import { Heading } from "#/components/heading";
import PodcastByHandMDX, {
  frontmatter,
} from "#/mdx/2025/april/podcasting-by-hand.mdx";

function Post({
  frontmatter,
  children,
}: {
  children: ReactNode;
  frontmatter: any;
}) {
  return (
    <main>
      <title>{`${frontmatter.title} - Matt's Blog}`}</title>
      <meta name="description" content={frontmatter.description} />
      <meta property="og:title" content={frontmatter.title} />
      <meta property="og:description" content={frontmatter.description} />
      {/* @TODO: Add ogImage to frontmatter in blog posts */}
      <meta property="og:image" content={frontmatter.ogImage} />
      <meta
        property="og:url"
        content={`https://matthamlin.me/${frontmatter.path}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Matt's Blog" />

      <Heading level={1}>{frontmatter.title}</Heading>
      <pre>{JSON.stringify(frontmatter, null, 2)}</pre>
      {children}
    </main>
  );
}

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
