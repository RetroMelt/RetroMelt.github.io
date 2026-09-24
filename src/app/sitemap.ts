import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "",
  "/catalog",
  "/new-launches",
  "/our-story",
  "/events",
  "/memories",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
  }));

  const productEntries = products.map((product) => ({
    url: `${SITE.url}/catalog/${product.slug}`,
  }));

  return [...staticEntries, ...productEntries];
}
