import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import bathImg from "@/assets/tile-shower-remodel-jacksonville.jpg";

export const Route = createFileRoute("/bathroom-remodeling-jacksonville")({
  head: () => ({
    meta: [
      { title: "Bathroom Remodeling Jacksonville FL | Custom Tile Showers" },
      {
        name: "description",
        content:
          "Complete bathroom remodeling in Jacksonville FL — custom tile showers, waterproofing, vanities, flooring, drywall and painting. Free estimates: (904) 554-7517.",
      },
      { property: "og:title", content: "Bathroom Remodeling Jacksonville FL | S&A Homes Services" },
      {
        property: "og:description",
        content:
          "Full bathroom renovations and custom tile showers in Jacksonville and Northeast Florida.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/bathroom-remodeling-jacksonville" },
    ],
    links: [{ rel: "canonical", href: "/bathroom-remodeling-jacksonville" }],
  }),
  component: BathPage,
});

function BathPage() {
  return (
    <ServicePage
      eyebrow="Bathroom Remodeling Jacksonville FL"
      h1="Bathroom Remodeling in Jacksonville, FL"
      intro="Complete bathroom renovations built around what we do best: tile. Custom showers, waterproofing done properly, and finish work that holds up to daily use."
      image={bathImg}
      imageAlt="Remodeled Jacksonville FL bathroom with large-format tile shower, glass door and modern vanity"
      formService="Bathroom Remodeling"
      body={
        <>
          <p>
            A bathroom is the hardest-working room in the house and the least forgiving of
            shortcuts. We rebuild bathrooms from the studs out when needed — demolition,
            waterproofing, tile, vanity, flooring, drywall, paint and fixtures handled by one crew.
          </p>
          <h2 className="pt-2 text-2xl">Custom tile showers</h2>
          <p>
            We remove the old shower or tub surround, correct framing and substrate issues, prepare
            waterproofing, then tile the walls, pan, curb and niches. Because tile is our specialty,
            the layout is planned so the pattern lands cleanly at corners, niches and the ceiling.
          </p>
          <h2 className="pt-2 text-2xl">One crew, start to finish</h2>
          <p>
            You don&rsquo;t need to coordinate a tile setter, a drywall contractor and a painter. We
            manage the sequence, keep the space protected and clean, and walk the finished bathroom
            with you before we call it done.
          </p>
        </>
      }
      blocks={[
        {
          title: "Showers",
          items: [
            "Custom tile showers",
            "Shower demolition and rebuilding",
            "Shower niches and benches",
            "Waterproofing preparation",
            "Shower pans, curbs and thresholds",
          ],
        },
        {
          title: "Surfaces",
          items: [
            "Bathroom floor tile",
            "LVP bathroom flooring",
            "Wall tile and accent walls",
            "Grout and caulk finishing",
          ],
        },
        {
          title: "Build-Out",
          items: [
            "Complete bathroom renovations",
            "Vanities and cabinetry install",
            "Drywall installation and repair",
            "Interior painting",
          ],
        },
        {
          title: "Finish Work",
          items: [
            "Fixtures and hardware",
            "Trim and baseboards",
            "Mirror and accessory mounting",
            "Cleanup and debris removal",
          ],
        },
      ]}
    />
  );
}
