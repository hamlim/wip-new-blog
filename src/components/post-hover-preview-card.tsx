"use client";
import { type CacheLoadOptions, createCache } from "suspense";
import type { HydratedFrontmatter } from "#/types";
import { PostCard } from "./post-card";

export let postCache = createCache<[path: string], HydratedFrontmatter>({
  async load([path], options: CacheLoadOptions) {
    let { signal } = options;
    let res = await fetch(`/api/v1/post?path=${encodeURIComponent(path)}`, {
      signal,
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }
    let data = (await res.json()) as HydratedFrontmatter;
    return data;
  },
});

export function PostHoverPreviewCard({ path }: { path: string }) {
  let post = postCache.read(path);

  return <PostCard post={post} />;
}
