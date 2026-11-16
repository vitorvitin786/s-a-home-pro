import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import lvpImg from "@/assets/lvp-vinyl-flooring-jacksonville.jpg";

export const Route = createFileRoute("/lvp-vinyl-flooring-jacksonville")({
  head: () => ({
    meta: [
      { title: "LVP & Vinyl Flooring Jacksonville FL | Luxury Vinyl Plank Installation" },
      {
        name: "description",
        content:
          "LVP installation in Jacksonville FL — waterproof luxury vinyl plank, whole-house flooring, subfloor prep and floor leveling. Free estimates: (904) 554-7517.",
      },
      {
        property: "og:title",
        content: "LVP & Vinyl Flooring Jacksonville FL | S&A Homes Services",
      },
      {
        property: "og:description",
        content:
          "Luxury vinyl plank and waterproof vinyl flooring installed across Jacksonville and Northeast Florida. Free estimates.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/lvp-vinyl-flooring-jacksonville" },
    ],
    links: [{ rel: "canonical", href: "https://sahomeservices.com/lvp-vinyl-flooring-jacksonville" }],
  }),
  component: LvpPage,
});

function LvpPage() {
  return (
    <ServicePage
      eyebrow="LVP & Vinyl Flooring Jacksonville FL"
      h1="LVP & Vinyl Flooring Installation in Jacksonville"
      intro="Waterproof luxury vinyl plank installed over properly prepared subfloors — flat, quiet and finished with clean transitions and baseboards."
      image={lvpImg}
      imageAlt="Wide open living room with newly installed luxury vinyl plank flooring in Jacksonville FL"
      formService="LVP / Vinyl Flooring"
      body={
        <>
          <p>
            LVP is the most popular flooring in Northeast Florida for good reason: it is waterproof,
            durable, comfortable underfoot and it handles Florida humidity far better than most
            alternatives. It is also the flooring most often installed badly.
          </p>
          <h2 className="pt-2 text-2xl">Flat floors first</h2>
          <p>
            Vinyl plank follows the shape of whatever is under it. Dips in a concrete slab, high
            spots and old adhesive create hollow spots, separated seams and clicking that only gets
            worse. We check the slab, grind and patch what needs it, and self-level where it is
            required before a single plank goes down.
          </p>
          <h2 className="pt-2 text-2xl">Whole-house installations</h2>
          <p>
            We remove old carpet, tile and vinyl, prep the subfloor, and run plank continuously
            through the home so you don&rsquo;t end up with unnecessary transition strips in the
            middle of a hallway. Baseboards, quarter round, stair noses and thresholds are finished
            to match.
          </p>
          <h2 className="pt-2 text-2xl">Straight answers on materials</h2>
          <p>
            We install both customer-supplied flooring and material we help you source. Before you
            buy, we can review wear layer, plank thickness and quantity so you order the right
            product and the right amount.
          </p>
        </>
      }
      blocks={[
        {
          title: "Flooring We Install",
          items: [
            "Luxury Vinyl Plank (LVP)",
            "Vinyl plank flooring",
            "Waterproof flooring",
            "Whole-house flooring",
            "Residential flooring installation",
          ],
        },
        {
          title: "Preparation",
          items: [
            "Existing flooring removal",
            "Carpet, tile and old vinyl tear-out",
            "Subfloor preparation",
            "Floor leveling and patching",
            "Concrete grinding and adhesive removal",
          ],
        },
        {
          title: "Finish Details",
          items: [
            "Baseboards and quarter round",
            "Transitions and thresholds",
            "Stair noses",
            "Door undercutting",
          ],
        },
        {
          title: "Also Available",
          items: [
            "Tile-to-LVP transitions",
            "Single-room installs",
            "Rental and investment property flooring",
            "Debris haul-off and cleanup",
          ],
        },
      ]}
    />
  );
}
