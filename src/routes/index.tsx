import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Check, HardHat, HomeIcon, MapPin, Quote, Star } from "lucide-react";
import { EstimateForm } from "@/components/site/EstimateForm";
import { BrandLogo } from "@/components/site/BrandLogo";
import heroImg from "@/assets/kitchen-remodeling-jacksonville.jpg";
import tileImg from "@/assets/tile-shower-remodel-jacksonville.jpg";
import lvpImg from "@/assets/lvp-vinyl-flooring-jacksonville.jpg";
import kitchenImg from "@/assets/kitchen-remodeling-jacksonville.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Remodeling Jacksonville | S&A Homes Services" },
      {
        name: "description",
        content:
          "Residential and commercial tile, flooring, kitchen and bathroom remodeling across Jacksonville and Northeast Florida.",
      },
    ],
  }),
  component: Home,
});

const services = [
  [
    "Tile Installation",
    "Precision tilework for floors, showers, walls and backsplashes.",
    tileImg,
    "/tile-installation-jacksonville",
  ],
  [
    "LVP / Vinyl Flooring",
    "Durable luxury flooring with expert subfloor preparation.",
    lvpImg,
    "/lvp-vinyl-flooring-jacksonville",
  ],
  [
    "Bathroom Remodeling",
    "Refined, functional bathrooms built around your vision.",
    tileImg,
    "/bathroom-remodeling-jacksonville",
  ],
  [
    "Kitchen Remodeling",
    "Elevated kitchens with thoughtful details and fine finishes.",
    kitchenImg,
    "/kitchen-remodeling-jacksonville",
  ],
  [
    "Floor Leveling",
    "A flawless foundation for lasting, beautiful new flooring.",
    lvpImg,
    "/floor-preparation-leveling",
  ],
  [
    "Commercial Projects",
    "Reliable build-outs, renovations and flooring for your business.",
    heroImg,
    "/contact",
  ],
] as const;

const reviews = [
  [
    "Exceptional from start to finish",
    "S&A transformed our bathroom. Every line is clean, every detail feels intentional, and the crew treated our home with real care.",
    "Jacksonville Homeowner",
  ],
  [
    "Professional and dependable",
    "Communication was excellent and the finished flooring exceeded our expectations. The entire project stayed organized and on schedule.",
    "Northeast Florida Client",
  ],
  [
    "A partner we can count on",
    "They understand the pace and quality commercial work requires. We look forward to bringing S&A onto future projects.",
    "Local Project Partner",
  ],
];

