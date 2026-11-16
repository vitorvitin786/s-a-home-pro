import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import kitchenImg from "@/assets/kitchen-remodeling-jacksonville.jpg";

export const Route = createFileRoute("/kitchen-remodeling-jacksonville")({
  head: () => ({
    meta: [
      { title: "Kitchen Remodeling Jacksonville FL | Backsplash, Tile & Flooring" },
      {
        name: "description",
        content:
          "Kitchen remodeling in Jacksonville FL — cabinets, tile backsplash, flooring, countertop coordination, drywall, painting and demolition. Free estimates: (904) 554-7517.",
      },
      { property: "og:title", content: "Kitchen Remodeling Jacksonville FL | S&A Homes Services" },
      {
        property: "og:description",
        content:
          "Kitchen remodels, backsplashes, tile and flooring in Jacksonville and Northeast Florida. Free estimates.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/kitchen-remodeling-jacksonville" },
    ],
    links: [{ rel: "canonical", href: "https://sahomeservices.com/kitchen-remodeling-jacksonville" }],
  }),
  component: KitchenPage,
});

function KitchenPage() {
  return (
    <ServicePage
      eyebrow="Kitchen Remodeling Jacksonville FL"
      h1="Kitchen Remodeling in Jacksonville, FL"
      intro="From a new backsplash and flooring to a full kitchen renovation — cabinets, tile, drywall, painting and finish work handled with the same detail we bring to every tile job."
      image={kitchenImg}
      imageAlt="Remodeled Jacksonville FL kitchen with white cabinets, tile backsplash and wood-look flooring"
      formService="Kitchen Remodeling"
      body={
        <>
          <p>
            Kitchens reward precision. Backsplash lines have to be level with cabinets that
            aren&rsquo;t, tile has to die cleanly into outlets and range hoods, and flooring has to
            run flat under appliances and islands. That detail work is our strength.
          </p>
          <h2 className="pt-2 text-2xl">Backsplashes and kitchen tile</h2>
          <p>
            Subway, mosaic, large-format panels or full-height tile to the ceiling — we lay out the
            pattern first so cuts land where they look intentional, then finish with clean grout and
            caulk joints.
          </p>
          <h2 className="pt-2 text-2xl">Full kitchen renovations</h2>
          <p>
            We handle demolition, cabinet installation, flooring, drywall and painting, and we
            coordinate around countertop templating and fabrication so the schedule keeps moving.
          </p>
        </>
      }
      blocks={[
        {
          title: "Kitchen Surfaces",
          items: [
            "Tile backsplashes",
            "Kitchen floor tile",
            "LVP kitchen flooring",
            "Large-format tile",
          ],
        },
        {
          title: "Cabinets & Counters",
          items: [
            "Cabinet installation",
            "Cabinet removal and replacement",
            "Countertop coordination",
            "Trim and toe-kick finish work",
          ],
        },
        {
          title: "Build-Out",
          items: [
            "Kitchen demolition",
            "Drywall installation and repair",
            "Interior painting",
            "Floor preparation and leveling",
          ],
        },
        {
          title: "Finish Work",
          items: [
            "Hardware installation",
            "Caulk and grout detailing",
            "Baseboards and transitions",
            "Cleanup and debris removal",
          ],
        },
      ]}
    />
  );
}
