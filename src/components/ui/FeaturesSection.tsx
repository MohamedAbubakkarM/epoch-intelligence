"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-32 px-6 bg-black/60 backdrop-blur-3xl border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            Choose Your Layer
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-slate-50 drop-shadow-md"
          >
            Built for thinkers <br className="hidden md:block"/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ecdbb0] to-[#cfae60] pr-2">at every level.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base md:text-lg font-sans max-w-2xl mx-auto font-light"
          >
            Whether you just want the pristine facts or deep geopolitical forecasting, we have a layer tailored for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] backdrop-blur-xl flex flex-col hover:bg-white/10 transition-colors duration-500"
          >
            <div className="mb-6">
              <h3 className="text-xl font-serif font-medium mb-2 text-slate-50">Epoch Essential</h3>
              <p className="text-slate-400 font-sans text-sm font-light">Perfect for staying informed without the noise.</p>
            </div>
            <div className="mb-8 items-baseline gap-2 flex">
              <span className="text-4xl font-bold text-slate-50">$0</span>
              <span className="text-slate-400 text-base font-medium tracking-wide">/ forever (₹0)</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Clean, bias-free summaries",
                "Key terms & entities explained",
                "Ad-free reading experience",
                "Zero sensationalism"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/20">
                    <Check strokeWidth={1.5} className="w-3.5 h-3.5 text-slate-100" />
                  </div>
                  <span className="font-sans text-slate-300 font-light text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Tier */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative p-8 md:p-10 rounded-[2rem] flex flex-col"
          >
            {/* Background wrap, handles overflow correctly */}
            <div className="absolute inset-0 bg-gradient-to-br from-theme-charcoal via-[#121620] to-[#0d121c] border border-theme-gold/30 rounded-[2rem] backdrop-blur-xl shadow-[0_0_50px_rgba(207,174,96,0.15)] overflow-hidden -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(207,174,96,0.15),transparent_50%)] pointer-events-none"></div>
            </div>

            <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-[#cfae60] to-[#ecdbb0] text-black px-5 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-[0_10px_30px_rgba(207,174,96,0.4)] tracking-wider uppercase z-20">
              <Sparkles strokeWidth={1.5} className="w-3.5 h-3.5" /> Waitlist Open
            </div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-xl font-serif font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#cfae60] to-[#ecdbb0] mb-2">Epoch Intelligence</h3>
              <p className="text-slate-400 font-sans text-sm font-light">For those who need to understand the future.</p>
            </div>
            <div className="mb-8 items-baseline gap-2 flex relative z-10">
              <span className="text-4xl font-bold text-[#ecdbb0]">$5.99</span>
              <span className="text-slate-400 text-base font-medium tracking-wide">/ month (₹499)</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow relative z-10">
              {[
                "Everything in Essential",
                "Historical Timelines ('Where it all started')",
                "Hidden Insights & Data Patterns",
                "Future Predictions & Implications",
                "Expert Analysis Mode"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-theme-gold/10 border border-theme-gold/30">
                    <Check strokeWidth={1.5} className="w-3.5 h-3.5 text-[#ecdbb0]" />
                  </div>
                  <span className="font-sans text-slate-200 font-light text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
