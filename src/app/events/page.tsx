import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import EventPackages from "@/components/events/EventPackages";
import EventInquiryForm from "@/components/events/EventInquiryForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Events — Retro Candy Table & Nostalgic Event Setups",
  description:
    "Bring RETROMELT's nostalgic candy table to your birthday party, wedding, corporate event or school celebration. Enquire — no pricing, just good old-fashioned nostalgia.",
  path: "/events",
});

const EVENT_TYPES = [
  { emoji: "🎂", label: "Birthday Parties" },
  { emoji: "💍", label: "Weddings & Engagements" },
  { emoji: "🏫", label: "School & College Events" },
  { emoji: "🏢", label: "Corporate Events" },
  { emoji: "🎉", label: "Private Parties" },
  { emoji: "🎪", label: "Flea Markets & Pop-Ups" },
  { emoji: "🎁", label: "Return Gifts" },
  { emoji: "🎊", label: "Community Events" },
];

export default function EventsPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <SectionHeading
          title="Make Your Event A Little Sweeter 🍫"
          subtitle="From birthday parties to corporate events, weddings, school events and nostalgic pop-ups — RETROMELT can bring the good old days to your celebration."
        />
      </section>

      <section className="bg-warmwhite py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="We Accept Event Orders" />
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {EVENT_TYPES.map((type) => (
              <div
                key={type.label}
                className="retro-card flex flex-col items-center gap-2 p-6 text-center"
              >
                <span className="text-3xl" aria-hidden="true">
                  {type.emoji}
                </span>
                <span className="font-display text-sm text-chocolate">
                  {type.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" title="Retro Candy Table" />
            <p className="mt-4 text-chocolate/85">
              Want RETROMELT at your event? We can create a nostalgic candy
              table filled with old-school treats your guests will remember.
            </p>
          </div>
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/placeholders/event-table.svg"
              alt="A RETROMELT retro candy table set up for an event"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-warmwhite py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Event Concepts" />
          <div className="mt-10">
            <EventPackages />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Want A RETROMELT Table At Your Event?"
            subtitle="Tell us about your event and we'll get back to you with the best options."
          />
          <div className="mt-10">
            <EventInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
