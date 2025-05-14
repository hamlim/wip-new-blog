"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";
import { AspectRatio } from "#/components/ui/aspect-ratio";

export function Video({
  playlist,
  width,
  height,
  className,
  ...props
}: {
  playlist: string;
  width: number;
  height: number;
  className?: string;
}) {
  let videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(playlist);
        hls.attachMedia(videoRef.current);
        // hls.on(Hls.Events.MANIFEST_PARSED, () => {
        //   videoRef.current?.play();
        // });
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = playlist;
        // videoRef.current.addEventListener("loadedmetadata", () => {
        //   videoRef.current?.play();
        // });
      }
    }
  }, [playlist]);

  return (
    <AspectRatio ratio={width / height} className="flex justify-center">
      <video ref={videoRef} height={height} width={width} {...props} />
    </AspectRatio>
  );
}
