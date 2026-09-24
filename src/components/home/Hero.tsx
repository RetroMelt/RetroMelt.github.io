import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative w-full aspect-[1080/529] overflow-hidden">
      <Image
        src="/Top.png"
        alt={`${SITE.name} — ${SITE.tagline} Your childhood called: we're bringing the good old days back.`}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute left-[4%] top-[84%] flex flex-row flex-wrap gap-1.5 sm:gap-3">
        <ButtonLink
          href="/catalog"
          variant="primary"
          className="px-2 py-1 text-[9px] sm:px-6 sm:py-3 sm:text-sm"
        >
          Explore The Collection
        </ButtonLink>
        <ButtonLink
          href="/our-story"
          variant="secondary"
          className="!bg-warmwhite px-2 py-1 text-[9px] sm:px-6 sm:py-3 sm:text-sm"
        >
          Our Story
        </ButtonLink>
      </div>
    </section>
  );
}
