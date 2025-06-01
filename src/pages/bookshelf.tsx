import { read, reading, toRead } from "#/collections/bookshelf";
import { Anchor } from "#/components/anchor";
import { BlueskyIntentLink } from "#/components/bluesky-share-link";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

export default function Bookshelf() {
  return (
    <main className="pt-10">
      <title>Matt's Bookshelf</title>
      <meta rel="description" content="Matt's Bookshelf" />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta property="og:title" content="Matt Hamlin's Bookshelf" />
      <meta property="og:description" content="Matt Hamlin's Bookshelf" />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta property="og:site_name" content="Matt Hamlin's Bookshelf" />
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
      <meta name="twitter:title" content="Matt Hamlin's Bookshelf" />
      <meta name="twitter:description" content="Matt Hamlin's Bookshelf" />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
      <ProseContainer>
        <Heading level={2}>Bookshelf</Heading>
        <p>
          Have any recommendations?{" "}
          <BlueskyIntentLink intent="@matthamlin.me I recommend the following book: ">
            Reach out on Bluesky to share them!
          </BlueskyIntentLink>
        </p>
        {reading.length > 0 && (
          <div>
            <Heading level={3}>Reading</Heading>
            <ul>
              {reading.map((book) => (
                <li key={book.title}>
                  <Anchor href={book.url} target="_blank">
                    {book.title}
                  </Anchor>{" "}
                  - {book.author}
                </li>
              ))}
            </ul>
          </div>
        )}
        {toRead.length > 0 && (
          <div>
            <Heading level={3}>To Read</Heading>
            <ul>
              {toRead.map((book) => (
                <li key={book.title}>
                  <Anchor href={book.url} target="_blank">
                    {book.title}
                  </Anchor>{" "}
                  - {book.author}
                </li>
              ))}
            </ul>
          </div>
        )}
        {read.length > 0 && (
          <details>
            <summary>
              <Heading className="inline-block" level={3}>
                Read
              </Heading>
            </summary>
            <ul>
              {read.map((book) => (
                <li key={book.title}>
                  <p>
                    <Anchor href={book.url} target="_blank">
                      {book.title}
                    </Anchor>{" "}
                    - {book.author}
                  </p>
                  {book.dateStarted && book.dateFinished ? (
                    <p>
                      Started: {book.dateStarted} - Finished:{" "}
                      {book.dateFinished}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </details>
        )}
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "static",
  };
}
