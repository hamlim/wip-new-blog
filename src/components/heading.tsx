import type { ComponentProps } from "react";

let classes = {
  1: "text-4xl font-bold text-gray-900 dark:text-gray-100",
  2: "text-3xl font-semibold text-gray-800 dark:text-gray-200",
  3: "text-2xl font-medium text-gray-700 dark:text-gray-300",
  4: "text-xl font-medium text-gray-600 dark:text-gray-400",
  5: "text-lg font-medium text-gray-500",
  6: "text-base font-medium text-gray-400 dark:text-gray-600",
} as const;

export function Heading({
  level,
  ...props
}: ComponentProps<"h1"> & { level: 1 | 2 | 3 | 4 | 5 | 6 }) {
  let className = classes[level];
  let Element = `h${level}` as const;
  return <Element className={className} {...props} />;
}
