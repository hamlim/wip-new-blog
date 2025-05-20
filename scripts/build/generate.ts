import { generateMetadata } from "./generate-metadata";
import { generateOGImages } from "./generate-og-images";
import { generateRSS } from "./generate-rss";

await generateMetadata();
await generateRSS();
await generateOGImages();
