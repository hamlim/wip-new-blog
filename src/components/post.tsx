import { CommentSection } from "@hamstack/bluesky-comments";
import { BlueskyPostEmbed } from "@hamstack/bluesky-embed-rsc";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { LinkAnchor } from "#/components/anchor";
import { BlueskyMentions } from "#/components/bluesky-mentions";
import { BlueskyShareLink } from "#/components/bluesky-share-link";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { FormattedDateTime } from "./formatted-date";
import { PostLastModified } from "./post-last-modified";
import { RelatedPosts } from "./post-related-posts";

export async function Post({
  frontmatter,
  children,
}: {
  children: ReactNode;
  frontmatter: any;
}) {
  let backLink = "/blog";
  if (frontmatter.type === "micropost") {
    backLink = "/status";
  } else if (frontmatter.type === "snippet") {
    backLink = "/snippets";
  }

  let backlinkText = "Back to all posts";
  if (frontmatter.type === "micropost") {
    backlinkText = "Back to all status updates";
  } else if (frontmatter.type === "snippet") {
    backlinkText = "Back to all snippets";
  }

  let contentType = "post";
  if (frontmatter.type === "micropost") {
    contentType = "status update";
  } else if (frontmatter.type === "snippet") {
    contentType = "snippet";
  }

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
        <LinkAnchor className="mb-2" href={backLink}>
          ← {backlinkText}
        </LinkAnchor>
        <Heading level={1}>{frontmatter.title}</Heading>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          <Suspense
            fallback={
              <>
                <br />
                <br />
                <br />
                <br />
              </>
            }
          >
            Published 📅: <FormattedDateTime date={frontmatter.date} />
            <br />
            <PostLastModified frontmatter={frontmatter} />
            {frontmatter.location && (
              <>
                <br />
                <span>Location 📍: {frontmatter.location}</span>
              </>
            )}
          </Suspense>
        </p>
        <p className="flex flex-col justify-evenly gap-2 sm:flex-row">
          <BlueskyShareLink title={frontmatter.title}>
            Share this {contentType} on Bluesky
          </BlueskyShareLink>
          <BlueskyMentions>See discussion on Bluesky</BlueskyMentions>
        </p>
        <hr className="my-4 border-foreground/10 w-[75%] mx-auto" />
        {children}
        <hr className="my-4 border-foreground/10 w-[75%] mx-auto" />
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
        {frontmatter.blueskyPostUri && (
          <div className="not-prose mt-10 gap-4 flex flex-col">
            <Heading level={3}>Bluesky Post and Comments:</Heading>
            <BlueskyPostEmbed src={frontmatter.blueskyPostUri}>
              <div />
            </BlueskyPostEmbed>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border">
              <CommentSection uri={frontmatter.blueskyPostUri} />
            </div>
          </div>
        )}
        <Suspense fallback={<p>Loading...</p>}>
          <RelatedPosts frontmatter={frontmatter} />
        </Suspense>
      </ProseContainer>
    </main>
  );
}
