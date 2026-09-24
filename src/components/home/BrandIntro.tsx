import Image from "next/image";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import { ButtonLink } from "@/components/ui/Button";

export default function BrandIntro() {
  return (
    <section className="bg-warmwhite py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <Image
              src="/2nd-polaroid.png"
              alt="A polaroid photo of a child in a school uniform with a backpack, captioned 'Same treats. New stories.'"
              width={360}
              height={367}
              className="h-auto w-56 shrink-0 md:w-64"
            />

            <div className="flex flex-1 flex-col gap-4 text-left">
              <h2 className="font-display text-3xl text-chocolate md:text-4xl">
                Some Memories Deserve A Second Bite.
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-chocolate/85 md:text-lg">
                <p>
                  We grew up with chocolates that cost a few rupees, school
                  bags filled with secrets, summer holidays that felt endless
                  and neighbourhood shops that somehow had everything we
                  wanted.
                </p>
                <p>Then life got busier.</p>
                <p>But some flavours never left us.</p>
                <p>RETROMELT was created to bring those moments back.</p>
                <p>Not just chocolates.</p>
                <p className="font-display text-xl text-chocolate md:text-2xl">
                  Memories you can unwrap.
                </p>
              </div>
              <ButtonLink href="/our-story" variant="primary" className="mt-2 self-start">
                Discover Our Story →
              </ButtonLink>
            </div>

            <Image
              src="/2nd-doodles.png"
              alt=""
              aria-hidden="true"
              width={260}
              height={367}
              className="hidden h-auto w-28 shrink-0 lg:block xl:w-36"
            />
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
