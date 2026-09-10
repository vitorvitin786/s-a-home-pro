import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import tileImg from "@/assets/tile-shower-remodel-jacksonville.jpg";

export const Route = createFileRoute("/tile-installation-jacksonville")({
  head: () => ({
    meta: [
      { title: "Tile Contractor Jacksonville FL | Tile Installation & Custom Showers" },
      {
        name: "description",
        content:
          "Tile installer in Jacksonville FL for porcelain, ceramic and large-format tile, shower tile, bathroom tile and backsplashes. Free estimates — call or text (904) 554-7517.",
      },
      { property: "og:title", content: "Tile Contractor Jacksonville FL | S&A Homes Services" },
      {
        property: "og:description",
        content:
          "Professional tile installation in Jacksonville FL: showers, floors, walls and backsplashes. Free estimates.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/tile-installation-jacksonville" },
    ],
    links: [{ rel: "canonical", href: "/tile-installation-jacksonville" }],
  }),
  component: TilePage,
});

function TilePage() {
  return (
    <ServicePage
      eyebrow="Tile Contractor Jacksonville FL"
      h1="Tile Installation in Jacksonville, FL"
      intro="Porcelain, ceramic and large-format tile installed by a crew that treats preparation as seriously as the finish. Showers, floors, walls and backsplashes across Jacksonville and Northeast Florida."
      image={tileImg}
      imageAlt="Custom porcelain tile shower with a built-in niche in a remodeled Jacksonville FL bathroom"
      formService="Tile Installation"
      body={
        <>
          <p>
            Tile is our strongest specialty. After more than 10 years of hands-on installation
            work, we know that a beautiful tile job is decided before the first tile is set — in
            the floor prep, the layout, the waterproofing and the substrate.
          </p>
          <h2 className="pt-2 text-2xl">A tile installer who preps first</h2>
          <p>
            Uneven concrete, flexing subfloors and out-of-square walls are the reason tile cracks,
            grout fails and large-format tile shows lippage. We flatten and prepare the surface,
            plan the layout so cuts land where they should, and use leveling systems on
            large-format tile to keep the finished plane tight.
          </p>
          <h2 className="pt-2 text-2xl">Custom tile showers built to stay dry</h2>
          <p>
            Shower walls, curbs, benches and niches are detailed with proper waterproofing
            preparation and sloped, correctly drained pans. The result is a shower that looks
            custom and performs for the long run — not one that needs to be torn out in five years.
          </p>
          <h2 className="pt-2 text-2xl">Backsplashes, floors and wall tile</h2>
          <p>
            From a weekend kitchen backsplash to whole-house porcelain floor tile, we handle
            demolition of the old surface, floor preparation and leveling, installation, grout and
            all the finish details — clean caulk lines, tidy edges and quality transitions.
          </p>
        </>
      }
      blocks={[
        {
          title: "Tile Types We Install",
          items: [
            "Porcelain tile",
            "Ceramic tile",
            "Large-format tile",
            "Floor tile",
            "Wall tile",
            "Mosaic & accent tile",
          ],
        },
        {
          title: "Showers & Bathrooms",
          items: [
            "Shower tile & shower walls",
            "Custom niches and benches",
            "Waterproofing preparation",
            "Bathroom tile floors",
            "Curbs, thresholds and trim details",
          ],
        },
        {
          title: "Kitchens & Living Areas",
          items: [
            "Kitchen tile floors",
            "Backsplashes",
            "Large-format porcelain living areas",
            "Laundry and entry tile",
          ],
        },
        {
          title: "Preparation & Finishing",
          items: [
            "Tile demolition and replacement",
            "Floor preparation and leveling",
            "Substrate and waterproofing prep",
            "Grout, caulk and finishing",
            "Debris removal and cleanup",
          ],
        },
      ]}
    />
  );
}
