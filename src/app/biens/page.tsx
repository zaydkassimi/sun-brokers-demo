import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { PropertiesBrowser } from "@/components/sections/PropertiesBrowser";
import { siteConfig } from "@/config/site";
import { properties } from "@/data/properties";
import { parseFiltersFromParams } from "@/lib/filters";

const title = "Nos biens immobiliers à Casablanca";
const description =
  "Parcourez le catalogue de biens à vendre et à louer à Casablanca : appartements, studios, villas et duplex à Racine, Gauthier, Oasis, Casa Finance City et plus encore.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/biens",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "/biens",
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

type BiensPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BiensPage({ searchParams }: BiensPageProps) {
  const params = await searchParams;

  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "string") queryParams.set(key, value);
  }

  return (
    <>
      <section className="bg-ink pt-28 text-paper sm:pt-32 lg:pt-40">
        <div className="shell pb-14 sm:pb-16 lg:pb-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-[0.8125rem] text-paper/60 transition-colors duration-300 hover:text-paper"
          >
            <ChevronLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            Retour à l&apos;accueil
          </Link>

          <p className="eyebrow mt-10 flex items-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
            Catalogue
          </p>

          <h1 className="mt-5 max-w-3xl text-display text-paper">{title}</h1>

          <p className="mt-5 max-w-xl text-lede leading-relaxed text-paper/70">{description}</p>

          <p className="mt-8 text-[0.8125rem] uppercase tracking-[0.16em] text-paper/45">
            {properties.length} biens de démonstration
          </p>
        </div>
      </section>

      <div className="shell -mt-8 pb-24 sm:-mt-10 sm:pb-28">
        <PropertiesBrowser
          key={queryParams.toString()}
          initialFilters={parseFiltersFromParams(queryParams)}
        />
      </div>
    </>
  );
}
