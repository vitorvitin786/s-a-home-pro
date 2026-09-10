import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import prepImg from "@/assets/tile-installer-jacksonville-fl.jpg";

export const Route = createFileRoute("/floor-preparation-leveling")({
  head: () => ({
    meta: [
      { title: "Floor Leveling Jacksonville FL | Self-Leveling & Floor Preparation" },
      {
        name: "description",
        content:
          "Self leveling contractor in Jacksonville FL. Concrete floor preparation, uneven floor correction and subfloor prep before tile and LVP. Free estimates: (904) 554-7517.",
      },
      { property: "og:title", content: "Floor Leveling & Preparation Jacksonville FL" },
      {
        property: "og:description",
        content:
          "Self-leveling, concrete prep and uneven floor correction before tile and LVP installation in Jacksonville FL.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/floor-preparation-leveling" },
    ],
    links: [{ rel: "canonical", href: "/floor-preparation-leveling" }],
  }),
  component: PrepPage,
});

function PrepPage() {
  return (
    <ServicePage
      eyebrow="Floor Leveling Jacksonville FL"
      h1="Floor Preparation & Self-Leveling"
      intro="The step most flooring problems trace back to. We correct uneven concrete and subfloors so tile and LVP install flat — and stay that way."
      image={prepImg}
      imageAlt="Concrete floor preparation and leveling before tile installation in Jacksonville FL"
      formService="Floor Leveling"
      body={
        <>
          <p>
            Florida slabs move, settle and are rarely poured perfectly flat. Add old thinset, glue
            residue and patched plumbing trenches and you have a surface no flooring should be
            installed over.
          </p>
          <h2 className="pt-2 text-2xl">What proper prep looks like</h2>
          <p>
            We measure the floor for high and low spots, grind down what protrudes, remove old
            adhesive and thinset, prime the slab and pour self-leveling compound where it&rsquo;s
            needed. On wood subfloors we address squeaks, fasteners and deflection before adding
            underlayment.
          </p>
          <h2 className="pt-2 text-2xl">Why it matters</h2>
          <p>
            Flat floors mean no lippage on large-format tile, no hollow or clicking spots under LVP,
            no separating seams and no cracked grout a year later. It is the least visible part of
            the job and the part that determines how long the finished floor lasts.
          </p>
        </>
      }
      blocks={[
        {
          title: "Concrete Preparation",
          items: [
            "Self-leveling compound",
            "Concrete grinding",
            "Thinset and adhesive removal",
            "Crack patching and priming",
          ],
        },
        {
          title: "Correction Work",
          items: [
            "Uneven floor correction",
            "High and low spot mapping",
            "Transition height planning",
            "Subfloor repair and fastening",
          ],
        },
        {
          title: "Removal",
          items: [
            "Existing flooring removal",
            "Tile and thinset tear-out",
            "Carpet and vinyl removal",
            "Debris haul-off",
          ],
        },
        {
          title: "Prep For",
          items: [
            "Porcelain and large-format tile",
            "LVP and vinyl plank",
            "Bathroom and shower floors",
            "Whole-house installations",
          ],
        },
      ]}
    />
  );
}
