import { CONTACT_INFO } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

const POST_PROMPTS = [
  "Remember this? 👀",
  "90s vs 2000s: fight",
  "Guess the chocolate 🍫",
  "₹10 childhood challenge",
  "Old wrapper reveal",
  "Only 90s kids remember...",
];

export default function InstagramSection() {
  return (
    <section className="bg-warmwhite py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInWhenVisible>
          <SectionHeading
            title="Melt With Us"
            subtitle="A little nostalgia, one post at a time."
          />
        </FadeInWhenVisible>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {POST_PROMPTS.map((prompt) => (
            <div
              key={prompt}
              className="flex aspect-square items-center justify-center rounded-retro border-2 border-chocolate/20 bg-cream p-4 text-center font-display text-sm text-chocolate"
            >
              {prompt}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={CONTACT_INFO.instagramUrl}
            className="font-display text-sm uppercase tracking-wide text-caramel hover:text-chocolate"
          >
            Follow {CONTACT_INFO.instagramHandle} →
          </a>
        </div>
      </div>
    </section>
  );
}
