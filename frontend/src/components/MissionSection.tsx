import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VideoBackground } from "./VideoBackground";

function WordReveal({ text, highlightWords, progress, start, end, baseClass }: any) {
  const words = text.split(" ");
  
  return (
    <p className={baseClass}>
      {words.map((word: string, i: number) => {
        const step = (end - start) / words.length;
        const wordStart = start + step * i;
        const wordEnd = start + step * (i + 1);
        
        return (
          <Word 
            key={i} 
            word={word} 
            progress={progress} 
            range={[wordStart, wordEnd]} 
            isHighlight={highlightWords.includes(word.replace(/[^a-zA-Z]/g, ''))} 
          />
        );
      })}
    </p>
  );
}

function Word({ word, progress, range, isHighlight }: any) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span 
      style={{ opacity }} 
      className={`inline-block mr-[0.25em] ${isHighlight ? 'text-white' : 'text-zinc-500'}`}
    >
      {word}
    </motion.span>
  );
}

export function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const p1 = "We’re building a system where complexity collapses into creation—where scattered ideas converge into complete digital experiences.";
  const p2 = "An intelligent layer that understands intent, generates structure instantly, and gives you the clarity to launch ahead of everyone else.";
  const highlights = ["creation", "experiences", "instantly"];

  return (
    <section className="bg-black pt-0 pb-32 md:pb-44 container mx-auto px-8 md:px-28">
      {/* Centered Square Video */}
      <div className="flex justify-center mb-24">
        <div className="relative w-full max-w-[700px] aspect-square rounded-2xl overflow-hidden border border-white/10 p-2 bg-zinc-900/50">
          <VideoBackground
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
            className="w-full h-full rounded-xl"
            overlayOpacity={0}
          />
        </div>
      </div>

      {/* Word Reveal Text */}
      <div ref={containerRef} className="max-w-5xl mx-auto">
        <WordReveal 
          text={p1} 
          highlightWords={highlights} 
          progress={scrollYProgress} 
          start={0} 
          end={0.5} 
          baseClass="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight" 
        />
        <div className="h-10 md:h-16" />
        <WordReveal 
          text={p2} 
          highlightWords={[]} 
          progress={scrollYProgress} 
          start={0.5} 
          end={1} 
          baseClass="text-xl md:text-2xl lg:text-3xl font-medium leading-tight" 
        />
      </div>
    </section>
  );
}
