import type { ReactNode } from "react";

export function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  ...props
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  [key: string]: unknown;
}): ReactNode {
  return (
    <picture>
      <source srcSet={lightSrc} media="(prefers-color-scheme: light)" />
      <source srcSet={darkSrc} media="(prefers-color-scheme: dark)" />
      <img src={lightSrc} {...props} alt={alt} />
    </picture>
  );
}
