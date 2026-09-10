export const site = {
  name: "S&A Homes Services LLC",
  shortName: "S&A Homes Services",
  phoneDisplay: "(904) 554-7517",
  phoneRaw: "9045547517",
  telHref: "tel:+19045547517",
  smsHref: "sms:+19045547517",
  email: "sauloaguiarcamp@outlook.com",
  mailHref: "mailto:sauloaguiarcamp@outlook.com",
  city: "Jacksonville",
  state: "Florida",
  areaLine: "Serving Jacksonville & Northeast Florida",
  social: {
    facebook: null,
    instagram: null,
    google: null,
  },
};

export const serviceAreas = [
  "Jacksonville",
  "Mandarin",
  "Jacksonville Beach",
  "Atlantic Beach",
  "Neptune Beach",
  "Ponte Vedra",
  "Ponte Vedra Beach",
  "Nocatee",
  "St. Johns",
  "Julington Creek",
  "Fleming Island",
  "Orange Park",
  "St. Augustine",
];

export const serviceOptions = [
  "Tile Installation",
  "LVP / Vinyl Flooring",
  "Bathroom Remodeling",
  "Kitchen Remodeling",
  "Floor Leveling",
  "Pavers",
  "Drywall",
  "Painting",
  "Demolition",
  "Other Remodeling",
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Tile", to: "/tile-installation-jacksonville" },
  { label: "Vinyl / LVP", to: "/lvp-vinyl-flooring-jacksonville" },
  { label: "Bathrooms", to: "/bathroom-remodeling-jacksonville" },
  { label: "Kitchens", to: "/kitchen-remodeling-jacksonville" },
  { label: "Remodeling Services", to: "/remodeling-services" },
  { label: "Commercial", to: "/commercial" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  description:
    "Tile installation, LVP and vinyl flooring, bathroom and kitchen remodeling in Jacksonville and Northeast Florida.",
  telephone: "+1-904-554-7517",
  email: site.email,
  areaServed: serviceAreas,
  knowsAbout: [
    "Tile installation",
    "Luxury vinyl plank flooring",
    "Bathroom remodeling",
    "Kitchen remodeling",
    "Floor leveling",
    "Paver installation",
  ],
};
