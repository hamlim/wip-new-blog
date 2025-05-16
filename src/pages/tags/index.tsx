import { Heading } from "#/components/heading";

export default async function TagIndexPage() {
  console.log("TagIndexPage");

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
