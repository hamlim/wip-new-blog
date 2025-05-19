import { BlueskyPostEmbed, updateConfig } from "@hamstack/bluesky-embed-rsc";
import type { ComponentProps } from "react";
import { Abbr } from "#/components/abbr";
import { LinkAnchor } from "#/components/anchor";
import { BlueskyMention } from "#/components/bluesky-mention";
import { BlueskyMentions } from "#/components/bluesky-mentions";
import {
  BlueskyIntentLink,
  BlueskyShareLink,
} from "#/components/bluesky-share-link";
import { Container, ProseContainer } from "#/components/container";
import { ErrorBoundaryDemo } from "#/components/error-boundary.demo";
import { Figure } from "#/components/figure";
import { Footnote, FootnoteRef } from "#/components/footnote";
import { GitHubMention } from "#/components/github-mention";
import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Marquee } from "#/components/marquee";
import { Spacer } from "#/components/spacer";
import { TLDR } from "#/components/tldr";
import { TwitterMention } from "#/components/twitter-mention";
import SandboxMDX from "#/mdx/__sandbox.mdx";

updateConfig({
  linkClassName: "text-primary focus-visible:underline",
  rootClassName: "not-prose",
});

function DemoWrap(props: ComponentProps<"div">) {
  return (
    <div
      className="flex flex-col gap-2 border-2 border-gray-200 p-4"
      {...props}
    />
  );
}

