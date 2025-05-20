import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

export default function Blog() {
  return (
    <main className="pt-10">
      <title>Matt's Blog</title>
      <meta rel="description" content="Matt's Blog" />
      <ProseContainer>
        <Heading level={2}>Blog</Heading>
      </ProseContainer>
    </main>
  );
}
