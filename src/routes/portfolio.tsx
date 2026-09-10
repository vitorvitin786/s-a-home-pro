import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { site } from "@/lib/site";
import tileImg from "@/assets/tile-shower-remodel-jacksonville.jpg";
import lvpImg from "@/assets/lvp-vinyl-flooring-jacksonville.jpg";
import kitchenImg from "@/assets/kitchen-remodeling-jacksonville.jpg";
import heroImg from "@/assets/tile-installer-jacksonville-fl.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Our Work | Tile, Flooring & Remodeling Jacksonville FL" },
      { name: "description", content: "Browse tile, shower, LVP/vinyl, kitchen and remodeling project examples from S&A Homes Services in Jacksonville and Northeast Florida." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const projects = [
  { title: "Tile & Showers", category: "Tile", image: tileImg, alt: "Tile shower remodeling project in Jacksonville Florida" },
  { title: "LVP / Vinyl Flooring", category: "LVP / Vinyl", image: lvpImg, alt: "LVP vinyl flooring project in Jacksonville Florida" },
  { title: "Kitchen Remodeling", category: "Kitchens", image: kitchenImg, alt: "Kitchen remodeling project in Jacksonville Florida" },
  { title: "Tile Installation", category: "Tile", image: heroImg, alt: "Professional tile installation project in Jacksonville Florida" },
];

function Portfolio() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <img src={heroImg} alt="S&A Homes Services remodeling work" className="absolute inset-0 size-full object-cover opacity-25" width={1600} height={1104} />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="container-x relative py-20 md:py-28">
          <p className="eyebrow">Our Work</p>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl">Tile, flooring and remodeling projects.</h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal-foreground/85">A growing project gallery for S&A Homes Services. Real customer project photos can be added here as they become available.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap gap-2">
            {["All Projects", "Tile", "Showers", "Bathrooms", "LVP / Vinyl", "Kitchens", "Flooring", "Pavers", "Before & After"].map((item) => (
              <span key={item} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold">{item}</span>
            ))}
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <figure key={project.title} className="overflow-hidden rounded-md border border-border bg-card shadow-card">
                <img src={project.image} alt={project.alt} loading="lazy" width={1600} height={1000} className="aspect-[16/10] w-full object-cover" />
                <figcaption className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-primary">{project.category}</p><h2 className="mt-2 text-xl">{project.title}</h2><p className="mt-2 text-sm text-muted-foreground">Project gallery placeholder — replace with a real customer project when available.</p></figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 rounded-md border border-dashed border-border bg-sand p-8 text-center">
            <h2 className="text-2xl">Have a project you want featured?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Send us your project details and photos. We can organize the portfolio around real completed work instead of stock imagery.</p>
            <Button asChild variant="cta" size="lg" className="mt-6"><Link to="/contact">Start a Project</Link></Button>
          </div>
        </div>
      </section>
      <CtaBand title="Ready to start your project?" text="Call, text or request a free estimate from S&A Homes Services." />
    </>
  );
}
