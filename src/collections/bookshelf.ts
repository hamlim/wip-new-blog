import bookshelf from "#/bookshelf.json";

export let reading = bookshelf.filter((book) => book.status === "reading");
export let toRead = bookshelf.filter((book) => book.status === "to-read");
export let read = bookshelf.filter((book) => book.status === "read");
