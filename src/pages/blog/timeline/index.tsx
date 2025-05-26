import { collectByDate } from "#/collections";
import { LinkAnchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";
import { uppercase } from "#/utils/uppercase";

let postsByDate = collectByDate();

export default async function TimelineIndexPage() {
  return (
    <main className="pt-10">
      <title>Matt's Blog Timeline</title>
      <meta rel="description" content="Matt's Blog Timeline" />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta property="og:title" content="Matt's Blog Timeline" />
      <meta property="og:description" content="Matt's Blog Timeline" />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta property="og:site_name" content="Matt's Blog Timeline" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://matthamlin.me/me.png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Matt Hamlin's Personal Website" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@immatthamlin" />
      <meta name="twitter:creator" content="@immatthamlin" />
      <meta name="twitter:title" content="Matt's Blog Timeline" />
      <meta name="twitter:description" content="Matt's Blog Timeline" />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
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
    render: "static",
  };
}
