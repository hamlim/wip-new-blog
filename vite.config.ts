import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { mdxConfig } from "./scripts/mdx-config";

export default defineConfig({
  resolve: {
    alias: {
      "#/*": "./src/*",
      "#utils/*": "./src/utils/*",
      "#mdx/*": "./src/mdx/*",
    },
  },
  plugins: [
    mdx({
      ...mdxConfig,
      providerImportSource: "#utils/mdx-components",
    }),
    tailwindcss(),
  ],
});
