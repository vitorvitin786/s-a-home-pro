import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { faqs, faqSchema } from "@/data/faq";
import { EstimateForm } from "@/components/site/EstimateForm";
import { CtaBand } from "@/components/site/CtaBand";
import {
  CheckList,
  FaqSection,
  HowItWorks,
  ReviewsSection,
  SectionHeading,
  ServiceAreaSection,
  WhyChoose,
} from "@/components/site/Sections";
import heroImg from "@/assets/tile-installer-jacksonville-fl.jpg";
import tileImg from "@/assets/tile-shower-remodel-jacksonville.jpg";
import lvpImg from "@/assets/lvp-vinyl-flooring-jacksonville.jpg";
import kitchenImg from "@/assets/kitchen-remodeling-jacksonville.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tile & Flooring Contractor Jacksonville FL | S&A Homes Services" },
      {
        name: "description",
        content:
          "Professional tile installation, LVP/vinyl flooring and complete home remodeling in Jacksonville & Northeast Florida. 10+ years experience. Free estimates — (904) 554-7517.",
      },
      { property: "og:title", content: "Tile & Flooring Contractor Jacksonville FL | S&A Homes Services" },
      {
        property: "og:description",
        content:
          "Tile, LVP/vinyl flooring, bathroom and kitchen remodeling in Jacksonville, FL. Free estimates. Call or text (904) 554-7517.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Home,
});

