import { HeroSection } from "@/components/ui/HeroSection";
import { ProblemSection } from "@/components/ui/ProblemSection";
import { SolutionSection } from "@/components/ui/SolutionSection";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { VisualShowcase } from "@/components/ui/VisualShowcase";
import { SocialProof } from "@/components/ui/SocialProof";
import { CTASection } from "@/components/ui/CTASection";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-theme-gold/30">
      {/* Sleek dynamic background gradient */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(207,174,96,0.08),rgba(0,0,0,1))]"></div>
      
      {/* Navigation - Glassmorphic fixed header */}
      <header className="fixed top-0 w-full p-5 lg:px-10 flex justify-between items-center z-50 backdrop-blur-xl border-b border-white/5 bg-background/50 transition-all duration-500">
        <div className="text-2xl tracking-[0.2em] font-serif font-medium text-foreground flex items-center gap-3 select-none">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-theme-gold to-theme-gold-light shadow-[0_0_15px_rgba(207,174,96,0.4)]"></div>
          EPOCH
        </div>
      </header>

      {/* Page Sections */}
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <VisualShowcase />
      <FeaturesSection />
      <SocialProof />
      <CTASection />
      <Footer />
    </main>
  );
}
