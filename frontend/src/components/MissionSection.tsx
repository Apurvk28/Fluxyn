import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WordReveal = ({ 
  text, 
  progress, 
  range, 
  highlightWords = [] 
}: { 
  text: string; 
  progress: any; 
  range: [number, number]; 
  highlightWords?: string[] 
}) => {
  const words = text.split(" ");
  return (
    <span className="flex flex-wrap justify-center gap-x-2 md:gap-x-3">
      {words.map((word, i) => {
        const start = range[0] + (i / words.length) * (range[1] - range[0]);
        const end = start + (1 / words.length) * (range[1] - range[0]);
        const opacity = useTransform(progress, [start, end], [0.15, 1]);
        const isHighlighted = highlightWords.includes(word.replace(/[^a-zA-Z]/g, ''));

        return (
          <motion.span 
            key={i} 
            style={{ opacity }}
            className={isHighlighted ? "text-foreground" : "text-[hsl(var(--hero-subtitle))]"}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

export function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const p1 = "We’re building a space where ideas transform into experiences — where creators move from imagination to execution instantly, and every prompt becomes a website worth launching. An AI-native platform where design, code, and creativity flow together seamlessly — turning vision into production-ready products in seconds.";
  const p2 = "A platform where ideas, design, and code flow together — with less complexity, less manual work, and more creation at the speed of thought.";

  return (
    <section ref={containerRef} className="pt-0 pb-32 md:pb-44 container mx-auto px-8 md:px-16 lg:px-20">
      <div className="flex justify-center mb-20">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[800px] aspect-square object-cover rounded-2xl"
        />
      </div>

      <div className="w-full mx-auto text-center">
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-snug">
          <WordReveal 
            text={p1} 
            progress={scrollYProgress} 
            range={[0, 0.6]} 
            highlightWords={["ideas", "transform", "experiences", "instantly"]} 
          />
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-snug">
          <WordReveal 
            text={p2} 
            progress={scrollYProgress} 
            range={[0.6, 1]} 
          />
        </div>
      </div>
    </section>
  );
}
