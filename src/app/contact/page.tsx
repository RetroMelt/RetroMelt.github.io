import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Have a question, planning an event, or looking for a specific childhood favourite? Get in touch with RETROMELT.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
        <SectionHeading
          title="Let's Talk."
          subtitle="Have a question? Looking for a specific childhood favourite? Planning an event? Want RETROMELT at your celebration? Or just want to tell us about a chocolate you miss? We'd love to hear from you."
        />
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <section className="bg-warmwhite py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading
            title="Looking For Something Special?"
            subtitle="We also welcome bulk and custom enquiries for celebrations, gifting and events — birthday return gifts, wedding favours, corporate gifting, school events, festival gifting, custom nostalgia boxes and more."
          />
          <div className="mt-6">
            <ButtonLink href={`mailto:${CONTACT_INFO.email}`}>
              Tell Us What You&apos;re Planning →
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
