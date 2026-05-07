import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { VideoBackground } from "./VideoBackground";

export function HeroSection() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    navigate("/login");
  };

  return (
    <section className="relative min-h-screen pb-32 flex flex-col justify-start overflow-hidden">
      <VideoBackground
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
        className="absolute inset-0 w-full h-full z-0"
        overlayOpacity={0}
      />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-28 text-center pt-28 md:pt-32 flex flex-col items-center">
        {/* Avatars & Subtitle */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-col items-center justify-center mb-8 gap-4"
        >
          <div className="flex -space-x-2">
            <img src="/avatar-1.png" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
            <img src="/avatar-2.png" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
            <img src="/avatar-3.png" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
          </div>
          <span className="text-muted-foreground text-sm">7,000+ people already subscribed</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6 text-foreground"
        >
          Build websites at the <span className="font-serif italic font-normal">speed</span> of thought
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-lg mb-12 max-w-2xl text-[hsl(var(--hero-subtitle))]"
        >
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        {/* Email form */}
        <motion.div
          {...fadeUp(0.4)}
          className="w-full max-w-lg"
        >
          <form onSubmit={handleGetStarted} className="liquid-glass rounded-full p-2 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe It. Fluxyn Builds It."
              className="flex-1 bg-transparent border-none text-foreground px-6 py-2 focus:outline-none placeholder:text-muted-foreground text-sm"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-foreground text-background rounded-full px-8 py-3 font-semibold text-sm transition-all whitespace-nowrap"
            >
              Get Started
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
