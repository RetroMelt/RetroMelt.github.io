import { eventPackages } from "@/data/eventPackages";
import RetroCard from "@/components/ui/RetroCard";

export default function EventPackages() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {eventPackages.map((pkg) => (
        <RetroCard key={pkg.id} className="flex flex-col gap-3 p-6">
          <h3 className="font-display text-lg text-chocolate">{pkg.name}</h3>
          <p className="text-sm text-chocolate/80">{pkg.description}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {pkg.idealFor.map((item) => (
              <li
                key={item}
                className="rounded-full bg-cream px-3 py-1 text-xs text-chocolate/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </RetroCard>
      ))}
    </div>
  );
}
