import { AspectRatio } from "./ui/aspect-ratio";

export function Image({
  alt = "",
  src,
  height,
  width,
  ...props
}: {
  alt: string;
  src: string;
  height: number;
  width: number;
  className?: string;
}) {
  return (
    <AspectRatio ratio={width / height} className="flex justify-center">
      <img
        src={src}
        height={height}
        width={width}
        loading="lazy"
        {...props}
        alt={alt}
      />
    </AspectRatio>
  );
}
