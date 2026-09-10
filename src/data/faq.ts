export const faqs = [
  {
    q: "Do you provide free estimates?",
    a: "Yes. Estimates are free. Call or text (904) 554-7517 or submit the estimate form and we'll follow up to discuss your project, measurements and materials.",
  },
  {
    q: "What areas do you serve?",
    a: "We provide services in Jacksonville, Mandarin, Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra, Ponte Vedra Beach, Nocatee, St. Johns, Julington Creek, Fleming Island, Orange Park and St. Augustine.",
  },
  {
    q: "Do you install LVP flooring?",
    a: "Yes. LVP and vinyl plank installation is one of our two main specialties, from single rooms to whole-house installations, including subfloor prep, transitions and baseboards.",
  },
  {
    q: "Do you install customer-supplied tile or flooring?",
    a: "Yes. Many customers buy their own tile or LVP and hire us for installation. We're happy to review your material choice and quantities before you order.",
  },
  {
    q: "Can you remove old flooring?",
    a: "Yes. We handle tile removal, carpet and vinyl removal, thinset grinding and debris cleanup as part of the project.",
  },
  {
    q: "Do you level floors before installing LVP or tile?",
    a: "Yes. Floor preparation is part of doing the job right. We correct uneven concrete and wood subfloors with self-leveling and patching so the finished floor sits flat and lasts.",
  },
  {
    q: "Can you remodel an entire bathroom?",
    a: "Yes. We handle complete bathroom renovations — demolition, shower rebuild, waterproofing, tile, vanity, flooring, drywall, painting and finish work.",
  },
  {
    q: "Do you build custom tile showers?",
    a: "Yes. Custom tile showers are a specialty, including shower niches, benches, curbs, waterproofing preparation and full-height tile walls.",
  },
  {
    q: "Do you install large-format tile?",
    a: "Yes. Large-format tile requires flat substrates and proper technique. We prepare the surface and use leveling systems to keep lippage to a minimum.",
  },
  {
    q: "Can you install kitchen backsplashes?",
    a: "Yes. Backsplashes are a fast, high-impact upgrade — subway, mosaic, porcelain and large-format panels included.",
  },
  {
    q: "Do you handle demolition?",
    a: "Yes. Flooring demolition, tile removal, bathroom and kitchen demolition and cleanup are all part of what we do.",
  },
  {
    q: "Can you do drywall and painting as part of a remodel?",
    a: "Yes. Drywall installation, wall repair and interior painting are included in most of our remodeling projects so you don't need a second contractor.",
  },
  {
    q: "How do I request an estimate?",
    a: "Call or text (904) 554-7517, email sauloaguiarcamp@outlook.com, or fill out the free estimate form on our contact page. Photos of the space help us respond faster.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
