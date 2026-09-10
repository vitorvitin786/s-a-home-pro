/**
 * PROJECT GALLERY DATA
 * --------------------
 * To add a new project, drop your photos in `src/assets/` (or `public/images/`)
 * and add one entry to the array below. Nothing else needs to change.
 *
 * Tip for SEO: name photo files like
 *   tile-shower-remodel-mandarin-jacksonville.jpg
 * and always write a real description in `alt`.
 */

export const portfolioCategories = [
  "All",
  "Tile",
  "Showers",
  "Bathrooms",
  "LVP / Vinyl",
  "Kitchens",
  "Flooring",
  "Pavers",
  "Remodeling",
  "Before & After",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type Project = {
  id: string;
  title: string;
  categories: PortfolioCategory[];
  city: string;
  description?: string;
  /** Finished photo (URL or imported asset). */
  after?: string;
  /** Optional "before" photo — enables the before/after slider. */
  before?: string;
  alt?: string;
};

export const projects: Project[] = [
  {
    id: "placeholder-1",
    title: "Custom Tile Shower",
    categories: ["Tile", "Showers", "Bathrooms"],
    city: "Jacksonville, FL",
    description: "Photo coming soon — real project photos are being added.",
  },
  {
    id: "placeholder-2",
    title: "Whole-Home LVP Installation",
    categories: ["LVP / Vinyl", "Flooring"],
    city: "Mandarin, FL",
    description: "Photo coming soon — real project photos are being added.",
  },
  {
    id: "placeholder-3",
    title: "Large-Format Floor Tile",
    categories: ["Tile", "Flooring"],
    city: "Ponte Vedra, FL",
    description: "Photo coming soon — real project photos are being added.",
  },
  {
    id: "placeholder-4",
    title: "Full Bathroom Remodel",
    categories: ["Bathrooms", "Remodeling", "Before & After"],
    city: "Orange Park, FL",
    description: "Photo coming soon — real project photos are being added.",
  },
  {
    id: "placeholder-5",
    title: "Kitchen Backsplash & Flooring",
    categories: ["Kitchens", "Tile"],
    city: "St. Johns, FL",
    description: "Photo coming soon — real project photos are being added.",
  },
  {
    id: "placeholder-6",
    title: "Paver Patio & Walkway",
    categories: ["Pavers", "Remodeling"],
    city: "Fleming Island, FL",
    description: "Photo coming soon — real project photos are being added.",
  },
];
