import type { ReactNode } from "react";
import { Heading } from "#/components/heading";
import PodcastByHandMDX, {
  frontmatter,
} from "#/mdx/2025/april/podcasting-by-hand.mdx";

///

// utils

let dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format;

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

      <pre>{JSON.stringify(frontmatter, null, 2)}</pre>
      <article className="prose prose-sm prose-slate dark:prose-invert mx-auto max-w-prose">
        <Heading level={1}>{frontmatter.title}</Heading>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Published: {dateFormatter(frontmatter.date)}
          <br />
          {/* @TODO: fetch last modified date from GitHub */}
        </p>
        <p>
          {/* Share link to Bluesky */}
          {/* See discussion on Bluesky */}
        </p>
        {children}
        {/* tags */}
        {/* Comments */}
      </article>
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
