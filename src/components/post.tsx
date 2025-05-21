import { CommentSection } from "@hamstack/bluesky-comments";
import type { ReactNode } from "react";
import { Fragment } from "react";
import { LinkAnchor } from "#/components/anchor";
import { BlueskyMentions } from "#/components/bluesky-mentions";
import { BlueskyShareLink } from "#/components/bluesky-share-link";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { metadata } from "#/metadata.gen";
import type { RawFrontmatter } from "#/types";
import { PostCard } from "./post-card";

let dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "long",
}).format;

async function getLastModifiedDate(
  frontmatter: RawFrontmatter,
): Promise<Date | null> {
  let filePath = `src/mdx/${frontmatter.path}.mdx`;

  let repoName = "blog-2025";

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
    <main className="pt-10">
      <title>{`${frontmatter.title} - Matt's Blog`}</title>
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
        <RelatedPosts frontmatter={frontmatter} />
      </ProseContainer>
    </main>
  );
}

function getRelatedPosts(
  frontmatter: RawFrontmatter,
): Record<string, Array<RawFrontmatter>> {
  let postTags = frontmatter.tags;
  let relatedPosts: Record<string, Array<RawFrontmatter>> = {};
  for (let tag of postTags) {
    relatedPosts[tag] = [];
    for (let post of metadata) {
      if (
        post.tags.includes(tag) &&
        post.path !== frontmatter.path &&
        post.description.length > 0
      ) {
        relatedPosts[tag].push(post);
      }
    }
  }
  return relatedPosts;
}

function RelatedPosts({ frontmatter }: { frontmatter: RawFrontmatter }) {
  let relatedPosts = getRelatedPosts(frontmatter);

  if (Object.keys(relatedPosts).length === 0) {
    return null;
  }

  return (
    <Fragment>
      <Heading level={3}>Related Posts</Heading>
      <div className="flex flex-col gap-2 not-prose">
        {Object.entries(relatedPosts).map(([tag, posts]) => {
          if (posts.length === 0) {
            return null;
          }
          return (
            <Fragment key={tag}>
              <Heading level={4} className="mb-2">
                {tag}
              </Heading>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {posts.map((post) => (
                  <PostCard key={post.path} post={post} />
                ))}
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}
