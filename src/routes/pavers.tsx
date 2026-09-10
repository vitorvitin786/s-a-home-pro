import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/pavers")({
  head: () => ({
    meta: [
      { title: "Paver Installation Jacksonville FL | Patios & Walkways" },
      {
        name: "description",
        content:
          "Paver installation in Jacksonville FL — patios, walkways and outdoor improvements built on a properly compacted base. Free estimates: (904) 554-7517.",
      },
      { property: "og:title", content: "Paver Installation Jacksonville FL | S&A Homes Services" },
      {
        property: "og:description",
        content: "Paver patios and walkways installed across Jacksonville and Northeast Florida.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/pavers" },
    ],
    links: [{ rel: "canonical", href: "/pavers" }],
  }),
  component: PaversPage,
});

function PaversPage() {
  return (
    <ServicePage
      eyebrow="Paver Installation Jacksonville FL"
      h1="Pavers & Outdoor Projects"
      intro="Paver patios, walkways and outdoor improvements installed with proper excavation, base compaction and edge restraint so they stay level through Florida rain."
      formService="Pavers"
      body={
        <>
          <p>
            Pavers are only as good as what&rsquo;s underneath them. Most sunken, wavy patios were
            installed on a base that was never excavated deep enough or compacted properly.
          </p>
          <h2 className="pt-2 text-2xl">How we build them</h2>
          <p>
            We excavate to the right depth, install and compact base material in lifts, screed the
            bedding layer, lay the pattern, cut clean edges, set edge restraints and lock the joints
            with sand. The result is a surface that drains away from your home and holds its shape.
          </p>
          <h2 className="pt-2 text-2xl">Outdoor living upgrades</h2>
          <p>
            Patios, entry walkways, side paths and outdoor extensions of a remodel — if you&rsquo;re
            already updating the inside, it&rsquo;s a good time to fix the approach and the back
            patio too.
          </p>
        </>
      }
      blocks={[
        {
          title: "Paver Projects",
          items: [
            "Paver patios",
            "Walkways and paths",
            "Entry and porch pavers",
            "Patio extensions",
          ],
        },
        {
          title: "Installation",
          items: [
            "Excavation and grading",
            "Base installation and compaction",
            "Edge restraints",
            "Joint sand and locking",
          ],
        },
        {
          title: "Outdoor Improvements",
          items: ["Outdoor surface repair", "Re-leveling settled pavers", "Drainage-aware layout"],
        },
        {
          title: "Also Available",
          items: [
            "Demolition of old surfaces",
            "Debris removal",
            "Coordination with interior remodels",
          ],
        },
      ]}
    />
  );
}
