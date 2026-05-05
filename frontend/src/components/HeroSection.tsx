import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { VideoBackground } from "./VideoBackground";

export function HeroSection() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleGetStarted = () => {
    if (!inputValue) return;
    navigate("/new-page");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <VideoBackground
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
        className="absolute inset-0 w-full h-full z-0"
        overlayOpacity={0.4}
      />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-28 text-center pt-20">
        {/* Avatars & Subtitle ABOVE heading */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-col items-center justify-center mb-8 gap-4"
        >
          <div className="flex -space-x-2">
            <img src="/avatar-1.png" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
            <img src="/avatar-2.png" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
            <img src="/avatar-3.png" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
          </div>
          <span className="text-white/60 text-sm font-medium">7,000+ people already subscribed</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tight mb-12 text-white leading-[1.05]"
        >
          Build Websites <br /> at the Speed <br /> of Thought
        </motion.h1>

        {/* Input & Button */}
        <motion.div
          {...fadeUp(0.3)}
          className="max-w-lg mx-auto"
        >
          <div className="liquid-glass rounded-full p-2 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe It. Fluxyn Builds It"
              className="flex-1 bg-transparent border-none text-white px-6 py-2 focus:outline-none placeholder:text-white/40 text-sm"
            />
            <motion.button
              onClick={handleGetStarted}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black rounded-full px-8 py-3 font-semibold text-sm transition-all hover:bg-zinc-100 whitespace-nowrap"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
