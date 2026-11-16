import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-[#050b14]/95 text-white shadow-[0_8px_30px_rgba(0,0,0,.22)] backdrop-blur-xl">
      <div className="container-x flex h-[74px] items-center justify-between gap-3 md:h-24">
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <div className="flex items-center gap-2.5" aria-label="S&A Homes Services home">
            <svg viewBox="0 0 64 58" role="img" aria-label="S&A roof mark" className="h-11 w-12 shrink-0 md:h-14 md:w-16" fill="none">
              <path d="M4 30 31 6l29 24M13 25V52h38V25M23 52V34h16v18M29 16h7v9h-7z" stroke="#63B5FF" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
              <path d="M5 56h54" stroke="#E6F3FF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="flex flex-col leading-tight">
              <span className="text-[13px] font-extrabold tracking-[.045em] text-white sm:text-base md:text-xl">S&amp;A HOMES</span>
              <span className="text-[10px] font-semibold tracking-[.24em] text-[#A9D7FF] sm:text-xs">SERVICES</span>
              <span className="mt-1 hidden text-[9px] uppercase tracking-[.12em] text-white/70 sm:block">Remodeling &amp; Renovation</span>
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border-b border-transparent px-3 py-3 text-sm font-medium text-white/70 transition-colors hover:border-primary/70 hover:text-white"
              activeProps={{ className: "border-primary text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="cta" size="lg" className="hidden sm:inline-flex">
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md border border-primary/35 bg-white/[.03] text-white transition hover:border-primary hover:bg-primary/10 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-primary/15 bg-[#07101e] xl:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white/80"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="xl" className="my-4">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get a Free Estimate
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
