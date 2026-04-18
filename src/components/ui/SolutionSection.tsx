"use client";

import { motion } from "framer-motion";
import { Lightbulb, Workflow, Target } from "lucide-react";

const solutions = [
  {
    icon: <Target strokeWidth={1} className="w-8 h-8 text-theme-charcoal" />,
    title: "Absolute Clarity",
    description: "No clickbait. No fluff. Just the facts you need, summarized intelligently so you can grasp the core issue in seconds."
  },
  {
    icon: <Workflow strokeWidth={1} className="w-8 h-8 text-theme-charcoal" />,
    title: "Deep Context",
    description: "Every event is connected. We map out the historical precedence so you understand exactly how we got here."
  },
  {
    icon: <Lightbulb strokeWidth={1} className="w-8 h-8 text-theme-charcoal" />,
    title: "Actionable Intelligence",
    description: "Go beyond the surface. Discover hidden insights and understand what this means for the future."
  }
];

export function SolutionSection() {
  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-theme-gold/30 bg-theme-gold/10 text-theme-gold-light text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(207,174,96,0.1)]">
              The Epoch Framework
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-8 leading-[1.15] text-slate-50 drop-shadow-md">
              A New Standard for <br/> 
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ecdbb0] to-[#cfae60] pr-2">Global Intelligence.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-sans mb-10 leading-relaxed font-light">
              We built Epoch because finding the truth in a sea of noise has become a full-time job. 
              Our AI engine deeply analyzes thousands of global sources, providing you with pristine, connected understanding of world events.
            </p>
          </motion.div>
          
          <div className="lg:w-1/2 flex flex-col gap-8 w-full">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                className="group flex flex-col sm:flex-row gap-6 items-start bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-theme-gold/50 hover:bg-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-48 h-48 bg-theme-gold/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="p-4 bg-gradient-to-br from-theme-gold to-[#a88a45] rounded-2xl shrink-0 shadow-[0_0_15px_rgba(207,174,96,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-serif font-medium mb-3 text-slate-50 group-hover:text-theme-gold-light transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
