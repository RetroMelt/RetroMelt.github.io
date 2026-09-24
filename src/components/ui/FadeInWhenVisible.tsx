import type { ReactNode } from "react";

// A guaranteed-correct entrance animation: a pure CSS fade-in-up that plays
// once on mount. No IntersectionObserver, no client JS, no risk of content
// getting stuck invisible if a callback never fires.
export default function FadeInWhenVisible({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`fade-in-up ${className}`}>{children}</div>;
}
