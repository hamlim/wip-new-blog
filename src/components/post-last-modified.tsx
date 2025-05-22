import type { ReactNode } from "react";
import { metadata } from "#/metadata.gen";
import type { RawFrontmatter } from "#/types";
import { FormattedDateTime } from "./formatted-date";

export function PostLastModified({
  frontmatter,
}: { frontmatter: RawFrontmatter }): ReactNode {
  let match = metadata.find((post) => post.path === frontmatter.path);
  if (!match) {
    return null;
  }
  return (
    <>
      Last modified: <FormattedDateTime date={match.lastModified} />
    </>
  );
}
