import { evaluate } from "@mdx-js/mdx";
import { Fragment } from "react";
import { renderToString } from "react-dom/server";
import * as jsx from "react/jsx-runtime";
import { useMDXComponents } from "#utils/mdx-components.js";
import { mdxConfig } from "./mdx-config";

export async function transformMdx(content: string) {
  let { default: Component } = await evaluate(content, {
    ...mdxConfig,
    ...jsx,
    Fragment,
    useMDXComponents,
  });
  return renderToString(<Component />);
}
