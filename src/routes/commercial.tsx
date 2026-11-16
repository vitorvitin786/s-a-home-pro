import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, CheckCircle2, HardHat, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EstimateForm } from "@/components/site/EstimateForm";
import { SectionHeading } from "@/components/site/Sections";
import { site } from "@/lib/site";
import heroImg from "@/assets/kitchen-remodeling-jacksonville.jpg";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Flooring & Remodeling Jacksonville FL | S&A Homes Services" },
      {
        name: "description",
        content:
          "Commercial tile, flooring and remodeling support for businesses, property managers, builders and general contractors in Jacksonville and Northeast Florida.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sahomeservices.com/commercial" }],
  }),
  component: Commercial,
});

function Commercial() {
  const capabilities = [
    "Commercial tile and flooring installation",
    "LVP and vinyl flooring",
    "Floor preparation and leveling",
    "Demolition and remodeling preparation",
    "Drywall, painting and finish work",
    "Coordination with contractors and project teams",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <img
          src={heroImg}
          alt="Commercial remodeling and flooring services in Jacksonville Florida"
          className="absolute inset-0 size-full object-cover opacity-25"
          width={1600}
          height={1104}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/55" />
        <div className="container-x relative py-20 md:py-28">
          <p className="eyebrow">Commercial Projects</p>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl">
            Reliable flooring and remodeling support for businesses and contractors.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal-foreground/85">
            S&amp;A Homes Services accepts commercial work and is open to partnerships with general
            contractors, builders, property managers and business owners across Northeast Florida.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">Request a Project Estimate</Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={site.telHref}>
                <Phone aria-hidden="true" /> Call {site.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_.9fr]">
          <div>
            <SectionHeading
              eyebrow="Built for Collaboration"
              title="A dependable trade partner for projects large and small"
              text="Tell us the scope, schedule and site requirements. We’ll review where our crew fits and communicate clearly about the next step."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li key={item} className="flex gap-3 rounded-sm border border-border bg-card p-4">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm border border-border bg-sand p-6">
                <Building2 className="size-7 text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-xl">For businesses and property teams</h2>
                <p className="mt-2 text-muted-foreground">
                  Tenant improvements, flooring replacement, preparation and remodeling support.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-sand p-6">
                <HardHat className="size-7 text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-xl">For contractors and builders</h2>
                <p className="mt-2 text-muted-foreground">
                  Trade support for tile, flooring, demolition, preparation and finish work.
                </p>
              </div>
            </div>
          </div>
          <EstimateForm defaultService="Other Remodeling" />
        </div>
      </section>
    </>
  );
}
