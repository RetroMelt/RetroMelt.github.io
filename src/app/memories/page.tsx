import type { Metadata } from "next";
import { memories } from "@/data/memories";
import SectionHeading from "@/components/ui/SectionHeading";
import MemoryWallGrid from "@/components/memories/MemoryWallGrid";
import MemoryForm from "@/components/memories/MemoryForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Memory Wall — Share Your Childhood Chocolate Memory",
  description:
    "Read nostalgic memories from fellow 90s and 2000s kids, and share your own childhood chocolate or candy memory with RETROMELT.",
  path: "/memories",
});

export default function MemoriesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <SectionHeading title="You Remember It. We Brought It Back. ❤️" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <MemoryWallGrid memories={memories} />
      </section>

      <section className="bg-warmwhite py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Share Your Memory" />
          <div className="mt-10">
            <MemoryForm />
          </div>
        </div>
      </section>
    </>
  );
}
