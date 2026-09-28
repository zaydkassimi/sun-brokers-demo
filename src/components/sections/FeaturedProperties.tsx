"use client";

import { RotateCcw } from "lucide-react";
import { usePropertySearch } from "@/components/providers/PropertySearchProvider";
import { PropertyGrid } from "@/components/ui/PropertyGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActionLink } from "@/components/ui/ActionLink";
import { featuredProperties, matchesFilters, properties } from "@/data/properties";

export function FeaturedProperties() {
  const { filters, isFiltered, resetFilters } = usePropertySearch();

  const results = isFiltered
    ? properties.filter((property) => matchesFilters(property, filters))
    : featuredProperties;

  return (
    <section
      id="biens"
      aria-labelledby="biens-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow={isFiltered ? "Résultats de recherche" : "Sélection"}
              title={<span id="biens-title">{isFiltered ? "Biens correspondants" : "Biens à la une"}</span>}
              description={
                isFiltered
                  ? "Voici les biens qui correspondent à vos critères. Ajustez votre recherche pour élargir les résultats."
                  : "Une sélection de propriétés choisies pour leur emplacement, leur qualité et leur caractère."
              }
            />
          </Reveal>

          <Reveal delay={0.08} className="shrink-0">
            {isFiltered ? (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 rounded-sharp border border-line px-5 py-3 text-[0.8125rem] font-medium text-ink-muted transition-colors duration-300 hover:border-gold hover:text-gold-deep"
              >
                <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                Réinitialiser
              </button>
            ) : (
              <ActionLink href="/biens" variant="outline" withArrow>
                Voir tous les biens
              </ActionLink>
            )}
          </Reveal>
        </div>

        <p
          aria-live="polite"
          className="mt-8 text-[0.8125rem] uppercase tracking-[0.16em] text-muted"
        >
          {results.length} {results.length > 1 ? "biens" : "bien"}
        </p>

        {results.length > 0 ? (
          <div className="mt-8">
            <PropertyGrid properties={results} priorityCount={3} />
          </div>
        ) : (
          <div className="mt-8 border border-dashed border-line bg-card p-10 text-center sm:p-16">
            <p className="text-title">Aucun bien ne correspond à ces critères</p>
            <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">
              Essayez un autre quartier ou un autre type de bien. Notre équipe peut également
              rechercher en dehors du catalogue en ligne.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ActionLink href="#contact" variant="solid">
                Nous contacter
              </ActionLink>
              <ActionLink href="/biens" variant="outline">
                Voir tout le catalogue
              </ActionLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
