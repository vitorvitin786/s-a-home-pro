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
  { label: "Portfolio", to: "/portfolio" },
  { label: "Free Estimate", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-charcoal pb-24 text-charcoal-foreground md:pb-0">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
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
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook page (coming soon)"
              className="grid size-10 place-items-center rounded-sm border border-charcoal-foreground/20 hover:border-primary hover:text-primary"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram profile (coming soon)"
              className="grid size-10 place-items-center rounded-sm border border-charcoal-foreground/20 hover:border-primary hover:text-primary"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={site.social.google}
              aria-label="Google Business Profile (coming soon)"
              className="grid size-10 place-items-center rounded-sm border border-charcoal-foreground/20 hover:border-primary hover:text-primary"
            >
              <Star className="size-4" />
            </a>
          </div>
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
