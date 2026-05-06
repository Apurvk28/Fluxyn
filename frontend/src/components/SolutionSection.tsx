import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function SolutionSection() {
  const features = [
    {
      title: "Intent Engine",
      description: "Understands your prompts at a deep level, translating raw ideas into structured website blueprints automatically."
    },
    {
      title: "Instant Generation",
      description: "Transforms concepts into fully functional, responsive websites in seconds—no manual setup, no friction."
    },
    {
      title: "Adaptive Design System",
      description: "A dynamic UI engine that learns your style, refining layouts, components, and interactions as you build."
    },
    {
      title: "Momentum Optimization",
      description: "Continuously improves performance, structure, and user flow—so your website stays fast, relevant, and conversion-ready."
    }
  ];

  return (
    <section className="py-32 md:py-44 border-t border-border/30 container mx-auto px-8 md:px-28">
      <div className="text-center mb-16">
        <motion.p 
          {...fadeUp(0.1)}
          className="text-xs tracking-[3px] uppercase text-muted-foreground mb-6"
        >
          SOLUTION
        </motion.p>
        <motion.h2 
          {...fadeUp(0.2)}
          className="text-4xl md:text-6xl font-medium text-foreground tracking-tight"
        >
          The platform for <span className="font-serif italic font-normal">meaningful</span> content
        </motion.h2>
      </div>

      <motion.div 
        {...fadeUp(0.3)}
        className="w-full mb-20"
      >
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full aspect-[3/1] object-cover rounded-2xl"
        />
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div 
            key={feature.title}
            {...fadeUp(0.4 + i * 0.1)}
            className="flex flex-col"
          >
            <h3 className="font-semibold text-base text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
