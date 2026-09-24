import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function EventsTeaser() {
  return (
    <section className="bg-warmwhite py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        <FadeInWhenVisible>
          <SectionHeading
            align="left"
            title="Make Your Event A Little Sweeter 🍫"
            subtitle="From birthday parties to weddings, school events and nostalgic pop-ups — RETROMELT can bring the good old days to your celebration."
          />
          <div className="mt-6">
            <ButtonLink href="/events">Bring RETROMELT To Your Event</ButtonLink>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible className="relative mx-auto aspect-[3/2] w-full max-w-lg">
          <Image
            src="/placeholders/event-table.svg"
            alt="A nostalgic retro candy table set up for an event"
            fill
            className="object-contain"
          />
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
