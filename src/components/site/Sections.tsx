import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Check, MessageSquare, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceAreas, site } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="absolute inset-0 size-full object-cover opacity-25"
          loading="lazy"
        />
      )}
      <div className="container-x relative py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-charcoal-foreground/80 md:text-lg">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="cta" size="xl">
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href={site.telHref}>
              <Phone aria-hidden="true" /> Call or Text {site.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  as?: "h2" | "h3";
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <As className="mt-3 text-2xl text-foreground md:text-4xl">{title}</As>
      {text && <p className="mt-4 text-muted-foreground md:text-lg">{text}</p>}
    </div>
  );
}

export function CheckList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 | 3 }) {
  const grid =
    columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${grid}`}>
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3">
          <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-foreground/85">{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function InlineCta({ label = "Get a Free Estimate" }: { label?: string }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button asChild variant="cta" size="lg">
        <Link to="/contact">{label}</Link>
      </Button>
      <Button asChild variant="outlineDark" size="lg">
        <a href={site.telHref}>
          <Phone aria-hidden="true" /> Call Now
        </a>
      </Button>
      <Button asChild variant="outlineDark" size="lg">
        <a href={site.smsHref}>
          <MessageSquare aria-hidden="true" /> Text Us
        </a>
      </Button>
    </div>
  );
}

const steps = [
  {
    n: "01",
    t: "Contact Us",
    d: "Call, text or submit the free estimate form with your project details.",
  },
  {
    n: "02",
    t: "Project Evaluation",
    d: "We discuss the project, measurements, materials and the finish you want.",
  },
  {
    n: "03",
    t: "Clear Estimate",
    d: "You receive an understandable estimate with the scope of work spelled out.",
  },
  {
    n: "04",
    t: "Professional Installation",
    d: "We protect and prepare the work area, then complete the installation or remodel.",
  },
  {
    n: "05",
    t: "Final Walkthrough",
    d: "We inspect the finished work with you and confirm every detail is properly completed.",
  },
];

export function HowItWorks() {
  return (
    <section className="section bg-sand">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, five-step process"
          text="You always know what's happening, what it costs and what comes next."
          center
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="rounded-md border border-border bg-card p-6 shadow-card">
              <span className="font-display text-3xl font-extrabold text-primary">{s.n}</span>
              <h3 className="mt-3 text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const reasons = [
  [
    "10+ Years of Hands-On Experience",
    "A decade-plus of real jobsite work in residential and commercial remodeling.",
  ],
  ["Tile & Flooring Specialists", "Tile and LVP/vinyl are what we do most — and what we do best."],
  [
    "Attention to Detail",
    "Straight lines, level floors, clean grout joints and tight transitions.",
  ],
  ["Direct Communication", "You talk to the person doing the work, not a call center."],
  ["Professional Workmanship", "Proper prep, proper materials and finishes made to last."],
  ["Clear Estimates", "Written scope in plain language so you know exactly what's included."],
  [
    "Complete Remodeling Capabilities",
    "Demolition, drywall, painting and finish work under one crew.",
  ],
  ["Clean & Organized Job Sites", "Protected floors, contained dust and daily cleanup."],
  ["Local Jacksonville Company", "We live and work here in Northeast Florida."],
];

export function WhyChoose() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why homeowners hire S&A Homes Services"
          text="Craftsmanship you can inspect up close, and communication you never have to chase."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([t, d]) => (
            <div key={t} className="rounded-md border border-border bg-card p-6 shadow-card">
              <div className="grid size-9 place-items-center rounded-sm bg-accent">
                <Check className="size-4 text-accent-foreground" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <InlineCta />
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaSection() {
  return (
    <section className="section bg-sand">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Service Area"
            title="Tile, flooring & remodeling across Northeast Florida"
            text="S&A Homes Services provides services throughout Jacksonville and the surrounding Northeast Florida communities. Not sure if you're in range? Call or text us and ask."
          />
          <InlineCta label="Request Service In My Area" />
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {serviceAreas.map((a) => (
            <li
              key={a}
              className="rounded-sm border border-border bg-card px-4 py-3 text-sm font-semibold shadow-card"
            >
              {a}, FL
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Reviews"
          title="What homeowners say"
          text="We're collecting verified Google reviews from recent Jacksonville projects. Real customer reviews will be published here."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-md border border-dashed border-border bg-card p-6 text-center shadow-card"
            >
              <div className="flex justify-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Verified Google review coming soon.
              </p>
              <p className="mt-4 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Jacksonville, FL
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="charcoal" size="xl">
            <a href={site.social.google}>Read Our Google Reviews</a>
          </Button>
          <Button asChild variant="outlineDark" size="xl">
            <a href={site.social.google}>Leave Us a Review</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  items,
  title = "Frequently asked questions",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="section bg-sand">
      <div className="container-x">
        <SectionHeading eyebrow="FAQ" title={title} center />
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
          {items.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-display text-base font-bold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-foreground/85 md:text-lg">{children}</div>;
}
