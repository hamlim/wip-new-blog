import { collectByTag } from "#/collections";
import { LinkAnchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

let postsByTag = collectByTag();

export default async function TagIndexPage() {
  return (
    <main className="pt-10">
      <ProseContainer>
        <Heading level={2}>Blog Tags:</Heading>
        <ul>
          {[...postsByTag.entries()].map(([tag, posts]) => (
            <li key={tag}>
              <Heading level={3}>{tag}</Heading>
              <ul>
                {posts.map((post) => (
                  <li key={post.slug}>
                    <LinkAnchor href={post.path}>{post.title}</LinkAnchor>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "static",
  };
}
