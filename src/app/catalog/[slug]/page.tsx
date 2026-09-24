import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { buildProductEnquiryMailto } from "@/lib/mailto";
import { CONTACT_INFO } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import Badge from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import FoodInfoTable from "@/components/product/FoodInfoTable";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} — Retro Indian Candy`,
    description: product.shortDescription,
    path: `/catalog/${product.slug}`,
    image: product.image,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-square w-full">
          {product.badge && (
            <div className="absolute left-4 top-4 z-10">
              <Badge slug={product.badge} />
            </div>
          )}
          <div className="retro-card relative h-full w-full">
            <Image
              src={product.image}
              alt={`${product.name} — ${product.shortDescription}`}
              fill
              className="object-contain p-10"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-display text-4xl text-chocolate md:text-5xl">
            {product.name}
          </h1>
          <p className="font-display text-lg text-caramel">
            {product.shortDescription}
          </p>
          <p className="font-display text-sm uppercase tracking-wide text-chocolate/60">
            A little taste of the good old days.
          </p>
          <p className="text-chocolate/85">{product.longDescription}</p>

          <ButtonLink
            href={buildProductEnquiryMailto(product)}
            className="mt-2 self-start"
          >
            Enquire About This
          </ButtonLink>
        </div>
      </div>

      {product.whyYoullRememberIt && (
        <section className="mt-16">
          <h2 className="font-display text-2xl text-chocolate">
            Why You&apos;ll Remember It
          </h2>
          <p className="mt-3 text-chocolate/85">{product.whyYoullRememberIt}</p>
        </section>
      )}

      {product.perfectFor && product.perfectFor.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl text-chocolate">Perfect For</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {product.perfectFor.map((item) => (
              <li
                key={item}
                className="rounded-full bg-warmwhite border border-caramel/40 px-4 py-2 text-sm text-chocolate/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <FoodInfoTable product={product} />
      </section>

      <section className="mt-16 text-center retro-card p-10">
        <h2 className="font-display text-3xl text-chocolate">Want This Treat?</h2>
        <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href={buildProductEnquiryMailto(product)}>
            Email Us
          </ButtonLink>
          <ButtonLink href={CONTACT_INFO.phoneHref} variant="secondary">
            Call Us
          </ButtonLink>
        </div>
      </section>
    </article>
  );
}
