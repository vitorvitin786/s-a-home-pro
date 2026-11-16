import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Star } from "lucide-react";
import { serviceAreas, site } from "@/lib/site";

const quickLinks = [
  { label: "Tile Installation", to: "/tile-installation-jacksonville" },
  { label: "LVP Flooring", to: "/lvp-vinyl-flooring-jacksonville" },
  { label: "Bathroom Remodeling", to: "/bathroom-remodeling-jacksonville" },
  { label: "Kitchen Remodeling", to: "/kitchen-remodeling-jacksonville" },
  { label: "Floor Prep & Leveling", to: "/floor-preparation-leveling" },
  { label: "Pavers & Outdoor", to: "/pavers" },
  { label: "Commercial Projects", to: "/commercial" },
  { label: "Free Estimate", to: "/contact" },
] as const;

const socialLinks: { href: string | null; label: string; icon: import("lucide-react").LucideIcon }[] = [
  { href: site.social.facebook, label: "Facebook", icon: Facebook },
  { href: site.social.instagram, label: "Instagram", icon: Instagram },
  { href: site.social.google, label: "Google Business Profile", icon: Star },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

export function Footer() {
  return (
    <footer className="bg-charcoal pb-24 text-charcoal-foreground md:pb-0">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-2.5" aria-label="S&A Homes Services home">
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
          <p className="font-display text-lg font-extrabold uppercase tracking-tight">
            {site.name}
          </p>
          <p className="mt-3 text-sm text-charcoal-foreground/70">
            Jacksonville, Florida
            <br />
            {site.areaLine}
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a className="flex items-center gap-2 hover:text-primary" href={site.telHref}>
              <Phone className="size-4" aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <a className="flex items-center gap-2 hover:text-primary" href={site.mailHref}>
              <Mail className="size-4" aria-hidden="true" /> {site.email}
            </a>
            <p className="flex items-center gap-2 text-charcoal-foreground/70">
              <MapPin className="size-4" aria-hidden="true" /> Jacksonville & Northeast Florida
            </p>
          </div>
          {socialLinks.length > 0 && (
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href ?? undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-sm border border-charcoal-foreground/20 hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-charcoal-foreground/80 hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Areas We Serve
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-charcoal-foreground/80">
            {serviceAreas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Start Your Project
          </h2>
          <p className="mt-4 text-sm text-charcoal-foreground/80">
            Free estimates on tile, LVP/vinyl flooring and complete remodeling projects across
            Northeast Florida.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={site.telHref}
              className="rounded-sm bg-primary px-5 py-3 text-center font-display text-sm font-bold uppercase tracking-wide text-primary-foreground"
            >
              Call Now
            </a>
            <a
              href={site.smsHref}
              className="rounded-sm border-2 border-charcoal-foreground/30 px-5 py-3 text-center font-display text-sm font-bold uppercase tracking-wide"
            >
              Text Us
            </a>
            <Link
              to="/contact"
              className="rounded-sm border-2 border-charcoal-foreground/30 px-5 py-3 text-center font-display text-sm font-bold uppercase tracking-wide"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-charcoal-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Tile · LVP & Vinyl Flooring · Bathroom & Kitchen Remodeling · Jacksonville, FL</p>
        </div>
      </div>
    </footer>
  );
}
