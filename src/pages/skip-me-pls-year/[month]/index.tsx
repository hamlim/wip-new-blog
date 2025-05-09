import type { PageProps } from "waku/router";

export default function Month({ year, month }: PageProps<"/[year]/[month]">) {
  return (
    <main>
      <h1>Month</h1>
    </main>
  );
}
