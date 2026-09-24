import { CONTACT_INFO } from "@/lib/constants";
import RetroCard from "@/components/ui/RetroCard";

const ITEMS = [
  { emoji: "📧", label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { emoji: "📞", label: "Phone", value: CONTACT_INFO.phone, href: CONTACT_INFO.phoneHref },
  {
    emoji: "📱",
    label: "Instagram",
    value: CONTACT_INFO.instagramHandle,
    href: CONTACT_INFO.instagramUrl,
  },
  { emoji: "📍", label: "Location", value: CONTACT_INFO.location, href: undefined },
];

export default function ContactInfo() {
  return (
    <RetroCard className="flex flex-col gap-6 p-8">
      {ITEMS.map((item) => (
        <div key={item.label} className="flex items-start gap-4">
          <span className="text-2xl" aria-hidden="true">
            {item.emoji}
          </span>
          <div>
            <p className="font-display text-sm uppercase tracking-wide text-caramel">
              {item.label}
            </p>
            {item.href ? (
              <a href={item.href} className="text-chocolate hover:text-caramel">
                {item.value}
              </a>
            ) : (
              <p className="text-chocolate">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </RetroCard>
  );
}