export default function Sandbox() {
  return (
    <main className="mx-auto max-w-screen-lg px-4 py-12 gap-6 flex flex-col">
      <Heading level={1}>Component Sandbox</Heading>
      <p>This is a sandbox for testing components.</p>
      <hr />
      <Heading level={2}>Abbr:</Heading>
      <DemoWrap>
        <p>Some more content above it</p>
        <p>
          Some content here about{" "}
          <Abbr title="HyperText Markup Language">HTML</Abbr> which is
          interesting
        </p>
        <p>Some more content below it</p>
      </DemoWrap>
      <Heading level={2}>Headings:</Heading>
      <DemoWrap>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </DemoWrap>
      <Heading level={2}>Marquee:</Heading>
      <DemoWrap>
        <Marquee>This is a default (scroll) marquee.</Marquee>
        <Marquee behavior="slide">This is a slide marquee.</Marquee>
        <Marquee behavior="alternate">This is an alternate marquee.</Marquee>
      </DemoWrap>
      <Heading level={2}>Spacer:</Heading>
      <DemoWrap>
        <p>Some text</p>
        <Spacer />
        <p>Some more text</p>
      </DemoWrap>
      <Heading level={2}>Footnote:</Heading>
      <DemoWrap>
        <p>
          Some text here about HTML
          <FootnoteRef id="1">HTML is a markup language</FootnoteRef> which is
          interesting
        </p>
        <Footnote id="1">HTML is a markup language.</Footnote>
      </DemoWrap>
      <Heading level={2}>Image:</Heading>
      <DemoWrap>
        <Image
          alt="A beautiful image"
          src="/sandbox/bridge.webp"
          height={1_000}
          width={750}
        />
        <Spacer />
        <Image
          alt="A beautiful image"
          src="/sandbox/mountain-panarama.webp"
          height={269}
          width={1_080}
        />
      </DemoWrap>
      <Heading level={2}>Figure:</Heading>
      <DemoWrap>
        <Figure
          alt="A beautiful image"
          src="/sandbox/bridge.webp"
          height={1_000}
          width={750}
          caption="A nice little bridge"
        />
        <Spacer />
        <Figure
          alt="A beautiful image"
          src="/sandbox/mountain-panarama.webp"
          height={269}
          width={1_080}
          caption="A nice view of the mountains"
        />
      </DemoWrap>
      <Heading level={2}>MDX:</Heading>
      <DemoWrap>
        <div className="prose prose-slate dark:prose-invert">
          <SandboxMDX />
        </div>
      </DemoWrap>
      <Heading level={2}>Bluesky Share Link:</Heading>
      <DemoWrap>
        <BlueskyShareLink title="Hello, world!">
          Share to Bluesky!
        </BlueskyShareLink>
      </DemoWrap>
      <Heading level={2}>Bluesky Mentions:</Heading>
      <DemoWrap>
        <BlueskyMentions>See discussion on Bluesky</BlueskyMentions>
      </DemoWrap>
      <Heading level={2}>Bluesky Post Embed:</Heading>
      <DemoWrap>
        <BlueskyPostEmbed src="https://bsky.app/profile/matthamlin.me/post/3layiwns2kk2h">
          <blockquote
            className="bluesky-embed"
            data-bluesky-uri="at://did:plc:j73k5g4hr6qpkgwoalm3cfkh/app.bsky.feed.post/3layiwns2kk2h"
            data-bluesky-cid="bafyreicwe6ad5detejagfiho46jcdmaw7hgw5y4amylcihlw36bbn7gk7i"
            data-bluesky-embed-color-mode="system"
          >
            <p lang="en">
              Beer and a fish finger sandwich with chips 🙌<br />
              <br />
              <a href="https://bsky.app/profile/did:plc:j73k5g4hr6qpkgwoalm3cfkh/post/3layiwns2kk2h?ref_src=embed">
                [image or embed]
              </a>
            </p>
            &mdash; Matt Hamlin (
            <a href="https://bsky.app/profile/did:plc:j73k5g4hr6qpkgwoalm3cfkh?ref_src=embed">
              @matthamlin.me
            </a>
            ){" "}
            <a href="https://bsky.app/profile/did:plc:j73k5g4hr6qpkgwoalm3cfkh/post/3layiwns2kk2h?ref_src=embed">
              November 15, 2024 at 8:41 AM
            </a>
          </blockquote>
        </BlueskyPostEmbed>
        <BlueskyPostEmbed src="https://bsky.app/profile/tink.uk/post/3lp4ql6p6ac2h">
          <blockquote
            className="bluesky-embed"
            data-bluesky-uri="at://did:plc:vhjf4ume3qzemibwhmxrwpxj/app.bsky.feed.post/3lp4ql6p6ac2h"
            data-bluesky-cid="bafyreicmud7qx64k7bcjaommlzsiqcn4hhtuix5mnil5wqzr32mfrhdm6i"
            data-bluesky-embed-color-mode="system"
          >
            <p lang="en">
              We&#x27;re looking for an Associate Accessibility Specialist to
              join the @TetraLogical.com team: www.linkedin.com/jobs/view/42...
              Also here if Linkedin is not your thing:
              misc.tetralogical.com/careers/2025... Closing date is Wednesday 21
              May. #accessibility #a11y #UK
              <br />
              <br />
              <a href="https://bsky.app/profile/did:plc:vhjf4ume3qzemibwhmxrwpxj/post/3lp4ql6p6ac2h?ref_src=embed">
                [image or embed]
              </a>
            </p>
            &mdash; Léonie Watson (
            <a href="https://bsky.app/profile/did:plc:vhjf4ume3qzemibwhmxrwpxj?ref_src=embed">
              @tink.uk
            </a>
            ){" "}
            <a href="https://bsky.app/profile/did:plc:vhjf4ume3qzemibwhmxrwpxj/post/3lp4ql6p6ac2h?ref_src=embed">
              May 14, 2025 at 6:01 AM
            </a>
          </blockquote>
        </BlueskyPostEmbed>
        <BlueskyPostEmbed src="https://bsky.app/profile/pawbaby2.bsky.social/post/3louh32tw622p">
          <blockquote
            className="bluesky-embed"
            data-bluesky-uri="at://did:plc:c7ocgtuam5t56eb72y7d4hnu/app.bsky.feed.post/3louh32tw622p"
            data-bluesky-cid="bafyreicgjvkryfwwgqotm5iqd3ckpwup3d3p4cwaivgux64ppuwncvmf64"
            data-bluesky-embed-color-mode="system"
          >
            <p lang="en">
              Some great news for Canadians! 🇨🇦 Statistics Canada reports
              exports to the US are down but they are up substantially
              internationally to many other countries. Canada is winning and
              doing a great job diversifying and this will improve under PM
              Carney&apos;s leadership! #CanadaStrong #USDemocracy
              <br />
              <br />
              <a href="https://bsky.app/profile/did:plc:c7ocgtuam5t56eb72y7d4hnu/post/3louh32tw622p?ref_src=embed">
                [image or embed]
              </a>
            </p>
            &mdash; Marie 🇨🇦 (
            <a href="https://bsky.app/profile/did:plc:c7ocgtuam5t56eb72y7d4hnu?ref_src=embed">
              @pawbaby2.bsky.social
            </a>
            ){" "}
            <a href="https://bsky.app/profile/did:plc:c7ocgtuam5t56eb72y7d4hnu/post/3louh32tw622p?ref_src=embed">
              May 10, 2025 at 10:50 PM
            </a>
          </blockquote>
        </BlueskyPostEmbed>
      </DemoWrap>
      <Heading level={2}>Bluesky Intent Link:</Heading>
      <DemoWrap>
        <BlueskyIntentLink intent="Hello, world!">
          Create a post with some prefilled `intent` text
        </BlueskyIntentLink>
      </DemoWrap>

      <Heading level={2}>Link Anchor:</Heading>
      <DemoWrap>
        <p>
          A styled anchor link using Waku link{" "}
          <LinkAnchor href="/">Home</LinkAnchor>
        </p>
      </DemoWrap>

      <Heading level={2}>Containers:</Heading>
      <DemoWrap>
        <Container>
          This is a plain old container - it just gives it a max-width and
          centers it, but doesn't apply any other base styles.
        </Container>
        <Spacer />
        <ProseContainer>
          This is a prose container - it gives it a max-width and centers it,
          and applies some base styles for prose elements!
        </ProseContainer>
      </DemoWrap>
      <Heading level={2}>Error Boundary:</Heading>
      <DemoWrap>
        <ErrorBoundaryDemo />
      </DemoWrap>
      <Heading level={2}>TL;DR:</Heading>
      <DemoWrap>
        <TLDR>
          <p>This is a TL;DR</p>
        </TLDR>
      </DemoWrap>
      <Heading level={2}>GitHub Mention:</Heading>
      <DemoWrap>
        <GitHubMention>hamlim</GitHubMention>
      </DemoWrap>
      <Heading level={2}>Bluesky Mention:</Heading>
      <DemoWrap>
        <BlueskyMention>matthamlin.me</BlueskyMention>
      </DemoWrap>
      <Heading level={2}>Twitter Mention:</Heading>
      <DemoWrap>
        <TwitterMention>immatthamlin</TwitterMention>
      </DemoWrap>
    </main>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
