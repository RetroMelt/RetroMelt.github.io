import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO, NAV_LINKS, SITE } from "@/lib/constants";
import SearchBox from "@/components/layout/SearchBox";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  return (
    <header className="relative z-50 border-b-2 border-chocolate/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" prefetch={false} className="shrink-0">
          <Image
            src="/logo-mark.png"
            alt={`${SITE.name} — ${SITE.tagline}`}
            width={1206}
            height={520}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="font-display text-sm uppercase tracking-wide text-chocolate hover:text-caramel transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SearchBox />
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="hidden rounded-full border-2 border-chocolate bg-chocolate px-5 py-2 font-display text-sm uppercase tracking-wide text-warmwhite transition-colors hover:bg-caramel hover:border-caramel md:inline-block"
          >
            Enquire
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
