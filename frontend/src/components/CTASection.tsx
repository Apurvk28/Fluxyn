import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hls from "hls.js";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const LogoLarge = () => (
  <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/60 mb-8 mx-auto">
    <div className="w-5 h-5 rounded-full border border-foreground/60" />
  </div>
);

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log("Autoplay blocked:", e));
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((e) => console.log("Autoplay blocked:", e));
      });
    }
  }, []);

  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center flex flex-col items-center">
        <motion.div {...fadeUp(0.1)}>
          <Link to="/">
            <LogoLarge />
          </Link>
        </motion.div>
        
        <motion.h2 
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-serif italic text-foreground mb-6"
        >
          build websites at the speed of thought
        </motion.h2>
      </div>
    </section>
  );
}
