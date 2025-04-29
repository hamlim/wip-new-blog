// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as Index_getConfig } from "./pages/index";
// prettier-ignore
import type { getConfig as Mdx_getConfig } from "./pages/mdx";

// prettier-ignore
type Page =
  | { path: "/[year]/[month]/[slug]"; render: "dynamic" }
  | { path: "/[year]/[month]"; render: "dynamic" }
  | { path: "/[year]"; render: "dynamic" }
  | { path: "/__sandbox"; render: "dynamic" }
  | { path: "/_root"; render: "dynamic" }
  | { path: "/blog"; render: "dynamic" }
  | { path: "/bookshelf"; render: "dynamic" }
  | ({ path: "/" } & GetConfigResponse<typeof Index_getConfig>)
  | ({ path: "/mdx" } & GetConfigResponse<typeof Mdx_getConfig>)
  | { path: "/notes"; render: "dynamic" }
  | { path: "/projects"; render: "dynamic" }
  | { path: "/resume"; render: "dynamic" }
  | { path: "/social"; render: "dynamic" }
  | { path: "/tools"; render: "dynamic" };

// prettier-ignore
declare module "waku/router" {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
