"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-sans font-bold text-theme-gold mb-12 tracking-[0.2em] uppercase"
        >
          Intelligence over Engagement
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-[1.2] mb-14 font-medium italic px-4"
        >
          &ldquo;Finally, an intelligence platform designed for clarity and context rather than clicks.&rdquo;
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="text-lg font-sans font-medium text-foreground tracking-wide">Built for Institutional Thinkers</div>
          <div className="text-muted-foreground text-sm font-light">Join 500 early waitlist members.</div>
        </motion.div>
      </div>
    </section>
  );
}
