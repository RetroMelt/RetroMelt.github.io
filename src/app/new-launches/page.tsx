import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "New Launches — Just Melted In",
  description:
    "The newest additions to the RETROMELT collection — new treats, same old nostalgic feeling.",
  path: "/new-launches",
});

export default function NewLaunchesPage() {
  const newProducts = products.filter((p) => p.badge === "NEW");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <SectionHeading
        title="Just Melted In 🍫"
        subtitle="New treats. Same old feeling."
      />
      <div className="mt-10">
        <ProductGrid products={newProducts} />
      </div>
    </section>
  );
}
