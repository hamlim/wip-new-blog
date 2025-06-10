export type RawFrontmatter = {
  title: string;
  slug: string;
  path: string;
  date: number;
  status: "draft" | "public";
  type: "blog-post" | "note";
  tags: Array<string>;
  description: string;
  month: string;
  year: number;
  ogImage: string;
  blueskyPostUri?: string;
};

export type HydratedFrontmatter = RawFrontmatter & {
  lastModified: number;
};
