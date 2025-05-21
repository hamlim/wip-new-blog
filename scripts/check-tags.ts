import { collectMetadata, getMDXFiles } from "./build/collect-metadata";

let metadata = await collectMetadata(await getMDXFiles());

let tags = new Set<string>();

for (let file of metadata) {
  if (!file) {
    continue;
  }

  if (!file.tags) {
    continue;
  }

  for (let tag of file.tags) {
    tags.add(tag);
  }
}

console.log(tags);
