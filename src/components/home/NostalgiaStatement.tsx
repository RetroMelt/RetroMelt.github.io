import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function NostalgiaStatement() {
  return (
    <section className="bg-chocolate py-16 text-warmwhite md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeInWhenVisible>
          <p className="font-display text-2xl md:text-3xl">
            &ldquo;Remember when ₹10 could make your entire day?&rdquo;
          </p>

          <div className="mt-8 flex flex-col gap-3 text-base leading-relaxed text-warmwhite/85 md:text-lg">
            <p>When a chocolate after school could fix a bad day.</p>
            <p>
              When sharing one with your best friend somehow made it taste
              better.
            </p>
            <p>
              When the little trip to the neighbourhood shop felt like an
              adventure.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-display text-2xl md:text-3xl">
              They Weren&apos;t Just Chocolates.
            </p>
            <p className="font-display text-2xl text-mustard md:text-3xl">
              They Were Memories.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
