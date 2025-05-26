import { Anchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { projects } from "#/projects-list";

export default function Projects() {
  return (
    <main className="pt-10">
      <title>Matt's Projects</title>
      <meta rel="description" content="Matt's Projects" />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta property="og:title" content="Matt Hamlin's Projects" />
      <meta property="og:description" content="Matt Hamlin's Projects" />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta property="og:site_name" content="Matt Hamlin's Projects" />
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
      <meta name="twitter:title" content="Matt Hamlin's Projects" />
      <meta name="twitter:description" content="Matt Hamlin's Projects" />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
      <ProseContainer>
        <Heading level={2}>Projects</Heading>
        <ul>
          {projects.map((project) => (
            <li key={project.key}>
              <Anchor href={project.link} target="_blank">
                {project.title}
              </Anchor>
              <p>{project.description}</p>
            </li>
          ))}
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
