import Link from "next/link";
import type { ReactNode } from "react";

export const buttonBase =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-sharp text-[0.8125rem] font-medium tracking-[0.02em] transition-colors duration-300";

export const buttonSizes = {
  md: "h-12 px-7",
  sm: "h-11 px-6 text-xs",
} as const;

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outlineLight" | "gold";
  size?: keyof typeof buttonSizes;
  withArrow?: boolean;
  onClick?: () => void;
  className?: string;
};

const variants = {
  solid: "bg-ink text-paper hover:bg-ink-muted",
  gold: "bg-gold text-white hover:bg-gold-deep",
  outline: "border border-ink/25 text-ink hover:border-gold hover:text-gold-deep",
  outlineLight:
    "border border-paper/40 text-paper hover:border-gold hover:bg-gold hover:text-white hover:border-gold",
} as const;

function arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 group-hover/btn:translate-x-1"
    >
      →
    </span>
  );
}

export function ActionLink({
  href,
  children,
  variant = "solid",
  size = "md",
  withArrow = false,
  onClick,
  className = "",
}: ActionLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");

  const classes = `${buttonBase} ${buttonSizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {withArrow ? arrow() : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {content}
    </Link>
  );
}

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  variant?: keyof typeof variants;
  size?: keyof typeof buttonSizes;
  withArrow?: boolean;
  onClick?: () => void;
  className?: string;
};

export function ActionButton({
  children,
  type = "button",
  variant = "solid",
  size = "md",
  withArrow = false,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonBase} ${buttonSizes[size]} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {withArrow ? arrow() : null}
    </button>
  );
}
