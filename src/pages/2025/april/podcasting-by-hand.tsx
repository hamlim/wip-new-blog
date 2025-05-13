import { CommentSection } from "@hamstack/bluesky-comments";
import type { ReactNode } from "react";
import { Anchor } from "#/components/anchor";
import { BlueskyMentions } from "#/components/bluesky-mentions";
import { BlueskyShareLink } from "#/components/bluesky-share-link";
import { Heading } from "#/components/heading";
import PodcastByHandMDX, {
  frontmatter,
} from "#/mdx/2025/april/podcasting-by-hand.mdx";
// utils

export type RawFrontmatter = {
  title: string;
  slug: string;
  path: string;
  date: number;
  status: "draft" | "public";
  tags: Array<string>;
  description: string;
  month: string;
  year: number;
  ogImage: string;
};

let dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "long",
}).format;

async function getLastModifiedDate(
  frontmatter: RawFrontmatter,
): Promise<Date | null> {
  let filePath = `src/mdx/${frontmatter.path}.mdx`;

  let repoName = "wip-new-blog";

  let ghAPIURL = new URL(
    `https://api.github.com/repos/hamlim/${repoName}/commits`,
  );
  ghAPIURL.searchParams.set("path", filePath);

  let [results] = await Promise.allSettled<
    [
      Promise<
        [
          {
            commit: { committer: { date: string } };
          },
        ]
      >,
    ]
  >([fetch(ghAPIURL.toString()).then((r) => r.json())]);

  if (results.status === "fulfilled") {
    let commit = results.value[0];
    if (!commit) {
      return null;
    }
    return new Date(commit.commit.committer.date);
  }

  return null;
}

async function Post({
  frontmatter,
  children,
}: {
  children: ReactNode;
  frontmatter: any;
}) {
  let lastModifiedDate = await getLastModifiedDate(frontmatter);

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
          {lastModifiedDate
            ? `Last updated: ${dateFormatter(lastModifiedDate)}`
            : "Last updated: unknown"}
        </p>
        <p className="flex flex-col justify-evenly gap-2 sm:flex-row">
          <BlueskyShareLink title={frontmatter.title}>
            Share this post on Bluesky
          </BlueskyShareLink>
          <BlueskyMentions>See discussion on Bluesky</BlueskyMentions>
        </p>
        {children}
        <Heading level={3}>Tags:</Heading>
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag: string) => (
            <Anchor key={tag} href={`/tags/${tag}`}>
              {tag}
            </Anchor>
          ))}
        </div>
        <CommentSection author="matthamlin.me" />
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
