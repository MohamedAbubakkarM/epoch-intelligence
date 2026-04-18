"use client";

import { motion } from "framer-motion";
import { GitCommitHorizontal, Layers, Orbit } from "lucide-react";

export function VisualShowcase() {
  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(207,174,96,0.08),transparent_40%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="lg:w-5/12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#cfae60]/30 bg-[#cfae60]/10 text-[#ecdbb0] text-xs font-bold tracking-widest uppercase mb-6"
          >
            Dimensional View
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-medium mb-8 leading-[1.15] text-slate-50 drop-shadow-md"
          >
            Experience Intelligence <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecdbb0] to-[#cfae60] italic pr-2">in Three Dimensions.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base md:text-lg font-sans mb-12 leading-relaxed font-light"
          >
            Epoch doesn&apos;t just throw articles at you. Our intelligence engine breaks down what happened, maps out the chronological buildup, and extracts insights the mainstream misses.
          </motion.p>
          
          <ul className="space-y-6">
            {[
              { icon: <Layers strokeWidth={1.5} className="w-6 h-6 text-theme-gold" />, text: <><strong className="text-slate-100 font-medium">Clean Summaries</strong> without editorial bloat.</> },
              { icon: <GitCommitHorizontal strokeWidth={1.5} className="w-6 h-6 text-theme-gold" />, text: <><strong className="text-slate-100 font-medium">Interactive Timelines</strong> mapping causality.</> },
              { icon: <Orbit strokeWidth={1.5} className="w-6 h-6 text-theme-gold" />, text: <><strong className="text-slate-100 font-medium">Hidden Insights</strong> forecasting consequences.</> }
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-5 text-slate-300 font-sans text-lg font-light group"
              >
                <div className="p-4 bg-white/5 rounded-[1.25rem] border border-white/10 group-hover:border-theme-gold/30 group-hover:bg-theme-gold/10 transition-colors duration-500 shadow-md">
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Mock UI Showcase - Fixed Layout */}
        <div className="lg:w-7/12 relative h-auto flex flex-col items-center justify-center gap-6 md:gap-8 mt-10 lg:mt-0 w-full max-w-2xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-theme-charcoal backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative z-20 hover:border-theme-gold/30 transition-colors hover:shadow-[0_10px_40px_rgba(207,174,96,0.1)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/10 text-[10px] font-bold px-3 py-1 rounded-full text-slate-300 tracking-widest uppercase border border-white/5">Geopolitics</span>
              <span className="text-xs text-slate-400 font-light tracking-wide">4 min read</span>
            </div>
            <h4 className="font-serif font-medium text-xl md:text-2xl mb-4 text-slate-50 leading-snug drop-shadow-sm">Global Supply Chains Realign in Asia</h4>
            <div className="space-y-3">
              <div className="h-2.5 w-full bg-white/10 rounded-full"></div>
              <div className="h-2.5 w-5/6 bg-white/10 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full ml-auto md:ml-12 lg:ml-24 bg-theme-navy backdrop-blur-3xl border border-theme-gold/30 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative z-30"
          >
             <div className="flex items-center justify-between mb-8">
              <h4 className="font-serif font-medium italic text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#ecdbb0] to-[#cfae60]">Where it all started</h4>
            </div>
            <div className="relative border-l border-white/20 ml-3 space-y-8">
              <div className="relative pl-8">
                <div className="absolute w-3.5 h-3.5 bg-theme-gold rounded-full -left-[7px] top-1 shadow-[0_0_15px_rgba(207,174,96,0.9)]"></div>
                <div className="text-xs text-theme-gold-light mb-1.5 font-bold tracking-widest uppercase">2018 - Phase 1</div>
                <div className="text-base font-light text-slate-100">The Initial Trade Friction</div>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-3.5 h-3.5 bg-theme-charcoal border-2 border-theme-gold/50 rounded-full -left-[7px] top-1"></div>
                <div className="text-xs text-slate-400 mb-1.5 font-bold tracking-widest uppercase">2021 - Phase 2</div>
                <div className="text-base font-light text-slate-300">Strict Pandemic Decoupling</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full mr-auto md:mr-12 lg:mr-24 bg-gradient-to-b from-[#1a1b26] to-[#0f111a] border border-theme-gold/40 p-8 rounded-[2rem] shadow-2xl relative z-40 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-5 text-theme-gold-light">
              <Orbit strokeWidth={2} className="w-5 h-5" />
              <span className="font-bold text-xs tracking-widest uppercase">Epoch Insight</span>
            </div>
            <p className="text-base text-slate-200 font-sans font-light leading-relaxed">
              While general media focuses heavily on explicit tariffs, the underlying structural effect is an <span className="text-theme-gold font-medium">acceleration in localized manufacturing</span>, fundamentally altering the 10-year semiconductor demand cycle.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
