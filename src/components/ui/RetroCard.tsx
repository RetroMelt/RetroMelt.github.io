import type { HTMLAttributes } from "react";

export default function RetroCard({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`retro-card ${className}`} {...props}>
      {children}
    </div>
  );
}
