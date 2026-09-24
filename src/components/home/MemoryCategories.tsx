import Link from "next/link";
import { MEMORY_CATEGORIES } from "@/data/taxonomy";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function MemoryCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInWhenVisible>
          <SectionHeading title="Shop By Memory" />
        </FadeInWhenVisible>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEMORY_CATEGORIES.map((memory) => (
            <Link
              key={memory.slug}
              href={`/catalog?memory=${memory.slug}`}
              prefetch={false}
              className="retro-card flex flex-col gap-2 p-6 transition-transform hover:-translate-y-1"
            >
              <span className="text-3xl" aria-hidden="true">
                {memory.emoji}
              </span>
              <span className="font-display text-lg text-chocolate">
                {memory.label}
              </span>
              <span className="text-sm text-chocolate/75">{memory.tagline}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
