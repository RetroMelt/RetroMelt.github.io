import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  image,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}
