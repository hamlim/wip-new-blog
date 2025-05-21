import { reading } from "#/collections";
import { LinkAnchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { metadata } from "#/metadata.gen";
import { projects } from "#/projects-list";
import type { RawFrontmatter } from "#/types";

let topPostSlugs = [
  "/2025/february/youre-building-software-wrong",
  "/2025/january/the-ai-development-conundrum",
  "/2018/december/testing-software",
  "/2019/may/maintenance-costs",
  "/2023/june/fractal-refactoring",
  "/2023/june/10x",
] as Array<RawFrontmatter["path"]>;

let topPosts = topPostSlugs
  .map((path) => metadata.find((post) => post.path === path))
  .filter((post): post is RawFrontmatter => post !== undefined);

export default function Home() {
  return (
    <main className="pt-10">
      <ProseContainer>
        <Heading level={2}>Hello 👋</Heading>
        <p className="text-lg">
          Hey there, I'm Matt. I currently live in Boston and work as a software
          engineer at HubSpot. In my free time I like to work on several
          different <LinkAnchor href="/projects">projects</LinkAnchor>, and
          somehow find time to write some{" "}
          <LinkAnchor href="/blog">blog posts</LinkAnchor> as well.
        </p>
        <Heading level={3}>Popular Blog Posts:</Heading>
        <ol>
          {topPosts.map((post) => (
            <li key={post.slug}>
              <LinkAnchor href={post.slug}>{post.title}</LinkAnchor>
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
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
