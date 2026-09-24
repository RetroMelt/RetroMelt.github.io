import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeInWhenVisible>
          <SectionHeading
            title="Looking For Something Specific?"
            subtitle="Tell us what you're craving and we'll help you find it."
          />
          <div className="mt-6">
            <ButtonLink href="/contact">Let&apos;s Talk</ButtonLink>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
