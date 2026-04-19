"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useSubscribe } from "@/hooks/useSubscribe";

export function CTASection() {
  const { email, setEmail, status, message, handleSubmit } = useSubscribe();
  
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-3xl p-14 md:p-24 rounded-[3rem] relative shadow-2xl overflow-hidden group">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-20 w-64 h-64 bg-theme-gold/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-theme-gold/20 transition-colors duration-1000"></div>
        <div className="absolute -bottom-24 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-slate-50 mb-8 leading-[1.15] drop-shadow-md relative z-10"
        >
          Stop reading blindly. <br className="hidden sm:block"/>
          Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecdbb0] to-[#cfae60] italic pr-2">understanding.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-sans font-light relative z-10"
        >
          Join thousands of thinkers, executives, and strategists who have entirely upgraded their intelligence feed. Secure your priority access before the public rollout.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative z-10 max-w-md mx-auto"
        >
          {status === "success" ? (
             <div className="px-8 py-4 bg-white/5 border border-theme-gold/30 rounded-full text-theme-gold-light font-medium tracking-wide shadow-[0_0_20px_rgba(207,174,96,0.1)] mb-8">
               {message}
             </div>
          ) : (
            <div className="w-full">
              <form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full relative"
              >
                <div className="relative w-full">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-slate-100 placeholder-slate-400 outline-none focus:border-[#cfae60] focus:ring-1 focus:ring-[#cfae60]/50 transition-all font-sans disabled:opacity-50"
                    disabled={status === "loading"}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="group/btn relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-gradient-to-r from-[#cfae60] to-[#ecdbb0] rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(207,174,96,0.3)] hover:shadow-[0_0_50px_rgba(207,174,96,0.5)] shrink-0 disabled:opacity-70 disabled:hover:scale-100"
                >
                  <span className="mr-2">{status === "loading" ? "Joining..." : "Join Waitlist"}</span>
                  <MoveRight strokeWidth={2} className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
              </form>
              {status === "error" && (
                <div className="mt-3 text-red-400 text-sm font-sans px-4 text-center" dangerouslySetInnerHTML={{ __html: message }} />
              )}
            </div>
          )}
          <p className="mt-8 text-xs text-[#cfae60]/60 font-sans tracking-widest uppercase font-bold">Priority Spots Limited • Phase 1 Beta</p>
        </motion.div>
      </div>
    </section>
  );
}
