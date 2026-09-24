import { BADGES, type BadgeSlug } from "@/data/taxonomy";

const badgeColors: Record<BadgeSlug, string> = {
  NEW: "bg-retro-red text-warmwhite border-retro-red",
  BACK_BY_POPULAR_DEMAND: "bg-mustard text-chocolate border-chocolate",
  CHILDHOOD_CLASSIC: "bg-warmwhite text-chocolate border-chocolate",
  "90s_FAVOURITE": "bg-caramel text-warmwhite border-chocolate",
  "2000s_THROWBACK": "bg-teal-faded text-warmwhite border-chocolate",
};

export default function Badge({ slug }: { slug: BadgeSlug }) {
  const label = BADGES.find((b) => b.slug === slug)?.label ?? slug;
  return (
    <span className={`badge-sticker ${badgeColors[slug]}`}>{label}</span>
  );
}
