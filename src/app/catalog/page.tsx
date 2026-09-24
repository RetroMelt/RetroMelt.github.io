import { Suspense } from "react";
import type { Metadata } from "next";
import { products } from "@/data/products";
import CatalogFilters from "@/components/product/CatalogFilters";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "The RETROMELT Collection — Retro Indian Chocolates & Candies",
  description:
    "Explore RETROMELT's collection of nostalgic Indian chocolates, candies and toffees from the 80s, 90s and 2000s. Enquire about any treat — no checkout required.",
  path: "/catalog",
});

export default function CatalogPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <SectionHeading
        title="The RETROMELT Collection"
        subtitle="Your childhood, one wrapper at a time."
      />
      <div className="mt-10">
        <Suspense fallback={null}>
          <CatalogFilters products={products} />
        </Suspense>
      </div>
    </section>
  );
}
