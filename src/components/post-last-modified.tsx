import type { ReactNode } from "react";
import { metadata } from "#/metadata.gen";
import type { RawFrontmatter } from "#/types";
import { formatDateTime } from "#/utils/date-formatting";

export function PostLastModified({
  frontmatter,
}: { frontmatter: RawFrontmatter }): ReactNode {
  let match = metadata.find((post) => post.path === frontmatter.path);
  if (!match) {
    return null;
  }
  let lastModified = new Date(match.lastModified);
  return <>Last modified: {formatDateTime(lastModified)}</>;
}
