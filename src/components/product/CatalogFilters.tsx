"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/types";
import { BADGES, CATEGORIES, ERAS, MEMORY_CATEGORIES } from "@/data/taxonomy";
import ProductGrid from "@/components/product/ProductGrid";

type ActiveFilter = {
  label: string;
  test: (product: Product) => boolean;
};

const ALL_FILTER: ActiveFilter = { label: "All", test: () => true };

// The chips shown on the catalog page, matching spec section 12's filter list.
const CHIPS: ActiveFilter[] = [
  ALL_FILTER,
  { label: "Chocolates", test: (p) => p.category === "chocolates" },
  { label: "Candies", test: (p) => p.category === "candies" },
  { label: "Toffees", test: (p) => p.category === "toffees" },
  { label: "Gum", test: (p) => p.category === "gum" },
  { label: "Classic Treats", test: (p) => p.category === "classic-treats" },
  { label: "New Launches", test: (p) => p.badge === "NEW" },
  { label: "Memory Boxes", test: (p) => p.memoryCategory === "memory-boxes" },
];

// Deep links (e.g. from the homepage's era/memory cards) can point at any
// taxonomy slug, not just the ones surfaced as chips above.
function filterFromParams(params: URLSearchParams): ActiveFilter | null {
  const era = params.get("era");
  const category = params.get("category");
  const memory = params.get("memory");
  const badge = params.get("badge");

  const eraMatch = ERAS.find((e) => e.slug === era);
  if (eraMatch) return { label: eraMatch.label, test: (p) => p.era === era };

  const categoryMatch = CATEGORIES.find((c) => c.slug === category);
  if (categoryMatch)
    return { label: categoryMatch.label, test: (p) => p.category === category };

  const memoryMatch = MEMORY_CATEGORIES.find((m) => m.slug === memory);
  if (memoryMatch)
    return { label: memoryMatch.label, test: (p) => p.memoryCategory === memory };

  const badgeMatch = BADGES.find((b) => b.slug === badge);
  if (badgeMatch) return { label: badgeMatch.label, test: (p) => p.badge === badge };

  return null;
}

export default function CatalogFilters({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();

  const initialFilter = useMemo(
    () => filterFromParams(searchParams) ?? ALL_FILTER,
    // Only read the query params that seeded the page on first render —
    // after that, the filter chips drive selection.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [activeFilter, setActiveFilter] = useState<ActiveFilter>(initialFilter);
  const activeChip = CHIPS.find((chip) => chip.label === activeFilter.label);
  const filtered = products.filter(activeFilter.test);

  return (
    <div className="flex flex-col gap-6">
      {!activeChip && activeFilter.label !== "All" && (
        <p className="text-center text-sm text-chocolate/70">
          Showing results for{" "}
          <span className="font-display text-chocolate">{activeFilter.label}</span>{" "}
          ·{" "}
          <button
            type="button"
            onClick={() => setActiveFilter(ALL_FILTER)}
            className="underline hover:text-caramel"
          >
            clear
          </button>
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        {CHIPS.map((chip) => (
          <button
            key={chip.label}
            type="button"
            onClick={() => setActiveFilter(chip)}
            aria-pressed={activeFilter.label === chip.label}
            className={`rounded-full border-2 px-4 py-2 font-display text-sm uppercase tracking-wide transition-colors ${
              activeFilter.label === chip.label
                ? "border-chocolate bg-chocolate text-warmwhite"
                : "border-chocolate/30 text-chocolate hover:border-caramel"
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
