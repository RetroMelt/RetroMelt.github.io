import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO, NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t-2 border-chocolate/10 bg-chocolate text-warmwhite">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <Image
            src="/logo-mark.png"
            alt={`${SITE.name} — ${SITE.tagline}`}
            width={1206}
            height={520}
            className="h-11 w-auto"
          />
          <p className="italic text-warmwhite/80">{SITE.tagline}</p>
          <a
            href={CONTACT_INFO.instagramUrl}
            className="text-sm text-warmwhite/80 hover:text-mustard"
          >
            {CONTACT_INFO.instagramHandle} on Instagram
          </a>
        </div>

        <nav className="flex flex-col gap-2">
          <span className="font-display text-sm uppercase tracking-wide text-mustard">
            Explore
          </span>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="text-sm text-warmwhite/80 hover:text-warmwhite"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <span className="font-display text-sm uppercase tracking-wide text-mustard">
            Get in touch
          </span>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-sm text-warmwhite/80 hover:text-warmwhite"
          >
            {CONTACT_INFO.email}
          </a>
          <a
            href={CONTACT_INFO.phoneHref}
            className="text-sm text-warmwhite/80 hover:text-warmwhite"
          >
            {CONTACT_INFO.phone}
          </a>
          <span className="text-sm text-warmwhite/80">
            {CONTACT_INFO.location}
          </span>
        </div>
      </div>

      <div className="border-t border-warmwhite/10 px-6 py-6 text-center">
        <p className="font-display text-sm">
          Some memories deserve a second bite. 🍫
        </p>
        <p className="mt-2 text-xs text-warmwhite/60">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
