export function Image({
  alt,
  src,
  height,
  width,
}: {
  alt: string;
  src: string;
  height: number;
  width: number;
}) {
  return (
    <div className="relative">
      <img src={src} alt={alt} height={height} width={width} />
    </div>
  );
}
