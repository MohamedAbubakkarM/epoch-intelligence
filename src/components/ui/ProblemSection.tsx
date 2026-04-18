"use client";

import { motion } from "framer-motion";
import { AlertCircle, History, VolumeX } from "lucide-react";

const problems = [
  {
    icon: <VolumeX strokeWidth={1.5} className="w-8 h-8 text-[#ecdbb0]" />,
    title: "Endless Noise",
    description: "Sensational headlines designed for clicks, rather than understanding the core situation."
  },
  {
    icon: <History strokeWidth={1.5} className="w-8 h-8 text-[#ecdbb0]" />,
    title: "Zero Historical Context",
    description: "Reading what happened today without knowing the chain of events that started it all."
  },
  {
    icon: <AlertCircle strokeWidth={1.5} className="w-8 h-8 text-[#ecdbb0]" />,
    title: "Information Overload",
    description: "Drowning in endless articles while grasping none of the real-world implications."
  }
];

export function ProblemSection() {
  return (
    <section className="py-32 px-6 relative border-y border-white/5 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
            The Status Quo
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-8 leading-[1.15] text-slate-50 drop-shadow-md">
            The modern information cycle is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecdbb0] to-[#cfae60] italic pr-2">fundamentally broken.</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-sans leading-relaxed font-light mb-8">
            Modern media optimizes for outrage, leaving you anxious and completely uninformed. 
            Understanding complex geopolitics and markets is impossible with fragmented, biased information.
          </p>
        </motion.div>

        <div className="lg:w-1/2 flex flex-col gap-6 w-full">
          {problems.map((problem, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group flex flex-col sm:flex-row gap-6 items-start bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-theme-gold/50 hover:shadow-[0_0_40px_rgba(207,174,96,0.15)] transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-48 h-48 bg-theme-gold/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="p-4 bg-gradient-to-br from-[#1a1b26] to-[#0f111a] border border-white/10 rounded-2xl shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10 shadow-[inset_0_1px_rgba(255,255,255,0.05)]">
                {problem.icon}
              </div>
              <div className="relative z-10 mt-1 sm:mt-0">
                <h3 className="text-xl font-serif font-medium mb-3 text-slate-50 group-hover:text-[#ecdbb0] transition-colors">{problem.title}</h3>
                <p className="text-slate-300 font-sans text-base font-light leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
