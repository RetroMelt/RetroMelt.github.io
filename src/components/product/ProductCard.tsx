import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { buildProductEnquiryMailto } from "@/lib/mailto";
import Badge from "@/components/ui/Badge";
import RetroCard from "@/components/ui/RetroCard";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <RetroCard className="flex flex-col overflow-hidden p-0">
      <Link href={`/catalog/${product.slug}`} prefetch={false} className="relative block">
        {product.badge && (
          <div className="absolute left-4 top-4 z-10">
            <Badge slug={product.badge} />
          </div>
        )}
        <div className="relative aspect-square w-full bg-cream">
          <Image
            src={product.image}
            alt={`${product.name} — ${product.shortDescription}`}
            fill
            className="object-contain p-8"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <Link href={`/catalog/${product.slug}`} prefetch={false}>
          <h3 className="font-display text-xl text-chocolate">{product.name}</h3>
        </Link>
        <p className="flex-1 text-sm text-chocolate/75">{product.shortDescription}</p>
        <a
          href={buildProductEnquiryMailto(product)}
          className="mt-2 inline-flex items-center justify-center rounded-full border-2 border-chocolate px-4 py-2 font-display text-xs uppercase tracking-wide text-chocolate transition-colors hover:bg-chocolate hover:text-warmwhite"
        >
          Enquire About This
        </a>
      </div>
    </RetroCard>
  );
}
