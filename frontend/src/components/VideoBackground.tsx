import { useEffect, useRef, memo } from "react";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  isHls?: boolean;
  overlayOpacity?: number;
}

export const VideoBackground = memo(({ 
  src, 
  className = "", 
  isHls = false,
  overlayOpacity = 0.6 
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHls) {
      import("hls.js").then((Hls) => {
        if (Hls.default.isSupported()) {
          const hls = new Hls.default();
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(Hls.default.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {});
          });

          return () => {
            hls.destroy();
          };
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = src;
          video.addEventListener("loadedmetadata", () => {
            video.play().catch(() => {});
          });
        }
      });
    }
  }, [src, isHls]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full object-cover"
        src={!isHls ? src : undefined}
      >
        {!isHls && <source src={src} type="video/mp4" />}
      </video>
      <div 
        className="absolute inset-0 bg-black transition-opacity duration-700" 
        style={{ opacity: overlayOpacity }} 
      />
    </div>
  );
});

