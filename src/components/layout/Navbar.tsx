"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, ownerCtaHref, siteConfig } from "@/config/site";
import { ActionLink } from "@/components/ui/ActionLink";
import { SunMark } from "@/components/ui/BrandIcons";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const solid = isScrolled || !isHome;
  const panelMotion = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
      };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-line/80 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-[height] duration-500 ${
          isScrolled && isHome ? "h-16 lg:h-[4.5rem]" : "h-[4.5rem] lg:h-20"
        }`}
      >
        <Link
          href="/"
          className={`flex items-center gap-2.5 transition-colors duration-500 ${
            solid ? "text-ink" : "text-paper"
          }`}
          aria-label={`${siteConfig.name} — retour à l'accueil`}
        >
          <SunMark className="h-7 w-7 text-gold" />
          <span className="text-[0.9375rem] font-medium uppercase tracking-[0.24em]">
            Sun Brokers
          </span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 lg:flex"
        >
          <ul className="flex items-center gap-7">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`link-underline text-[0.8125rem] transition-colors duration-300 ${
                    solid
                      ? "text-ink-muted hover:text-ink"
                      : "text-paper/80 hover:text-paper"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ActionLink
            href={ownerCtaHref}
            variant={solid ? "solid" : "outlineLight"}
            size="sm"
          >
            Confier mon bien
          </ActionLink>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label="Ouvrir le menu"
          className={`flex h-11 w-11 items-center justify-center rounded-sharp border transition-colors duration-500 lg:hidden ${
            solid
              ? "border-line text-ink hover:border-gold hover:text-gold-deep"
              : "border-paper/40 text-paper hover:border-paper"
          }`}
        >
          <Menu className="h-5 w-5" strokeWidth={1.4} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="menu-mobile"
            key="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            {...panelMotion}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden"
          >
            <div className="shell flex h-[4.5rem] shrink-0 items-center justify-between border-b border-paper/10">
              <span className="flex items-center gap-2.5 text-paper">
                <SunMark className="h-7 w-7 text-gold" />
                <span className="text-[0.9375rem] font-medium uppercase tracking-[0.24em]">
                  Sun Brokers
                </span>
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-11 w-11 items-center justify-center rounded-sharp border border-paper/30 text-paper transition-colors hover:border-gold hover:text-gold"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>

            <nav aria-label="Navigation mobile" className="shell flex-1 overflow-y-auto py-6">
              <ul className="flex flex-col">
                {primaryNav.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.06 * index }}
                    className="border-b border-paper/10"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 font-[family-name:var(--font-display)] text-2xl text-paper transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <ActionLink
                  href={ownerCtaHref}
                  variant="gold"
                  onClick={() => setIsOpen(false)}
                >
                  Confier mon bien
                </ActionLink>
                <ActionLink
                  href="/biens"
                  variant="outlineLight"
                  onClick={() => setIsOpen(false)}
                >
                  Voir tous les biens
                </ActionLink>
              </div>

              <p className="mt-10 text-xs leading-relaxed text-paper/45">
                {siteConfig.demoNotice}
              </p>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
