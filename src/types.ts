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

type Micropost = Base & {
  type: "micropost";
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

export type RawFrontmatter = BlogPost | Note | Snippet | Micropost;

export type HydratedFrontmatter = RawFrontmatter & {
  lastModified: number;
};
