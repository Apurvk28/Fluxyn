import { Link } from "react-router-dom";
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60 group-hover:border-foreground transition-colors">
      <div className="w-3 h-3 rounded-full border border-foreground/60" />
    </div>
    <span className="font-bold text-lg text-foreground">Fluxyn</span>
  </div>
);

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-8 md:px-28 py-4 bg-transparent flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Link to="/">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-muted-foreground text-sm font-medium">
          <a href="#" className="hover:text-foreground transition-colors">Home</a>
          <span className="opacity-40">•</span>
          <a href="#" className="hover:text-foreground transition-colors">How It Works</a>
          <span className="opacity-40">•</span>
          <a href="#" className="hover:text-foreground transition-colors">Philosophy</a>
          <span className="opacity-40">•</span>
          <a href="#" className="hover:text-foreground transition-colors">Use Cases</a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:scale-110 transition-transform">
          <Instagram className="w-4 h-4" />
        </button>
        <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:scale-110 transition-transform">
          <Linkedin className="w-4 h-4" />
        </button>
        <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:scale-110 transition-transform">
          <Twitter className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
