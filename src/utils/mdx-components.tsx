import { BlueskyPostEmbed } from "@hamstack/bluesky-embed-rsc";
import type { ComponentProps, ReactNode } from "react";
import { Abbr } from "#/components/abbr";
import { Anchor, LinkAnchor } from "#/components/anchor";
import { BlueskyMention } from "#/components/bluesky-mention";
import { Code, Pre } from "#/components/code-block";
import { Figure } from "#/components/figure";
import { Footnote, FootnoteRef } from "#/components/footnote";
import { GitHubMention } from "#/components/github-mention";
import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Spacer } from "#/components/spacer";
import { ThemeImage } from "#/components/theme-image";
import { TLDR } from "#/components/tldr";
import { TweetEmbed } from "#/components/tweet-embed";
import { TwitterMention } from "#/components/twitter-mention";

export function useMDXComponents() {
  return {
    h1(props: ComponentProps<"h1">) {
      return <Heading level={1} {...props} />;
    },
    h2(props: ComponentProps<"h2">) {
      return <Heading level={2} {...props} />;
    },
    h3(props: ComponentProps<"h3">) {
      return <Heading level={3} {...props} />;
    },
    h4(props: ComponentProps<"h4">) {
      return <Heading level={4} {...props} />;
    },
    h5(props: ComponentProps<"h5">) {
      return <Heading level={5} {...props} />;
    },
    h6(props: ComponentProps<"h6">) {
      return <Heading level={6} {...props} />;
    },
    p(props: ComponentProps<"p">) {
      return <p {...props} />;
    },
    ul(props: ComponentProps<"ul">) {
      return <ul {...props} />;
    },
    ol(props: ComponentProps<"ol">) {
      return <ol {...props} />;
    },
    blockquote(props: ComponentProps<"blockquote">) {
      return <blockquote {...props} />;
    },
    pre: Pre,
    code: Code,

    // custom components
    Heading,
    Spacer,
    Abbr,
    Callout(props: ComponentProps<"div">) {
      return <div className="rounded-lg bg-muted px-4 py-0.5" {...props} />;
    },
    FootnoteRef,
    Footnote,
    Image,
    Figure,

    a(props: ComponentProps<"a"> & { children: ReactNode }) {
      let localLink = false;
      if (
        (props.href?.startsWith("/") && !props.href.startsWith("//")) ||
        props.href?.startsWith("#")
      ) {
        localLink = true;
      }

      if (localLink) {
        return <LinkAnchor {...props} />;
      }
      return <Anchor {...props} />;
    },

    Link(props: ComponentProps<"a"> & { children: ReactNode }) {
      let linkType: "a" | "Link" = "a";

      let href: string | undefined;
      if ("to" in props && typeof props.to === "string") {
        linkType = "Link";
        href = props.to;
      } else if ("href" in props && typeof props.href === "string") {
        href = props.href;
      }

      // for local links, prefer the Link component
      if (linkType === "a" && href?.startsWith("/")) {
        linkType = "Link";
      }

      if (linkType === "Link") {
        return <LinkAnchor href={href} {...props} />;
      }

      return <Anchor {...props} />;
    },
    BlueskyPost: BlueskyPostEmbed,
    TLDR,
    BlueskyMention,
    GitHubMention,
    TwitterMention,
    Tweet: TweetEmbed,
    ThemeImage,
  };
}
