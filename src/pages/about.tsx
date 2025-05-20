import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

export default function About() {
  return (
    <main className="pt-10">
      <title>About Matt</title>
      <meta rel="description" content="About Matt Hamlin" />
      <ProseContainer>
        <Heading level={2}>About</Heading>
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
