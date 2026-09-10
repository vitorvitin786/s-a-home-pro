import type { ReactNode } from "react";
import { CtaBand } from "@/components/site/CtaBand";
import { EstimateForm } from "@/components/site/EstimateForm";
import {
  CheckList,
  InlineCta,
  PageHero,
  Prose,
  SectionHeading,
  ServiceAreaSection,
} from "@/components/site/Sections";

export type ServiceBlock = { title: string; items: string[] };

export function ServicePage({
  eyebrow,
  h1,
  intro,
  image,
  imageAlt,
  body,
  blocks,
  formService,
}: {
  eyebrow: string;
  h1: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  body: ReactNode;
  blocks: ServiceBlock[];
  formService: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={h1} text={intro} image={image} imageAlt={imageAlt} />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Prose>{body}</Prose>
            <InlineCta />
          </div>
          {image && (
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full rounded-md object-cover shadow-lift"
            />
          )}
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container-x">
          <SectionHeading eyebrow="What's Included" title="Everything this service covers" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blocks.map((b) => (
              <div key={b.title} className="rounded-md border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg">{b.title}</h3>
                <div className="mt-4">
                  <CheckList items={b.items} columns={1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaSection />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Free Estimate"
              title="Get a clear estimate for your project"
              text="Send us the details and photos. We'll review the scope and get back to you about the next step."
            />
          </div>
          <EstimateForm defaultService={formService} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
