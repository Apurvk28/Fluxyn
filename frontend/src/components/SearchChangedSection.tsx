import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function SearchChangedSection() {
  const platforms = [
    {
      name: "Traditional Search",
      icon: "/icon-google.png",
      description: "Index the past. Find information when you actively search for it.",
    },
    {
      name: "AI Answers",
      icon: "/icon-chatgpt.png",
      description: "Synthesize the present. Get conversational answers instantly.",
    },
    {
      name: "Predictive Intelligence",
      icon: "/icon-perplexity.png", // Reusing the icon for the new layer
      description: "Anticipate the future. Surface signals before people search for them.",
    },
  ];

  return (
    <section className="pt-52 md:pt-64 pb-6 md:pb-9 container mx-auto px-8 md:px-28">
      <div className="text-center">
        <motion.h2
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8"
        >
          Still building websites the old way?
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24"
        >
          From manual coding to AI-driven creation, the next step is instant generation. A system that turns your ideas into fully functional websites—before you even finish describing them.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.3 + index * 0.1)}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[200px] h-[200px] mb-6 flex items-center justify-center liquid-glass rounded-2xl p-8">
              <img src={platform.icon} alt={platform.name} className="w-full h-full object-contain" />
            </div>
            <h3 className="font-semibold text-base mb-2">{platform.name}</h3>
            <p className="text-muted-foreground text-sm max-w-[200px]">{platform.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.6)} className="text-center">
        <p className="text-muted-foreground text-sm">
          If you rely on what's already trending, you are already too late.
        </p>
      </motion.div>
    </section>
  );
}
