export function Footer() {
  return (
    <footer className="py-12 px-8 md:px-28 border-t border-border/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-muted-foreground text-sm">
          © 2026 Fluxyn. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
