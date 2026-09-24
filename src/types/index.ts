import type {
  BadgeSlug,
  CategorySlug,
  EraSlug,
  MemoryCategorySlug,
} from "@/data/taxonomy";

export type Product = {
  id: string;
  name: string;
  slug: string;
  image: string;
  galleryImages?: string[];
  shortDescription: string;
  longDescription: string;
  category: CategorySlug;
  era: EraSlug;
  memoryCategory: MemoryCategorySlug;
  badge?: BadgeSlug;
  whyYoullRememberIt?: string;
  perfectFor?: string[];
  // Food-safety / label info — only render fields that are actually present.
  // Never fabricate these for products where real data hasn't been supplied.
  ingredients?: string;
  allergens?: string;
  netQuantity?: string;
  manufacturer?: string;
  storage?: string;
  origin?: string;
  availability?: "Available" | "Limited" | "Coming Soon";
  enquiryEmailSubject?: string;
};

export type Memory = {
  id: string;
  name: string;
  memoryText: string;
  photo?: string;
  submittedAt?: string;
};

export type EventPackage = {
  id: string;
  name: string;
  description: string;
  idealFor: string[];
};
