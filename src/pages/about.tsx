import { FileUser, GithubIcon, LinkedinIcon } from "lucide-react";
import { Anchor, LinkAnchor } from "#/components/anchor";
import { BlueskyIcon } from "#/components/bluesky-icon";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

export default function About() {
  return (
    <main className="pt-10">
      <title>About Matt</title>
      <meta rel="description" content="About Matt Hamlin" />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta property="og:title" content="About Matt Hamlin" />
      <meta property="og:description" content="About Matt Hamlin" />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta property="og:site_name" content="About Matt Hamlin" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://matthamlin.me/me.png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Matt Hamlin's Personal Website" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@immatthamlin" />
      <meta name="twitter:creator" content="@immatthamlin" />
      <meta name="twitter:title" content="About Matt Hamlin" />
      <meta name="twitter:description" content="About Matt Hamlin" />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
      <ProseContainer>
        <Heading level={2}>About Matt</Heading>
        <p className="text-lg">
          Hey there, I'm Matt. I currently live in Boston and work as a software
          engineer at HubSpot. In my free time I like to work on several
          different <LinkAnchor href="/projects">projects</LinkAnchor>, and
          somehow find time to write some{" "}
          <LinkAnchor href="/blog">blog posts</LinkAnchor> as well.
        </p>
        <Heading level={3}>Socials</Heading>
        <p>
          <Anchor href="https://bsky.app/profile/matthamlin.me">
            <BlueskyIcon className="mr-2 inline-block h-4 w-4" />
            Bluesky
          </Anchor>
          <br />
          <Anchor href="https://github.com/mhamlin">
            <GithubIcon className="mr-2 inline-block h-4 w-4" />
            GitHub
          </Anchor>
          <br />
          <Anchor href="https://www.linkedin.com/in/hamlim/">
            <LinkedinIcon className="mr-2 inline-block h-4 w-4" />
            LinkedIn
          </Anchor>
          <br />
          <LinkAnchor href="/resume">
            <FileUser className="mr-2 inline-block h-4 w-4" />
            Check out my resume
          </LinkAnchor>
        </p>
        <Heading level={3}>Uses</Heading>
        <p>
          I use a few core pieces of hardware and software daily, and I don't
          usually update these all that often:
        </p>
        <Heading level={4}>Hardware</Heading>
        <ul>
          <li>
            <span className="font-bold">Laptop</span> - MacBook Air M2 13"
            (early 2022)
          </li>
          <li>
            <span className="font-bold">Phone</span> - iPhone 16 Pro Max
          </li>
          <li>
            <span className="font-bold">Keyboard</span> - Nuphy Air75 v2
          </li>
          <li>
            <span className="font-bold">E-reader</span> - Kindle Paperwhite
          </li>
        </ul>
        <Heading level={4}>Software</Heading>
        <ul>
          <li>
            <span className="font-bold">Note taking / Tasks</span> - Obsidian
          </li>
          <li>
            <span className="font-bold">Code Editor</span> - Cursor
          </li>
          <li>
            <span className="font-bold">Terminal</span> - Warp
          </li>
          <li>
            <span className="font-bold">Browser</span> - Arc
          </li>
        </ul>
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "static",
  };
}
