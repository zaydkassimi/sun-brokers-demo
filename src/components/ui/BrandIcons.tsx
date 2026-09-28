type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="17.25" cy="6.75" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M15.5 3.5h-2A3.5 3.5 0 0 0 10 7v2.5H7.5" />
      <path d="M15.5 21.5v-8H18l.5-3h-3V8.5a1 1 0 0 1 1-1h2V4.6" />
      <path d="M10 9.5H7.5V21.5" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17" />
      <circle cx="7.5" cy="7.25" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
      <path d="M11.5 10.5V17" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3.5 20.5l1.15-4.2A8 8 0 1 1 7.9 19.4l-4.4 1.1Z"
        strokeLinejoin="round"
      />
      <path d="M9 9.2c0 3 2.3 5.2 5.1 5.3.6 0 1.2-.5 1.2-1.1 0-.4-.5-.8-.9-1l-1-.5c-.3-.2-.6 0-.8.2l-.4.5a4.9 4.9 0 0 1-1.9-1.9l.5-.4c.2-.2.4-.5.2-.8l-.5-1c-.2-.4-.6-.9-1-.9-.6 0-1.1.5-1.1 1.1" />
    </svg>
  );
}

/** Marque Sun Brokers : un disque et douze rais, évoque le soleil de Casablanca. */
export function SunMark({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="16" cy="16" r="6.25" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * Math.PI) / 6;
        const inner = 10.2;
        const outer = index % 3 === 0 ? 14.4 : 12.9;
        return (
          <line
            key={index}
            x1={16 + Math.cos(angle) * inner}
            y1={16 + Math.sin(angle) * inner}
            x2={16 + Math.cos(angle) * outer}
            y2={16 + Math.sin(angle) * outer}
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
