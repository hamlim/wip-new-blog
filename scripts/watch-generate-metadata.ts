import watcher from "@parcel/watcher";
import { generateMetadata, mdxDir } from "./generate-metadata";

let subscription = await watcher.subscribe(mdxDir, async (err, events) => {
  await generateMetadata();
});

process.on("SIGINT", async () => {
  await subscription.unsubscribe();
  console.log("Unsubscribed from watcher");
});
