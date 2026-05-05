import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { VideoBackground } from "./VideoBackground";

export function CTASection() {
  return (
    <section className="relative py-44 md:py-64 border-t border-white/10 overflow-hidden min-h-[80vh] flex items-center justify-center">
      <VideoBackground
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full z-0"
        isHls={true}
        overlayOpacity={0.4}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      <div className="relative z-10 text-center flex flex-col items-center px-6">
        {/* Logo Icon */}
        <motion.div {...fadeUp(0.1)} className="mb-10">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/60">
            <div className="w-5 h-5 rounded-full border border-white/60" />
          </div>
        </motion.div>

        <motion.h2 
          {...fadeUp(0.2)} 
          className="text-4xl md:text-7xl font-bold mb-6 text-white max-w-4xl leading-tight"
        >
          Build Websites at the Speed of Thought
        </motion.h2>

        <motion.p 
          {...fadeUp(0.3)} 
          className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-medium"
        >
          Uncover the trends of tomorrow and build a predictive edge.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          {...fadeUp(0.4)} 
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all">
            Get Started
          </button>
          <button className="liquid-glass px-10 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
