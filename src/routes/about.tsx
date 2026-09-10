import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading, ServiceAreaSection } from "@/components/site/Sections";
import { site } from "@/lib/site";
import heroImg from "@/assets/tile-installer-jacksonville-fl.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About S&A Homes Services | Jacksonville Remodeling Company" },
      { name: "description", content: "Learn about S&A Homes Services, a Jacksonville remodeling company with more than 10 years of hands-on construction and flooring experience." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const strengths = ["10+ Years of Hands-On Experience", "Tile & Flooring Specialists", "Direct Communication", "Professional Workmanship", "Clear Estimates", "Complete Remodeling Capabilities", "Clean and Organized Job Sites", "Local Jacksonville Company"];
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <img src={heroImg} alt="S&A Homes Services tile installation project in Jacksonville" className="absolute inset-0 size-full object-cover opacity-25" width={1600} height={1104} />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="container-x relative py-20 md:py-28">
          <p className="eyebrow">About S&A Homes Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl">Hands-on remodeling experience, with attention to the details that matter.</h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal-foreground/85">A local Jacksonville remodeling company focused on tile, flooring and practical residential improvements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Story" title="Built around experience, craftsmanship and direct communication" />
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>S&A Homes Services is a locally operated remodeling and flooring company serving Jacksonville and Northeast Florida.</p>
              <p>With more than 10 years of hands-on remodeling experience, our work is especially focused on tile installation and LVP/vinyl flooring while also supporting complete bathroom, kitchen and residential remodeling projects.</p>
              <p>We believe customers should understand what is being done, what the project includes and what the next step is. That means clear communication from the initial conversation through the final walkthrough.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg"><Link to="/contact">Get a Free Estimate</Link></Button>
              <Button asChild variant="outlineDark" size="lg"><a href={site.telHref}><Phone /> Call {site.phoneDisplay}</a></Button>
            </div>
          </div>
          <div className="rounded-md border border-border bg-sand p-7 shadow-card">
            <h2 className="text-2xl">Why homeowners choose us</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => <li key={item} className="flex gap-3 text-sm font-semibold"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <ServiceAreaSection />
      <CtaBand title="Planning a remodeling project?" text="Tell us what you want to improve and we can discuss the best next step." />
    </>
  );
}
