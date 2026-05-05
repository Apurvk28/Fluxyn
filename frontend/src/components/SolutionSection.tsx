import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { VideoBackground } from "./VideoBackground";

export function SolutionSection() {
  const features = [
    {
      title: "Intent Engine",
      description: "Understands your prompts at a deep level, translating raw ideas into structured website blueprints automatically.",
    },
    {
      title: "Instant Generation",
      description: "Transforms concepts into fully functional, responsive websites in seconds—no manual setup, no friction.",
    },
    {
      title: "Adaptive Design System",
      description: "A dynamic UI engine that learns your style, refining layouts, components, and interactions as you build.",
    },
    {
      title: "Momentum Optimization",
      description: "Continuously improves performance, structure, and user flow—so your website stays fast, relevant, and conversion-ready.",
    },
  ];

  return (
    <section className="py-32 md:py-44 border-t border-border/30 container mx-auto px-8 md:px-28">
      <motion.div {...fadeUp(0.1)} className="mb-12">
        <span className="text-xs tracking-[3px] uppercase text-muted-foreground block mb-4">
          SOLUTION
        </span>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
          The layer for <span className="font-serif italic font-normal">predictive</span> intelligence
        </h2>
      </motion.div>

      <motion.div {...fadeUp(0.2)} className="relative w-full aspect-[3/1] mb-20 rounded-2xl overflow-hidden liquid-glass p-1">
        <VideoBackground
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
          className="w-full h-full rounded-xl"
        />
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div key={feature.title} {...fadeUp(0.3 + index * 0.1)}>
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
