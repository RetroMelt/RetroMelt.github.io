// Single source of truth for era / category / memory-category / badge taxonomy.
// Product data, catalog filters, and homepage cards all import from here so
// there is exactly one place a new slug gets added.

export const ERAS = [
  { slug: "80s", label: "80s", tagline: "Old-school classics." },
  { slug: "90s", label: "90s", tagline: "The golden era." },
  { slug: "2000s", label: "2000s", tagline: "School-day favourites." },
  { slug: "classics", label: "Classics", tagline: "The ones everyone remembers." },
] as const;

export const CATEGORIES = [
  { slug: "chocolates", label: "Chocolates" },
  { slug: "candies", label: "Candies" },
  { slug: "toffees", label: "Toffees" },
  { slug: "gum", label: "Gum" },
  { slug: "classic-treats", label: "Classic Treats" },
] as const;

export const MEMORY_CATEGORIES = [
  {
    slug: "school-days",
    label: "School Days",
    emoji: "🎒",
    tagline: "The ones you bought after the bell rang.",
  },
  {
    slug: "pocket-money-picks",
    label: "Pocket Money Picks",
    emoji: "💰",
    tagline: "Small change. Big happiness.",
  },
  {
    slug: "birthday-memories",
    label: "Birthday Memories",
    emoji: "🎂",
    tagline: "The treats that made every birthday sweeter.",
  },
  {
    slug: "tv-time-treats",
    label: "TV-Time Treats",
    emoji: "📺",
    tagline: "Best enjoyed during your favourite show.",
  },
  {
    slug: "kirana-classics",
    label: "Kirana Classics",
    emoji: "🏪",
    tagline: "The reason you always wanted to stop at the shop.",
  },
  {
    slug: "memory-boxes",
    label: "Memory Boxes",
    emoji: "🎁",
    tagline: "Give someone their childhood back.",
  },
] as const;

export const BADGES = [
  { slug: "NEW", label: "NEW" },
  { slug: "BACK_BY_POPULAR_DEMAND", label: "Back By Popular Demand" },
  { slug: "CHILDHOOD_CLASSIC", label: "Childhood Classic" },
  { slug: "90s_FAVOURITE", label: "90s Favourite" },
  { slug: "2000s_THROWBACK", label: "2000s Throwback" },
] as const;

export type EraSlug = (typeof ERAS)[number]["slug"];
export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
export type MemoryCategorySlug = (typeof MEMORY_CATEGORIES)[number]["slug"];
export type BadgeSlug = (typeof BADGES)[number]["slug"];
