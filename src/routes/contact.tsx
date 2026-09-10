import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageSquare, Mail } from "lucide-react";
import { EstimateForm } from "@/components/site/EstimateForm";
import { SectionHeading } from "@/components/site/Sections";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact S&A Homes Services | Free Remodeling Estimate Jacksonville" },
      {
        name: "description",
        content:
          "Contact S&A Homes Services for a free estimate on tile, LVP flooring, bathroom, kitchen and home remodeling projects in Jacksonville and Northeast Florida.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="section bg-sand">
        <div className="container-x">
          <SectionHeading
            eyebrow="Contact S&A Homes Services"
            title="Tell us about your project"
            text="Call, text or use the estimate form below. We serve Jacksonville and Northeast Florida."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href={site.telHref}
              className="rounded-md border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5"
            >
              <Phone className="size-6 text-primary" />
              <h2 className="mt-4 font-display text-sm font-bold uppercase tracking-widest">
                Call
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{site.phoneDisplay}</p>
            </a>
            <a
              href={site.smsHref}
              className="rounded-md border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5"
            >
              <MessageSquare className="size-6 text-primary" />
              <h2 className="mt-4 font-display text-sm font-bold uppercase tracking-widest">
                Text
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{site.phoneDisplay}</p>
            </a>
            <a
              href={site.mailHref}
              className="rounded-md border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5"
            >
              <Mail className="size-6 text-primary" />
              <h2 className="mt-4 font-display text-sm font-bold uppercase tracking-widest">
                Email
              </h2>
              <p className="mt-2 break-all text-sm text-muted-foreground">{site.email}</p>
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Free Estimate"
              title="Request your project estimate"
              text="Give us the basics, describe what you want done and include photos if helpful."
            />
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
