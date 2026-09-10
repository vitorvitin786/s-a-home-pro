import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HardHat,
  Home as HomeIcon,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EstimateForm } from "@/components/site/EstimateForm";
import { site } from "@/lib/site";
import heroImg from "@/assets/kitchen-remodeling-jacksonville.jpg";
import tileImg from "@/assets/tile-shower-remodel-jacksonville.jpg";
import lvpImg from "@/assets/lvp-vinyl-flooring-jacksonville.jpg";
import installImg from "@/assets/tile-installer-jacksonville-fl.jpg";

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
        content:
          "Residential and commercial tile, flooring and remodeling across Northeast Florida.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    title: "Tile Installation",
    text: "Expert tile installation for floors, showers, walls and backsplashes.",
    to: "/tile-installation-jacksonville",
    image: tileImg,
  },
  {
    title: "LVP / Vinyl Flooring",
    text: "Durable flooring installed over carefully prepared surfaces.",
    to: "/lvp-vinyl-flooring-jacksonville",
    image: lvpImg,
  },
  {
    title: "Bathroom Remodeling",
    text: "Functional bathrooms, custom showers and lasting finish work.",
    to: "/bathroom-remodeling-jacksonville",
    image: tileImg,
  },
  {
    title: "Kitchen Remodeling",
    text: "Kitchens rebuilt around your space, needs and preferred finish.",
    to: "/kitchen-remodeling-jacksonville",
    image: heroImg,
  },
  {
    title: "Floor Leveling",
    text: "Preparation and leveling for a clean, stable installation.",
    to: "/floor-preparation-leveling",
    image: installImg,
  },
  {
    title: "Commercial Projects",
    text: "Flooring and remodeling support for businesses and contractors.",
    to: "/commercial",
    image: heroImg,
  },
] as const;

function Home() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden border-b border-white/15 bg-[#101113] text-white">
        <img
          src={heroImg}
          alt="Modern kitchen remodeling project"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="container-x relative flex min-h-[650px] items-center py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
              Quality spaces. Stronger tomorrows.
            </p>
            <h1 className="mt-5 text-5xl leading-[0.95] sm:text-6xl md:text-8xl">
              S&amp;A Homes Services
            </h1>
            <p className="mt-4 font-display text-2xl uppercase tracking-[0.18em] text-white/85 sm:text-3xl">
              Residential &amp; Commercial Projects
            </p>
            <div className="my-6 flex items-center gap-3 text-sm tracking-[0.45em] text-white/85">
              <span className="h-px w-16 bg-white/55" /> ★★★★★
            </div>
            <p className="font-display text-2xl">Tile · Flooring · Remodeling</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/72">
              Trusted craftsmanship for homes and businesses across Jacksonville and Northeast
              Florida.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cta" size="xl">
                <Link to="/contact">
                  Get a Free Estimate <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <a href={site.smsHref}>
                  <MessageSquare /> Text Us
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 hidden border border-white/30 bg-black/65 px-8 py-5 text-center lg:block">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Build · Remodel · Improve
          </p>
          <p className="mt-2 font-display text-xl uppercase tracking-[0.18em]">
            Always a Higher Standard
          </p>
        </div>
      </section>

      <section className="border-b border-white/15 bg-[#17181a] text-white">
        <div className="container-x grid divide-y divide-white/15 md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            [HomeIcon, "Residential & Commercial"],
            [Building2, "We Accept Commercial Work"],
            [HardHat, "Contractors & Builders Welcome"],
            [MapPin, "Jacksonville / Northeast Florida"],
          ].map(([Icon, label]) => (
            <div key={String(label)} className="flex items-center gap-4 px-5 py-6">
              <Icon className="size-7 shrink-0 stroke-[1.25]" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em]">{String(label)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/15 bg-[#1b1c1e] py-16 text-white md:py-20">
        <div className="container-x">
          <div className="flex items-center gap-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em]">Our Services</p>
            <span className="h-px flex-1 bg-white/25" />
            <p className="hidden text-xs uppercase tracking-[0.3em] text-white/55 sm:block">
              Quality work. Lasting value.
            </p>
          </div>
          <div className="mt-8 grid gap-x-4 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service) => (
              <article key={service.title} className="group">
                <div className="overflow-hidden border border-white/20">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    width={800}
                    height={650}
                    className="aspect-[4/3] w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <h2 className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.08em]">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{service.text}</p>
                <Link
                  to={service.to}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white"
                >
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid border-b border-white/15 bg-black text-white lg:grid-cols-2">
        <HomeServicePanel
          title="Residential Services"
          eyebrow="For Your Home"
          text="From single-room updates to full renovations, we bring careful preparation and clean execution to every project."
          image={lvpImg}
          to="/remodeling-services"
        />
        <HomeServicePanel
          title="Commercial Services"
          eyebrow="For Your Business"
          text="We accept commercial work and partner with businesses, property managers, builders and general contractors."
          image={heroImg}
          to="/commercial"
        />
      </section>

      <section className="border-b border-white/15 bg-[#202123] py-9 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <div className="flex max-w-3xl items-start gap-5">
            <HardHat className="mt-1 size-10 shrink-0 stroke-[1.25]" />
            <div>
              <h2 className="text-2xl uppercase tracking-[0.06em]">
                Looking for contractors &amp; general contractors
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                S&amp;A Homes Services is open to working with contractors, builders and project
                teams on residential and commercial work.
              </p>
            </div>
          </div>
          <Button asChild variant="cta" size="xl">
            <Link to="/commercial">
              Let’s Work Together <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section
        id="estimate"
        className="border-b border-white/15 bg-[#151618] py-16 text-white md:py-20"
      >
        <div className="container-x grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Get a Free Estimate
            </p>
            <h2 className="mt-4 text-4xl sm:text-6xl">Let’s Bring Your Vision to Life</h2>
            <p className="mt-4 text-white/65">Residential or commercial—we’re here to help.</p>
            <div className="mt-8 space-y-4 text-sm">
              <a href={site.telHref} className="flex items-center gap-3">
                <Phone className="size-5" /> {site.phoneDisplay}
              </a>
              <a href={site.mailHref} className="flex items-center gap-3">
                <MessageSquare className="size-5" /> {site.email}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="size-5" /> Jacksonville / Northeast Florida
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
              <CheckCircle2 className="size-5 text-white" /> Requested appointment times are
              confirmed by our team.
            </div>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}

function HomeServicePanel({
  title,
  eyebrow,
  text,
  image,
  to,
}: {
  title: string;
  eyebrow: string;
  text: string;
  image: string;
  to: "/remodeling-services" | "/commercial";
}) {
  return (
    <article className="relative min-h-[430px] overflow-hidden border-b border-white/15 lg:border-b-0 lg:border-r">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover grayscale"
        width={1200}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
      <div className="relative flex min-h-[430px] max-w-xl flex-col justify-center p-8 sm:p-14">
        <p className="text-xs uppercase tracking-[0.3em] text-white/55">{eyebrow}</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">{title}</h2>
        <p className="mt-4 leading-relaxed text-white/70">{text}</p>
        <Button asChild variant="outlineLight" className="mt-7 w-fit">
          <Link to={to}>
            Learn More <ArrowRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}
