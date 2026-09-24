import { memories } from "@/data/memories";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import RetroCard from "@/components/ui/RetroCard";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function MemoryWallTeaser() {
  const featured = memories.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInWhenVisible>
          <SectionHeading title="You Remember It. We Brought It Back. ❤️" />
        </FadeInWhenVisible>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((memory) => (
            <RetroCard key={memory.id} className="p-6">
              <p className="text-chocolate/85">&ldquo;{memory.memoryText}&rdquo;</p>
              <p className="mt-4 font-display text-sm text-caramel">
                — {memory.name}
              </p>
            </RetroCard>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/memories" variant="secondary">
            Share Your Memory
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
