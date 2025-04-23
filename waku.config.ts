import { defineConfig } from "waku/config";

export default defineConfig({
  unstable_honoEnhancer: "./waku/waku.hono-enhancer",
  middleware: [
    "waku/middleware/context",
    "waku/middleware/dev-server",
    "./waku/waku.cloudflare-middleware",
    "waku/middleware/handler",
  ],
});
