export function Footer() {
  return (
    <footer className="py-16 px-6 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-3xl font-serif tracking-[0.1em] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#cfae60] to-[#ecdbb0] mb-2 select-none">EPOCH</span>
          <span className="text-sm text-muted-foreground font-sans font-light tracking-wide">Geopolitical & Financial Intelligence</span>
        </div>
        
        <div className="flex gap-8 text-sm font-sans font-medium text-muted-foreground">
          <a href="#" className="hover:text-theme-gold-light transition-colors">Manifesto</a>
          <a href="#" className="hover:text-theme-gold-light transition-colors">Pricing</a>
          <a href="#" className="hover:text-theme-gold-light transition-colors">Privacy</a>
          <a href="#" className="hover:text-theme-gold-light transition-colors">Terms</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground/40 font-sans font-light">
        &copy; {new Date().getFullYear()} Epoch Intelligence, Inc. All rights reserved.
      </div>
    </footer>
  );
}
