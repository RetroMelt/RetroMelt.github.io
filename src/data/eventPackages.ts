import type { EventPackage } from "@/types";

// Concept categories, not fixed paid packages — no pricing fields exist on
// this type at all, by design.
export const eventPackages: EventPackage[] = [
  {
    id: "classic-table",
    name: "The Classic Table",
    description: "Old-school treats for everyone.",
    idealFor: ["Weddings", "Corporate events", "Community events"],
  },
  {
    id: "90s-table",
    name: "The 90s Table",
    description: "Straight out of the golden era.",
    idealFor: ["Birthday parties", "College events", "Pop-ups"],
  },
  {
    id: "school-day-table",
    name: "The School-Day Table",
    description: "Pocket money, school bags and all.",
    idealFor: ["School events", "Return gifts", "Family functions"],
  },
  {
    id: "custom-retro-table",
    name: "Custom Retro Table",
    description: "Tell us your memory. We'll create the experience.",
    idealFor: ["Any occasion", "A specific decade or theme", "Personal favourites"],
  },
];
