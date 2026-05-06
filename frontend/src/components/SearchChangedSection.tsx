import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function SearchChangedSection() {
  const platforms = [
    {
      name: "ChatGPT",
      icon: "/icon-chatgpt.png",
      description: "Direct answers without browsing multiple websites."
    },
    {
      name: "Perplexity",
      icon: "/icon-perplexity.png",
      description: "Conversational search engine for instant knowledge."
    },
    {
      name: "Google AI",
      icon: "/icon-google.png",
      description: "AI-generated summaries directly in search results."
    }
  ];

  return (
    <section className="pt-52 md:pt-64 pb-6 md:pb-9 container mx-auto px-8 md:px-28 text-center">
      <motion.h2 
        {...fadeUp(0.1)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-8"
      >
        Still building websites the <span className="font-serif italic font-normal">old</span> way?
      </motion.h2>

      <motion.p 
        {...fadeUp(0.2)}
        className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24"
      >
        From manual coding to AI-driven creation, the next step is instant generation.
        A system that turns your ideas into fully functional websites—before you even finish describing them.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {platforms.map((platform, i) => (
          <motion.div 
            key={platform.name}
            {...fadeUp(0.3 + i * 0.1)}
            className="flex flex-col items-center"
          >
            <div className="w-[200px] h-[200px] mb-8 relative flex items-center justify-center">
              <img 
                src={platform.icon} 
                alt={`${platform.name} icon`} 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-base text-foreground mb-2">{platform.name}</h3>
            <p className="text-muted-foreground text-sm max-w-[250px]">{platform.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.6)}>
        <p className="text-muted-foreground text-sm text-center">
          If you don't answer the questions, someone else will.
        </p>
      </motion.div>
    </section>
  );
}
