import type { PageProps } from "waku/router";

export default function Post({
  year,
  month,
  slug,
}: PageProps<"/[year]/[month]/[slug]">) {
  return (
    <main>
      <h1>Post</h1>
    </main>
  );
}
