import type { ComponentProps } from "react";
import { Abbr } from "#/components/abbr";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";

export function useMDXComponents() {
  return {
    h1(props: ComponentProps<"h1">) {
      return <Heading level={1} {...props} />;
    },
    h2(props: ComponentProps<"h2">) {
      return <Heading level={2} {...props} />;
    },
    h3(props: ComponentProps<"h3">) {
      return <Heading level={3} {...props} />;
    },
    h4(props: ComponentProps<"h4">) {
      return <Heading level={4} {...props} />;
    },
    h5(props: ComponentProps<"h5">) {
      return <Heading level={5} {...props} />;
    },
    h6(props: ComponentProps<"h6">) {
      return <Heading level={6} {...props} />;
    },
    a(props: ComponentProps<"a">) {
      return (
        <a
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&.state-disabled]:text-gray-400 [&.state-disabled]:cursor-not-allowed text-primary underline-offset-4 hover:underline focus:underline"
          {...props}
        />
      );
    },
    p(props: ComponentProps<"p">) {
      return <p {...props} />;
    },
    ul(props: ComponentProps<"ul">) {
      return <ul {...props} />;
    },
    ol(props: ComponentProps<"ol">) {
      return <ol {...props} />;
    },
    blockquote(props: ComponentProps<"blockquote">) {
      return <blockquote {...props} />;
    },
    pre(props: ComponentProps<"pre">) {
      return <pre data-mdx="true" {...props} />;
    },

    // custom components
    Spacer,
    Abbr,
    Callout(props: ComponentProps<"div">) {
      return <div className="rounded-md bg-blue-50 p-4" {...props} />;
    },
  };
}
