import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const descriptionWidth = align === "center" ? "max-w-2xl mx-auto" : "max-w-xl";

  return (
    <div className={`${alignment} ${className}`}>
      <p
        className={`eyebrow flex items-center gap-3 ${
          tone === "dark" ? "text-gold" : "text-gold-deep"
        } ${align === "center" ? "justify-center" : ""}`}
      >
        <span
          aria-hidden="true"
          className={`h-px w-8 ${tone === "dark" ? "bg-gold/60" : "bg-gold/50"}`}
        />
        {eyebrow}
      </p>

      <h2
        className={`mt-5 text-display ${
          tone === "dark" ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 text-lede leading-relaxed ${
            tone === "dark" ? "text-paper/65" : "text-muted"
          } ${descriptionWidth}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
