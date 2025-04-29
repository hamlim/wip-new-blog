import watcher from "@parcel/watcher";
import { generateMetadata, mdxRootDir } from "./generate-metadata";
import { generateRSS } from "./generate-rss";

let subscription = await watcher.subscribe(mdxRootDir, async (err, events) => {
  await generateMetadata();
  await generateRSS();
});

process.on("SIGINT", async () => {
  await subscription.unsubscribe();
  console.log("Unsubscribed from watcher");
});
