import bookshelf from "#/bookshelf.json";

export let reading = bookshelf
  .filter((book) => book.status === "reading")
  .toReversed();
export let toRead = bookshelf
  .filter((book) => book.status === "to-read")
  .toReversed();
export let read = bookshelf
  .filter((book) => book.status === "read")
  .toReversed();
