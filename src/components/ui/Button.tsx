import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display text-sm md:text-base font-semibold uppercase tracking-wide px-6 py-3 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5";

const variants = {
  primary: "bg-chocolate text-warmwhite border-2 border-chocolate hover:bg-caramel hover:border-caramel",
  secondary: "bg-transparent text-chocolate border-2 border-chocolate hover:bg-chocolate hover:text-warmwhite",
};

type Variant = keyof typeof variants;

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
};

export function ButtonLink({ href, variant = "primary", className = "", ...props }: LinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = `${base} ${variants[variant]} ${className}`;
  if (isExternal) {
    return <a href={href} className={classes} {...props} />;
  }
  return <Link href={href} prefetch={false} className={classes} {...props} />;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
