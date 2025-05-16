export type RawFrontmatter = {
  title: string;
  slug: string;
  path: string;
  date: number;
  status: "draft" | "public";
  tags: Array<string>;
  description: string;
  month: string;
  year: number;
  ogImage: string;
};
