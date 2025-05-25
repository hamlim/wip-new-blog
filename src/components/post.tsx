import { CommentSection } from "@hamstack/bluesky-comments";
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
        <LinkAnchor className="mb-2" href="/blog">
          ← Back to all posts
        </LinkAnchor>
        <Heading level={1}>{frontmatter.title}</Heading>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          <Suspense
            fallback={
              <p>
                <br />
                <br />
                <br />
              </p>
            }
          >
            Published: <FormattedDateTime date={frontmatter.date} />
            <br />
            <PostLastModified frontmatter={frontmatter} />
          </Suspense>
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
        <Suspense fallback={<p>Loading...</p>}>
          <RelatedPosts frontmatter={frontmatter} />
        </Suspense>
      </ProseContainer>
    </main>
  );
}
