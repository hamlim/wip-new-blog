import { postsByDate } from "#/collections";
import { LinkAnchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { uppercase } from "#/utils/uppercase";

export default async function TimelineIndexPage() {
  return (
    <main className="pt-10">
      <ProseContainer>
        <Heading level={2}>Blog Timeline:</Heading>
        <ul>
          {Object.entries(postsByDate)
            .toSorted((a, b) => Number(b[0]) - Number(a[0]))
            .map(([year, postsByMonth]) => (
              <li key={year}>
                <Heading level={3}>{year}</Heading>
                <p className="text-sm text-muted-foreground">
                  {Object.keys(postsByMonth).length} posts published in {year}
                </p>
                <ul>
                  {Object.entries(postsByMonth).map(([month, posts]) => (
                    <li key={month}>
                      <Heading level={4}>{uppercase(month)}</Heading>
                      <p className="text-sm text-muted-foreground">
                        {posts.length} posts published in {month} {year}
                      </p>
                      <ul>
                        {posts.map((post) => (
                          <li key={post.slug}>
                            <LinkAnchor href={post.path}>
                              {post.title}
                            </LinkAnchor>
                          </li>
                        ))}
                      </ul>
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
    render: "dynamic",
  };
}
