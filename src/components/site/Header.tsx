import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-charcoal text-charcoal-foreground md:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <p className="tracking-wide">{site.areaLine} · 10+ Years of Hands-On Experience</p>
          <div className="flex items-center gap-5">
            <a className="hover:text-primary" href={site.mailHref}>
              {site.email}
            </a>
            <a className="inline-flex items-center gap-2 font-semibold" href={site.telHref}>
              <Phone className="size-3.5" aria-hidden="true" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid size-10 place-items-center rounded-sm bg-charcoal font-display text-sm font-extrabold text-charcoal-foreground">
              S&A
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-extrabold uppercase tracking-tight md:text-lg">
                S&A Homes Services
              </span>
              <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Tile · Flooring · Remodeling
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-sm px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outlineDark" size="lg" className="hidden lg:inline-flex">
              <a href={site.telHref}>
                <Phone aria-hidden="true" /> {site.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="cta" size="lg" className="hidden sm:inline-flex">
              <Link to="/contact">Free Estimate</Link>
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
