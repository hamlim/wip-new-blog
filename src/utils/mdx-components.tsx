import type { ComponentProps } from "react";

export function useMDXComponents() {
  return {
    h1(props: ComponentProps<"h1">) {
      return (
        <h1
          className="text-4xl font-bold text-gray-900 dark:text-gray-100"
          {...props}
        />
      );
    },
    h2(props: ComponentProps<"h2">) {
      return (
        <h2
          className="text-3xl font-semibold text-gray-800 dark:text-gray-200"
          {...props}
        />
      );
    },
    h3(props: ComponentProps<"h3">) {
      return (
        <h3
          className="text-2xl font-medium text-gray-700 dark:text-gray-300"
          {...props}
        />
      );
    },
    h4(props: ComponentProps<"h4">) {
      return (
        <h4
          className="text-xl font-medium text-gray-600 dark:text-gray-400"
          {...props}
        />
      );
    },
    h5(props: ComponentProps<"h5">) {
      return <h5 className="text-lg font-medium text-gray-500" {...props} />;
    },
    h6(props: ComponentProps<"h6">) {
      return (
        <h6
          className="text-base font-medium text-gray-400 dark:text-gray-600"
          {...props}
        />
      );
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
    Spacer(props: ComponentProps<"div">) {
      // @ts-ignore
      // biome-ignore lint/a11y/noDistractingElements: <explanation>
      return <marquee {...props} className="mt-4" />;
    },
  };
}
