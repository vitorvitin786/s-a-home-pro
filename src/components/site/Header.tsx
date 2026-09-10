import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-white/15 bg-[#111214]/95 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between gap-4 md:h-24">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="/sa-homes-logo.png"
              alt="S&A Homes Services"
              width={180}
              height={134}
              className="h-16 w-auto object-contain md:h-20"
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-transparent px-3 py-3 text-sm font-medium text-white/75 transition-colors hover:text-white"
                activeProps={{ className: "border-white text-white" }}
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
              className="grid size-11 place-items-center rounded-sm border border-border xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background xl:hidden" aria-label="Mobile">
            <div className="container-x flex flex-col py-2">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 font-display text-sm font-semibold uppercase tracking-wide"
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
      </div>
    </header>
  );
}
