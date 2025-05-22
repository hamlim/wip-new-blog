import { read, reading, toRead } from "#/collections";
import { Anchor } from "#/components/anchor";
import { BlueskyIntentLink } from "#/components/bluesky-share-link";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

export default function Bookshelf() {
  return (
    <main className="pt-10">
      <title>Matt's Bookshelf</title>
      <meta rel="description" content="Matt's Bookshelf" />
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
          <div>
            <Heading level={3}>Read</Heading>
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
          </div>
        )}
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
