"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden px-6 pt-32 pb-20">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <div className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-theme-gold-light text-xs md:text-sm font-medium tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.03)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-gold"></span>
          </span>
          Early Access Waitlist Open
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-50 leading-[1.15] tracking-tight mb-8 drop-shadow-md"
        >
          Don&apos;t just consume information. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ebd599] via-[#cfae60] to-[#ecdbb0] italic pr-4">Understand the world.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed font-sans font-light"
        >
          The premier intelligence platform for geopolitics and finance. 
          We strip away the noise and sensationalism to give you pristine clarity, historical context, and predictive data.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto relative justify-center"
        >
          <div className="relative w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-slate-100 placeholder-slate-400 outline-none focus:border-[#cfae60] focus:ring-1 focus:ring-[#cfae60]/50 transition-all font-sans"
            />
          </div>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-black bg-gradient-to-r from-[#cfae60] to-[#ecdbb0] rounded-full overflow-hidden transition-all hover:scale-105 duration-300 shadow-[0_0_30px_rgba(207,174,96,0.3)] hover:shadow-[0_0_40px_rgba(207,174,96,0.5)] shrink-0">
            <span className="mr-2">Get Early Access</span>
            <ArrowRight strokeWidth={1.5} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
