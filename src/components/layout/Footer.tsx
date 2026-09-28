import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SunMark,
} from "@/components/ui/BrandIcons";
import {
  footerAgency,
  footerNav,
  footerNeighborhoods,
  siteConfig,
} from "@/config/site";
import type { NavLink } from "@/config/site";

type SocialLink = { label: string; href: string; icon: typeof InstagramIcon };

const socialLinks: SocialLink[] = [
  { label: "Instagram", href: siteConfig.instagram, icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedinIcon },
].filter((link): link is SocialLink => Boolean(link.href));

type FooterColumnProps = {
  title: string;
  links: NavLink[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="eyebrow text-gold">{title}</h2>
      <ul className="mt-6 flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link
              href={link.href}
              className="link-underline text-[0.9375rem] text-paper/65 transition-colors duration-300 hover:text-paper"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-paper"
              aria-label={`${siteConfig.name} — accueil`}
            >
              <SunMark className="h-8 w-8 text-gold" />
              <span className="text-base font-medium uppercase tracking-[0.24em]">
                {siteConfig.shortName}
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-[1.0625rem] leading-relaxed text-paper/60">
              {siteConfig.tagline}
            </p>

            {socialLinks.length > 0 ? (
              <ul className="mt-8 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-white"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          <nav
            aria-label="Pied de page"
            className={`grid gap-12 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 ${
              socialLinks.length > 0 ? "" : "lg:col-span-8"
            }`}
          >
            <FooterColumn title="Navigation" links={footerNav} />
            <FooterColumn title="Agence" links={footerAgency} />
            <FooterColumn title="Quartiers" links={footerNeighborhoods} />

            <div>
              <h2 className="eyebrow text-gold">Réseaux</h2>
              {socialLinks.length > 0 ? (
                <ul className="mt-6 flex flex-col gap-3.5">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-underline text-[0.9375rem] text-paper/65 transition-colors duration-300 hover:text-paper"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 text-[0.875rem] leading-relaxed text-paper/40">
                  Liens sociaux à configurer.
                </p>
              )}
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-paper/45">
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <p className="text-[0.75rem] text-paper/30">{siteConfig.demoNotice}</p>
        </div>
      </div>
    </footer>
  );
}
