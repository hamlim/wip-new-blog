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
  height: number | string;
  width: number | string;
  className?: string;
}) {
  let heightNum = Number.parseInt(height as string, 10);
  let widthNum = Number.parseInt(width as string, 10);

  return (
    <AspectRatio ratio={widthNum / heightNum} className="flex justify-center">
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
