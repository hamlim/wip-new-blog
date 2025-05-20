import { Heading } from "#/components/heading";

export default function Home() {
  return (
    <main className="pt-10">
      <Heading level={2}>Home</Heading>
    </main>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