function Home() {
  return (
    <div className="luxury-home">
      <section className="hero-luxury">
        <div className="hero-glow" />
        <div className="container-x hero-grid">
          <div className="hero-copy">
            <BrandLogo className="hero-logo" />
            <p className="lux-eyebrow">Residential &amp; Commercial Projects</p>
            <h1>
              S&amp;A Homes <em>Services</em>
            </h1>
            <p className="hero-services">
              Tile <span>•</span> Flooring <span>•</span> Remodeling
            </p>
            <p className="hero-lede">
              Trusted craftsmanship for homes and businesses across Jacksonville / Northeast
              Florida.
            </p>
            <div className="hero-actions">
              <a href="#estimate" className="lux-btn">
                Get a Free Estimate <ArrowRight />
              </a>
              <Link to="/portfolio" className="lux-btn secondary">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImg} alt="Luxury remodeled kitchen by S&A Homes Services" />
            <div className="image-frame" />
            <div className="experience-mark">
              <strong>10+</strong>
              <span>
                Years of
                <br />
                Craftsmanship
              </span>
            </div>
          </div>
        </div>
        <div className="container-x trust-grid">
          {[
            [HomeIcon, "Residential & Commercial"],
            [Building2, "We Accept Commercial Work"],
            [HardHat, "Looking for Contractors & General Contractors"],
            [MapPin, "Jacksonville / Northeast Florida"],
          ].map(([Icon, text]) => (
            <div className="trust-item" key={String(text)}>
              <Icon />
              <span>{text as string}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="lux-section">
        <div className="container-x">
          <Heading
            eyebrow="Our Expertise"
            title={
              <>
                Craftsmanship, <em>Elevated.</em>
              </>
            }
            text="From carefully set tile to full-scale renovations, we deliver precise work and a polished experience."
          />
          <div className="service-grid">
            {services.map(([title, text, img, to], i) => (
              <Link to={to} className="service-card" key={title}>
                <div className="service-image">
                  <img src={img} alt={title} />
                  <span>0{i + 1}</span>
                </div>
                <div className="service-content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="learn">
                    Explore Service <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="residential" className="split-section">
        <div className="container-x split-grid">
          <article>
            <p className="lux-eyebrow">For Your Home</p>
            <HomeIcon />
            <h2>
              Residential <em>Services</em>
            </h2>
            <p>
              Thoughtful renovations, enduring materials and a detail-driven process—designed to
              make your home feel entirely your own.
            </p>
            <ul>
              {[
                "Kitchens & bathroom renovations",
                "Tile, LVP & flooring installation",
                "Floor preparation & leveling",
              ].map((x) => (
                <li key={x}>
                  <Check />
                  {x}
                </li>
              ))}
            </ul>
            <a href="#estimate" className="text-link">
              Plan Your Home Project <ArrowRight />
            </a>
          </article>
          <article id="commercial" className="commercial-panel">
            <p className="lux-eyebrow">Built for Business</p>
            <Building2 />
            <h2>
              Commercial <em>Services</em>
            </h2>
            <strong>We accept commercial work.</strong>
            <p>
              We partner with businesses, property managers, builders and developers for dependable
              renovations, flooring and finish work.
            </p>
            <ul>
              {[
                "Commercial flooring & tile",
                "Tenant improvements & remodels",
                "Reliable scheduling and communication",
              ].map((x) => (
                <li key={x}>
                  <Check />
                  {x}
                </li>
              ))}
            </ul>
            <a href="#partnerships" className="text-link">
              Discuss a Commercial Project <ArrowRight />
            </a>
          </article>
        </div>
      </section>

      <section id="partnerships" className="partner-section">
        <div className="container-x partner-inner">
          <div className="partner-icon">
            <HardHat />
          </div>
          <div>
            <p className="lux-eyebrow">Trade Partnerships</p>
            <h2>
              Looking for Contractors &amp;
              <br />
              <em>General Contractors?</em>
            </h2>
            <p>
              S&amp;A Homes Services is open to working with contractors, general contractors,
              builders and commercial partners on residential and commercial projects. Bring us into
              your next build for skilled, accountable craftsmanship.
            </p>
          </div>
          <a href="#estimate" className="lux-btn">
            Let’s Work Together <ArrowRight />
          </a>
        </div>
      </section>

      <section id="reviews" className="lux-section reviews">
        <div className="container-x">
          <Heading
            eyebrow="Client Experiences"
            title={
              <>
                Built on Trust. <em>Finished with Care.</em>
              </>
            }
            text="Our reputation is measured in lasting work and clients who are proud to recommend us."
          />
          <div className="review-grid">
            {reviews.map(([title, text, name]) => (
              <article key={title}>
                <Quote />
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} />
                  ))}
                </div>
                <h3>{title}</h3>
                <p>“{text}”</p>
                <span>{name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="estimate-section">
        <div className="container-x estimate-grid">
          <div>
            <p className="lux-eyebrow">Start a Conversation</p>
            <h2>
              Let’s Build Something <em>Exceptional.</em>
            </h2>
            <p>
              Tell us about your residential or commercial project. We’ll follow up with clear next
              steps and a free estimate.
            </p>
            <div className="estimate-notes">
              <span>
                <Check />
                Free, no-obligation estimate
              </span>
              <span>
                <Check />
                Residential & commercial projects
              </span>
              <span>
                <Check />
                Serving Northeast Florida
              </span>
            </div>
          </div>
          <EstimateForm compact />
        </div>
      </section>
    </div>
  );
}

function Heading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <div className="lux-heading">
      <p className="lux-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
