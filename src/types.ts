type Base = {
  title: string;
  slug: string;
  path: string;
  date: number;
  status: "draft" | "public";
  tags: Array<string>;
  month: string;
  year: number;
  ogImage: string;
  blueskyPostUri?: string;
  location?: string;
};

type StatusUpdate = Base & {
  type: "status-update";
};

type BlogPost = Base & {
  type: "blog-post";
  description: string;
};

type Note = Base & {
  type: "note";
  description: string;
};

type Snippet = Base & {
  type: "snippet";
  description: string;
};

export type RawFrontmatter = BlogPost | Note | Snippet | StatusUpdate;

// export type RawFrontmatter = {
//   title: string;
//   slug: string;
//   path: string;
//   date: number;
//   status: "draft" | "public";
//   type: "blog-post" | "note" | "snippet" | "status-update";
//   tags: Array<string>;
//   description: string;
//   month: string;
//   year: number;
//   ogImage: string;
//   blueskyPostUri?: string;
// };

export type HydratedFrontmatter = RawFrontmatter & {
  lastModified: number;
};
