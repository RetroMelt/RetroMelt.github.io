import type { Product } from "@/types";

const FIELD_LABELS: { key: keyof Product; label: string }[] = [
  { key: "ingredients", label: "Ingredients" },
  { key: "allergens", label: "Allergens" },
  { key: "netQuantity", label: "Net Quantity" },
  { key: "manufacturer", label: "Manufacturer" },
  { key: "storage", label: "Storage Instructions" },
  { key: "origin", label: "Country of Origin" },
];

export default function FoodInfoTable({ product }: { product: Product }) {
  const rows = FIELD_LABELS.filter(({ key }) => Boolean(product[key]));

  if (rows.length === 0) return null;

  return (
    <div className="retro-card p-6">
      <h3 className="font-display text-lg text-chocolate">Product Information</h3>
      <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rows.map(({ key, label }) => (
          <div key={key}>
            <dt className="font-display text-xs uppercase tracking-wide text-caramel">
              {label}
            </dt>
            <dd className="mt-1 text-sm text-chocolate/85">
              {product[key] as string}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
