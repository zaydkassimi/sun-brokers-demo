"use client";

import { RotateCcw, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ActionButton } from "@/components/ui/ActionLink";
import { PropertyFilters } from "@/components/ui/PropertyFilters";
import { PropertyGrid } from "@/components/ui/PropertyGrid";
import { emptyFilters, hasActiveFilters, matchesFilters, properties } from "@/data/properties";
import { highlightElement, scrollToElement } from "@/lib/scroll";
import type { SearchFilters } from "@/types";

type PropertiesBrowserProps = {
  initialFilters: SearchFilters;
};

export function PropertiesBrowser({ initialFilters }: PropertiesBrowserProps) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);

  useEffect(() => {
    const slug = window.location.hash.slice(1);
    if (!slug) return;

    const target = document.getElementById(slug);
    if (!target) return;

    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "center",
    });

    return highlightElement(target);
  }, []);

  const isFiltered = hasActiveFilters(filters);

  const results = useMemo(
    () =>
      isFiltered
        ? properties.filter((property) => matchesFilters(property, filters))
        : properties,
    [filters, isFiltered],
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    scrollToElement("catalogue-resultats");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        aria-label="Filtrer le catalogue de biens"
        className="rounded-sharp border border-line bg-card p-6 shadow-panel sm:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <PropertyFilters
              filters={filters}
              onChange={setFilters}
              variant="full"
              idPrefix="catalogue"
            />
          </div>

          <div className="flex flex-col gap-3 lg:col-span-4">
            <ActionButton type="submit" variant="solid" className="w-full lg:h-14">
              <Search className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              Rechercher
            </ActionButton>
            {isFiltered ? (
              <button
                type="button"
                onClick={() => setFilters(emptyFilters)}
                className="inline-flex items-center justify-center gap-2 rounded-sharp border border-line px-5 py-3 text-[0.8125rem] font-medium text-ink-muted transition-colors duration-300 hover:border-gold hover:text-gold-deep"
              >
                <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                Réinitialiser les filtres
              </button>
            ) : null}
          </div>
        </div>
      </form>

      <div id="catalogue-resultats" className="mt-12 scroll-mt-28">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p
            aria-live="polite"
            className="text-[0.8125rem] uppercase tracking-[0.16em] text-muted"
          >
            {results.length} {results.length > 1 ? "biens disponibles" : "bien disponible"}
          </p>
          <p className="text-[0.75rem] text-muted-light">
            Catalogue de démonstration — biens fictifs.
          </p>
        </div>

        {results.length > 0 ? (
          <div className="mt-8">
            <PropertyGrid properties={results} priorityCount={3} />
          </div>
        ) : (
          <div className="mt-8 border border-dashed border-line bg-card p-10 text-center sm:p-16">
            <p className="text-title">Aucun bien ne correspond à ces critères</p>
            <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">
              Élargissez votre recherche ou contactez-nous&nbsp;: notre équipe accède à des
              biens qui ne figurent pas encore en ligne.
            </p>
            <div className="mt-7 flex justify-center">
              <ActionButton variant="outline" onClick={() => setFilters(emptyFilters)}>
                Voir tout le catalogue
              </ActionButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
