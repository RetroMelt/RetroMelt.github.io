import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Story",
  description:
    "The story behind RETROMELT — a nostalgic Indian chocolate and candy brand bringing back childhood treats from the 80s, 90s and 2000s.",
  path: "/our-story",
});

const PARAGRAPHS = [
  "We grew up in a time when happiness could be bought with a handful of pocket change.",
  "A chocolate after school.",
  "A candy shared with a friend.",
  "A trip to the neighbourhood shop.",
  "A treat waiting inside a birthday return gift.",
  "Simple things.",
  "Big memories.",
  "As we grew older, those little treats slowly became harder to find.",
  "But the memories stayed.",
  "RETROMELT was born from that feeling.",
  "A place where old favourites, childhood treats and forgotten flavours can bring you back — even if only for a moment.",
  "Because sometimes, you don't miss the chocolate.",
  "You miss who you were when you ate it.",
  "Welcome to RETROMELT.",
];

export default function OurStoryPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <SectionHeading title="Some Memories Deserve A Second Bite." />
      <div className="mt-10 flex flex-col gap-4 text-base leading-relaxed text-chocolate/85 md:text-lg">
        {PARAGRAPHS.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <p className="font-display text-2xl text-caramel">
          Melt into the good old days.
        </p>
      </div>
    </section>
  );
}
