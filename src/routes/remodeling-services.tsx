import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import heroImg from "@/assets/kitchen-remodeling-jacksonville.jpg";

export const Route = createFileRoute("/remodeling-services")({
  head: () => ({
    meta: [
      { title: "Home Remodeling Services Jacksonville FL | S&A Homes Services" },
      {
        name: "description",
        content:
          "Residential remodeling, demolition, drywall, painting, flooring and finish work in Jacksonville and Northeast Florida. Request a free estimate.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sahomeservices.com/remodeling-services" }],
  }),
  component: RemodelingServices,
});

function RemodelingServices() {
  return (
    <ServicePage
      eyebrow="Home Remodeling"
      h1="General Home Remodeling Services in Jacksonville, FL"
      intro="From demolition and floor preparation to drywall, painting and finish work, S&A Homes Services can help bring your residential remodeling project together."
      image={heroImg}
      imageAlt="Kitchen remodeling project in Jacksonville Florida"
      formService="Other Remodeling"
      body={
        <>
          <p>
            Not every project fits into one category. We help homeowners with the work that connects
            a remodeling project from start to finish, including demolition, flooring removal,
            drywall, painting and other finish work.
          </p>
          <p>
            Our strongest specialties are tile installation and LVP/vinyl flooring, but we can also
            help coordinate and complete many other residential improvements.
          </p>
          <p>
            If your project is not listed below, contact us. We can discuss the scope and help
            determine the best next step.
          </p>
        </>
      }
      blocks={[
        {
          title: "Demolition & Preparation",
          items: [
            "Tile and flooring removal",
            "Bathroom and kitchen demolition",
            "Remodeling preparation",
            "Debris cleanup",
          ],
        },
        {
          title: "Drywall & Painting",
          items: [
            "Drywall installation",
            "Drywall and wall repair",
            "Interior painting",
            "Remodeling finish work",
          ],
        },
        {
          title: "Flooring Support",
          items: [
            "Floor removal",
            "Subfloor preparation",
            "Floor leveling",
            "Transitions and baseboards",
          ],
        },
        {
          title: "Other Remodeling",
          items: [
            "Residential improvements",
            "Finish carpentry coordination",
            "Project-specific preparation",
            "Custom project consultation",
          ],
        },
      ]}
    />
  );
}
