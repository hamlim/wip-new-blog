import { Anchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { projects } from "#/projects-list";

export default function Projects() {
  return (
    <main className="pt-10">
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
