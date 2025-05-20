import bookshelf from "#/bookshelf.json";
import { Anchor } from "#/components/anchor";
import { BlueskyIntentLink } from "#/components/bluesky-share-link";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

let reading = bookshelf.filter((book) => book.status === "reading");
let toRead = bookshelf.filter((book) => book.status === "to-read");
let read = bookshelf.filter((book) => book.status === "read");

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
                  </Anchor>
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
                  </Anchor>
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
                  <Anchor href={book.url} target="_blank">
                    {book.title}
                  </Anchor>
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
