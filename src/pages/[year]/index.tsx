import type { PageProps } from "waku/router";

export default function Year({ year }: PageProps<"/[year]">) {
  return (
    <main>
      <h1>Year</h1>
    </main>
  );
}
