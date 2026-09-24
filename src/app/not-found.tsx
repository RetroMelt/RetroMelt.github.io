import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 py-24 text-center">
      <h1 className="font-display text-4xl text-chocolate md:text-5xl">
        Oops! This Memory Got Lost. 🥲
      </h1>
      <p className="text-chocolate/80">Let&apos;s take you back.</p>
      <ButtonLink href="/">Go Home</ButtonLink>
    </section>
  );
}
