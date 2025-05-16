// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as 2025AprilPodcastingByHand_getConfig } from './pages/2025/april/podcasting-by-hand';
// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as TagsTagName_getConfig } from './pages/tags/[tagName]';
// prettier-ignore
import type { getConfig as TagsIndex_getConfig } from './pages/tags/index';

// prettier-ignore
type Page =
| ({ path: '/2025/april/podcasting-by-hand' } & GetConfigResponse<typeof 2025AprilPodcastingByHand_getConfig>)
| { path: '/__sandbox'; render: 'dynamic' }
| { path: '/_root'; render: 'dynamic' }
| { path: '/blog'; render: 'dynamic' }
| { path: '/bookshelf'; render: 'dynamic' }
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| { path: '/notes'; render: 'dynamic' }
| { path: '/projects'; render: 'dynamic' }
| { path: '/resume'; render: 'dynamic' }
| { path: '/skip-me-pls-year/[month]/[slug]'; render: 'dynamic' }
| { path: '/skip-me-pls-year/[month]'; render: 'dynamic' }
| { path: '/skip-me-pls-year'; render: 'dynamic' }
| { path: '/social'; render: 'dynamic' }
| ({ path: '/tags/[tagName]' } & GetConfigResponse<typeof TagsTagName_getConfig>)
| ({ path: '/tags' } & GetConfigResponse<typeof TagsIndex_getConfig>)
| { path: '/tools'; render: 'dynamic' };

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  