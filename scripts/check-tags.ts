import { collectMetadata, getMDXFiles } from "./collect-metadata";

let metadata = await collectMetadata(await getMDXFiles());

let tags = new Set<string>();

for (let file in metadata) {
  if (!metadata[file]) {
    continue;
  }

  if (!metadata[file].tags) {
    continue;
  }

  for (let tag of metadata[file].tags) {
    tags.add(tag);
  }
}

console.log(tags);
