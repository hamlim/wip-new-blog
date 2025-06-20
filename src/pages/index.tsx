import { reading } from "#/collections/bookshelf";
import { recentPosts } from "#/collections/recent-posts.gen";
import { recentStatusUpdates } from "#/collections/recent-status-updates.gen";
import { topPosts } from "#/collections/top-posts.gen";
import { LinkAnchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { FormattedDateTime } from "#/components/formatted-date";
import { Heading } from "#/components/heading";
import { PostCard } from "#/components/post-card";
import { projects } from "#/projects-list";

export default function Home() {
  return (
    <main className="pt-10">
      <title>Matt 👋</title>
      <meta rel="description" content="Matt Hamlin's Personal Website" />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta property="og:title" content="Matt Hamlin" />
      <meta
        property="og:description"
        content="Matt Hamlin's Personal Website"
      />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta property="og:site_name" content="Matt's Website" />
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
      <meta name="twitter:title" content="Matt's Website" />
      <meta
        name="twitter:description"
        content="Matt Hamlin's personal website"
      />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
      <ProseContainer>
        <Heading level={2}>Hello 👋</Heading>
        <p className="text-lg">
          Hey there, I'm Matt. I currently live in Boston and work as a software
          engineer at HubSpot. In my free time I like to work on several
          different <LinkAnchor href="/projects">projects</LinkAnchor>, and
          somehow find time to write some{" "}
          <LinkAnchor href="/blog">blog posts</LinkAnchor> as well.
        </p>
        <Heading level={3}>Recent Blog Posts:</Heading>
        <ol>
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <LinkAnchor href={post.path}>{post.title}</LinkAnchor>
              <br />
              <span className="text-sm text-muted-foreground">
                <FormattedDateTime date={post.date} />
              </span>
            </li>
          ))}
        </ol>
        <Heading level={3}>Popular Blog Posts:</Heading>
        <ol>
          {topPosts.map((post) => (
            <li key={post.slug}>
              <LinkAnchor href={post.path}>{post.title}</LinkAnchor>
            </li>
          ))}
        </ol>
        <LinkAnchor href="/blog">View all blog posts →</LinkAnchor>
        <Heading level={3}>Popular Side Projects:</Heading>
        <ol>
          {projects.slice(0, 5).map((project) => (
            <li key={project.key}>
              <LinkAnchor href={project.link}>{project.title}</LinkAnchor>
            </li>
          ))}
        </ol>
        <LinkAnchor href="/projects">View all projects →</LinkAnchor>
        <Heading level={3}>Currently Reading:</Heading>
        <ol>
          {reading.map((book) => (
            <li key={book.title}>
              <LinkAnchor href={book.url} target="_blank">
                {book.title}
              </LinkAnchor>{" "}
              - {book.author}
            </li>
          ))}
        </ol>
        <LinkAnchor href="/bookshelf">View my bookshelf →</LinkAnchor>
        <Heading level={3}>Recent Status Updates:</Heading>
        <ol>
          {recentStatusUpdates.map((update) => (
            <li key={update.slug}>
              <LinkAnchor href={update.path}>{update.title}</LinkAnchor>
            </li>
          ))}
        </ol>
        <LinkAnchor href="/status">View all status updates →</LinkAnchor>
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "static",
  };
}
