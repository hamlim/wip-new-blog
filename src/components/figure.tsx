import type { ReactNode } from "react";
import { Image } from "#/components/image";

export function Figure({
  alt = "",
  src,
  height,
  width,
  caption,
  ...props
}: {
  alt: string;
  src: string;
  height: number;
  width: number;
  caption: ReactNode;
}) {
  return (
    <figure
      {...props}
      className="p-2 border-2 border-gray-300 rounded-lg bg-gray-100"
    >
      <Image
        alt={alt}
        src={src}
        height={height}
        width={width}
        className="rounded-lg"
      />
      <figcaption className="text-gray-500 border-l-4 pl-4 py-2 m-2 border-gray-500 italic">
        {caption}
      </figcaption>
    </figure>
  );
}
