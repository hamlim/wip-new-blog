import { CommentSection } from "@hamstack/bluesky-comments";
import type { ReactNode } from "react";
import { LinkAnchor } from "#/components/anchor";
import { BlueskyMentions } from "#/components/bluesky-mentions";
import { BlueskyShareLink } from "#/components/bluesky-share-link";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import type { RawFrontmatter } from "#/types";
// utils

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

export async function Post({
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
      <meta property="og:image" content={frontmatter.ogImage} />
      <meta
        property="og:url"
        content={`https://matthamlin.me/${frontmatter.path}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Matt's Blog" />
      <ProseContainer>
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
            <LinkAnchor
              key={tag}
              href={`/blog/tags/${encodeURIComponent(tag)}`}
            >
              {tag}
            </LinkAnchor>
          ))}
        </div>
        <CommentSection author="matthamlin.me" />
      </ProseContainer>
    </main>
  );
}
