type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="font-display text-sm uppercase tracking-widest text-caramel">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-chocolate">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg text-chocolate/80">
          {subtitle}
        </p>
      )}
    </div>
  );
}
