import { Heading } from "#/components/heading";

export default async function TagPage({ tagName }: { tagName: string }) {
  console.log("tagName: ", tagName);

  return (
    <main>
      <Heading level={2}>Hello World</Heading>
    </main>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
