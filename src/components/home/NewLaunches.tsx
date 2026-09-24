import Link from "next/link";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function NewLaunches() {
  const newProducts = products.filter((p) => p.badge === "NEW");
  const featured = (newProducts.length > 0 ? newProducts : products).slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInWhenVisible>
          <SectionHeading
            eyebrow="Just Melted In"
            title="Just Melted In 🍫"
            subtitle="New treats. Same old feeling."
          />
          <div className="mt-10">
            <ProductGrid products={featured} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/new-launches"
              prefetch={false}
              className="font-display text-sm uppercase tracking-wide text-caramel hover:text-chocolate"
            >
              See All New Launches →
            </Link>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
