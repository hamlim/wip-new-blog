import watcher from "@parcel/watcher";
import { generateMetadata, mdxRootDir } from "./generate-metadata";

let subscription = await watcher.subscribe(mdxRootDir, async (err, events) => {
  await generateMetadata();
});

process.on("SIGINT", async () => {
  await subscription.unsubscribe();
  console.log("Unsubscribed from watcher");
});
