import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

const whatsappHref = siteConfig.whatsapp
  ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
  : null;

const label = whatsappHref ? "Contacter Sun Brokers sur WhatsApp" : "Nous contacter";

export function WhatsAppButton() {
  const href = whatsappHref ?? "#contact";

  return (
    <a
      href={href}
      aria-label={label}
      title={whatsappHref ? label : "Démo — numéro WhatsApp à configurer"}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-ink py-3.5 pl-3.5 pr-5 text-paper shadow-[0_10px_30px_-12px_rgb(23_23_23/0.6)] transition-colors duration-300 hover:bg-gold focus-visible:bg-gold sm:bottom-7 sm:right-7"
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold transition-colors duration-300 group-hover:bg-white">
        <WhatsAppIcon className="h-5 w-5" />
        {!whatsappHref ? (
          <span
            aria-hidden="true"
            className="absolute -right-0.5 -top-0.5 rounded-full bg-gold px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase tracking-wide text-white ring-2 ring-ink group-hover:ring-gold"
          >
            Démo
          </span>
        ) : null}
      </span>
      <span className="hidden text-[0.8125rem] font-medium sm:inline">
        {whatsappHref ? "WhatsApp" : "Nous contacter"}
      </span>
    </a>
  );
}
