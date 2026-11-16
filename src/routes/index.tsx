import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Hammer,
  HardHat,
  Home as HomeIcon,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EstimateForm } from "@/components/site/EstimateForm";
import { site } from "@/lib/site";
import heroImg from "@/assets/kitchen-remodeling-jacksonville.jpg";
import tileImg from "@/assets/tile-shower-remodel-jacksonville.jpg";
import lvpImg from "@/assets/lvp-vinyl-flooring-jacksonville.jpg";
import installImg from "@/assets/tile-floor-finished.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Residential & Commercial Remodeling Jacksonville | S&A Homes Services" },
      {
        name: "description",
        content:
          "Tile, LVP flooring and remodeling for homes and businesses across Jacksonville and Northeast Florida. Free project estimates: (904) 554-7517.",
      },
      { property: "og:title", content: "S&A Homes Services | Jacksonville Remodeling" },
      {
        property: "og:description",
        content: "Residential and commercial tile, flooring and remodeling across Northeast Florida.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sahomeservices.com/" }],
  }),
  component: Home,
});

const services = [
  {
    title: "Kitchen Remodeling",
    text: "Kitchens rebuilt around your space, needs and preferred finish.",
    to: "/kitchen-remodeling-jacksonville",
    image: heroImg,
  },
  {
    title: "Bathroom Remodeling",
    text: "Functional bathrooms, custom showers and lasting finish work.",
    to: "/bathroom-remodeling-jacksonville",
    image: tileImg,
  },
  {
    title: "LVP / Vinyl Flooring",
    text: "Durable flooring installed over carefully prepared surfaces.",
    to: "/lvp-vinyl-flooring-jacksonville",
    image: lvpImg,
  },
  {
    title: "Tile Installation",
    text: "Expert tile installation for floors, showers, walls and backsplashes.",
    to: "/tile-installation-jacksonville",
    image: installImg,
  },
] as const;

const trustItems = [
  [HomeIcon, "Residential Remodeling"],
  [Building2, "Commercial Projects"],
  [Wrench, "Quality Craftsmanship"],
  [ShieldCheck, "10+ Years Experience"],
] as const;

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-primary/20 bg-[#050b14] text-white">
        <img
          src={heroImg}
          alt="Modern kitchen remodeling project in Jacksonville"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02060d]/95 via-[#06101d]/78 to-[#07101e]/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(24,165,255,.18),transparent_26rem)]" />

        <div className="container-x relative flex min-h-[620px] items-center py-12 sm:min-h-[680px] md:py-20">
          <div className="max-w-[760px]">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-primary sm:text-xs">
              <span className="h-px w-9 bg-primary" /> Building a Better Tomorrow
            </p>
            <h1 className="mt-5 max-w-3xl font-sans text-[2.75rem] font-black uppercase leading-[.98] tracking-[-0.035em] sm:text-6xl md:text-7xl">
              Quality <span className="text-primary">Remodeling</span> for a Brighter Tomorrow
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/76 sm:text-lg">
              Residential and commercial remodeling services across Jacksonville and Northeast Florida.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cta" size="xl">
                <Link to="/contact">
                  Get a Free Estimate <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/remodeling-services">View Our Work</Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/15 pt-6 sm:grid-cols-4">
              {trustItems.map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="size-7 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.08em] text-white/90">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-primary/20 bg-[#07101e] py-10 text-white md:py-16">
        <div className="container-x">
          <div className="rounded-xl border border-white/15 bg-white/[.025] p-5 shadow-[0_20px_60px_rgba(0,0,0,.2)] sm:p-7 lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-primary">Free Estimate</p>
            <h2 className="mt-3 font-sans text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl">
              Let’s Talk About Your Project
            </h2>
            <p className="mt-2 text-sm text-white/60 sm:text-base">
              Tell us what you need and our team will follow up with you.
            </p>
            <div className="mt-6">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-primary/20 bg-[#050b14] py-12 text-white md:py-18">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                <span className="h-px w-8 bg-primary" /> Our Services
              </p>
              <h2 className="mt-3 font-sans text-3xl font-black uppercase tracking-[-0.03em] sm:text-4xl">
                What We Do
              </h2>
            </div>
            <Button asChild variant="outlineLight" className="w-fit">
              <Link to="/remodeling-services">View All Services</Link>
            </Button>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-lg border border-white/15 bg-[#0b1624] transition hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    width={800}
                    height={650}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <Hammer className="size-7 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-sans text-lg font-black uppercase leading-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/58">{service.text}</p>
                  <Link
                    to={service.to}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary"
                  >
                    Learn More <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-primary/20 bg-[#091321] py-12 text-white md:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" /> Why Choose Us
            </p>
            <h2 className="mt-3 font-sans text-3xl font-black uppercase tracking-[-0.03em] sm:text-4xl">
              Built on Trust
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/65">
              S&amp;A Homes Services brings hands-on remodeling experience, careful preparation and dependable communication to residential and commercial projects.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Residential & commercial work", "Jacksonville & Northeast Florida", "Contractors & builders welcome", "Tile, flooring & full remodeling"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[.03] p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-primary/20 bg-[#07101e] py-10 text-white">
        <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-3xl items-start gap-4">
            <HardHat className="mt-1 size-9 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-sans text-2xl font-black uppercase tracking-[-0.02em]">
                Contractors &amp; Builders Welcome
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/60">
                We’re open to residential and commercial partnerships with builders, contractors and project teams.
              </p>
            </div>
          </div>
          <Button asChild variant="cta" size="lg">
            <Link to="/commercial">
              Work With Us <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-[#050b14] py-12 text-white md:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <Sparkles className="size-8 text-primary" aria-hidden="true" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Ready to Get Started?</p>
            <h2 className="mt-3 font-sans text-3xl font-black uppercase tracking-[-0.03em]">Bring Your Project to Life</h2>
            <p className="mt-3 text-white/60">Call, text or request a free estimate online.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href={site.telHref} className="flex items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-4 font-bold hover:border-primary/50 hover:bg-primary/5">
              <Phone className="size-5 text-primary" /> Call
            </a>
            <a href={site.smsHref} className="flex items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-4 font-bold hover:border-primary/50 hover:bg-primary/5">
              <MessageSquare className="size-5 text-primary" /> Text
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-4 font-bold text-primary-foreground hover:bg-primary/90">
              <MapPin className="size-5" /> Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