const services = [
  {
    title: "Tile Installation",
    to: "/tile-installation-jacksonville",
    text: "Porcelain, ceramic and large-format tile for floors, walls, showers and backsplashes — set flat, sealed and finished right.",
    tag: "Specialty",
  },
  {
    title: "LVP & Vinyl Flooring",
    to: "/lvp-vinyl-flooring-jacksonville",
    text: "Waterproof luxury vinyl plank installed over properly prepped subfloors, with clean transitions and baseboards.",
    tag: "Specialty",
  },
  {
    title: "Bathroom Remodeling",
    to: "/bathroom-remodeling-jacksonville",
    text: "Complete bathroom renovations with custom tile showers, waterproofing, vanities, flooring and finish work.",
  },
  {
    title: "Kitchen Remodeling",
    to: "/kitchen-remodeling-jacksonville",
    text: "Cabinets, backsplash, tile, flooring, countertop coordination, drywall and painting from demo to finish.",
  },
  {
    title: "Floor Prep & Self-Leveling",
    to: "/floor-preparation-leveling",
    text: "Concrete prep, uneven floor correction and self-leveling so tile and LVP install flat and stay flat.",
  },
  {
    title: "Pavers & Outdoor Projects",
    to: "/pavers",
    text: "Paver patios, walkways and outdoor improvements built on properly compacted base.",
  },
  {
    title: "Drywall & Painting",
    to: "/remodeling-services",
    text: "Drywall installation, wall repair and interior painting as part of your remodeling finish work.",
  },
  {
    title: "Demolition",
    to: "/remodeling-services",
    text: "Flooring and tile removal, bathroom and kitchen demolition, prep and debris cleanup.",
  },
  {
    title: "General Home Remodeling",
    to: "/remodeling-services",
    text: "Project not listed? Talk to us. If it involves improving your home, we can help you figure out the best way to get it done.",
  },
] as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <img
          src={heroImg}
          alt="Tile installer spreading thinset for large-format floor tile on a Jacksonville FL remodel"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="container-x relative py-16 md:py-28">
          <p className="eyebrow">Jacksonville & Northeast Florida · 10+ Years Experience</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] md:text-6xl">
            Quality Remodeling.
            <br />
            Professional Tile &amp; Flooring.
            <br />
            <span className="text-primary">Built to Last.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-charcoal-foreground/85 md:text-lg">
            S&amp;A Homes Services provides professional tile, LVP/vinyl flooring and complete home
            remodeling services throughout Jacksonville and Northeast Florida. More than 10 years of
            hands-on experience and attention to every detail.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={site.telHref}>
                <Phone aria-hidden="true" /> Call or Text {site.phoneDisplay}
              </a>
            </Button>
          </div>
          <ul className="mt-10 grid max-w-3xl gap-3 text-sm sm:grid-cols-3">
            {["Free, clear estimates", "Tile & LVP specialists", "Clean, organized job sites"].map(
              (t) => (
                <li
                  key={t}
                  className="rounded-sm border border-charcoal-foreground/15 bg-charcoal-foreground/5 px-4 py-3 font-semibold"
                >
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Specialties"
            title="Tile and LVP/vinyl flooring done at a higher standard"
            text="These are the two things we install most — and the two things homeowners most often call us to fix after someone else rushed the job."
            center
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                img: tileImg,
                alt: "Custom porcelain tile shower with niche in a remodeled Jacksonville bathroom",
                title: "Tile Installation",
                to: "/tile-installation-jacksonville",
                items: [
                  "Porcelain, ceramic & large-format tile",
                  "Shower walls, niches & waterproofing prep",
                  "Kitchen backsplashes & wall tile",
                  "Floor preparation, leveling & grout finishing",
                ],
              },
              {
                img: lvpImg,
                alt: "Luxury vinyl plank flooring installed in an open Jacksonville living room",
                title: "LVP & Vinyl Flooring",
                to: "/lvp-vinyl-flooring-jacksonville",
                items: [
                  "Luxury vinyl plank & waterproof flooring",
                  "Whole-house flooring installation",
                  "Old flooring removal & subfloor prep",
                  "Baseboards, transitions & clean finish details",
                ],
              },
            ].map((s) => (
              <article
                key={s.title}
                className="overflow-hidden rounded-md border border-border bg-card shadow-card"
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-56 w-full object-cover md:h-72"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl">{s.title}</h3>
                  <div className="mt-5">
                    <CheckList items={s.items} columns={1} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="cta" size="lg">
                      <Link to={s.to}>See This Service</Link>
                    </Button>
                    <Button asChild variant="outlineDark" size="lg">
                      <a href={site.smsHref}>
                        <MessageSquare aria-hidden="true" /> Text Us
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="section bg-sand">
        <div className="container-x">
          <SectionHeading
            eyebrow="Full-Service Remodeling"
            title="Everything we do for Jacksonville homeowners"
            text="From a single backsplash to a complete bathroom or kitchen renovation."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group flex flex-col rounded-md border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                {"tag" in s && s.tag && (
                  <span className="mb-3 w-fit rounded-sm bg-accent px-2 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    {s.tag}
                  </span>
                )}
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-primary">
                  Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Get a free estimate this week"
        text="Call, text or send your project details and photos. We'll give you a clear price and a realistic schedule."
      />

      <WhyChoose />

      {/* PORTFOLIO TEASER */}
      <section className="section bg-sand">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Work"
            title="Recent tile, flooring & remodeling projects"
            text="Browse finished showers, floors, kitchens and full remodels across Northeast Florida."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { img: tileImg, alt: "Tile shower remodel in Jacksonville FL", label: "Tile & Showers" },
              { img: lvpImg, alt: "LVP flooring installation in Jacksonville FL", label: "LVP / Vinyl" },
              { img: kitchenImg, alt: "Kitchen remodel with tile backsplash in Jacksonville FL", label: "Kitchens" },
            ].map((p) => (
              <figure key={p.label} className="overflow-hidden rounded-md shadow-card">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-64 w-full object-cover"
                />
                <figcaption className="bg-card px-5 py-4 font-display text-sm font-bold uppercase tracking-widest">
                  {p.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="charcoal" size="xl">
              <Link to="/portfolio">View Our Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <HowItWorks />
      <ServiceAreaSection />
      <ReviewsSection />

      {/* ESTIMATE */}
      <section id="estimate" className="section bg-sand">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Free Estimate"
              title="Request your free estimate"
              text="Fill out the form and we'll review your project information and contact you about the next step. Prefer to talk? Call or text us directly."
            />
            <div className="mt-8 space-y-3">
              <a
                href={site.telHref}
                className="flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-4 font-display font-bold uppercase tracking-wide shadow-card"
              >
                <Phone className="size-5 text-primary" aria-hidden="true" /> Call {site.phoneDisplay}
              </a>
              <a
                href={site.smsHref}
                className="flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-4 font-display font-bold uppercase tracking-wide shadow-card"
              >
                <MessageSquare className="size-5 text-primary" aria-hidden="true" /> Text{" "}
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <EstimateForm />
        </div>
      </section>

      <FaqSection items={faqs.slice(0, 8)} title="Tile, flooring & remodeling questions" />
      <CtaBand />
    </>
  );
}
