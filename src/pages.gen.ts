// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as 2025AprilPodcastingByHand_getConfig } from './pages/2025/april/podcasting-by-hand';
// prettier-ignore
import type { getConfig as Sandbox_getConfig } from './pages/__sandbox';
// prettier-ignore
import type { getConfig as BlogTagsTagName_getConfig } from './pages/blog/tags/[tagName]';
// prettier-ignore
import type { getConfig as BlogTagsIndex_getConfig } from './pages/blog/tags/index';
// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';

// prettier-ignore
type Page =
| ({ path: '/2025/april/podcasting-by-hand' } & GetConfigResponse<typeof 2025AprilPodcastingByHand_getConfig>)
| ({ path: '/__sandbox' } & GetConfigResponse<typeof Sandbox_getConfig>)
| { path: '/_root'; render: 'dynamic' }
| { path: '/about'; render: 'dynamic' }
| { path: '/blog'; render: 'dynamic' }
| ({ path: '/blog/tags/[tagName]' } & GetConfigResponse<typeof BlogTagsTagName_getConfig>)
| ({ path: '/blog/tags' } & GetConfigResponse<typeof BlogTagsIndex_getConfig>)
| { path: '/bookshelf'; render: 'dynamic' }
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| { path: '/projects'; render: 'dynamic' };

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  