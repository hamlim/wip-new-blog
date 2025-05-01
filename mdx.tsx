import Component, { frontmatter } from "#/mdx/2025/april/some-slug-here.mdx";

export default function MDXDemoPage() {
  return (
    <section className="font-mono">
      <pre className="font-mono">{JSON.stringify(frontmatter, null, 2)}</pre>
      <div className="border border-gray-200 rounded-lg p-4 prose dark:prose-invert">
        <Component />
      </div>
    </section>
  );
}

export function getConfig() {
  return {
    render: "static",
  };
}
