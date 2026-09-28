"use client";

import { Search } from "lucide-react";
import { usePropertySearch } from "@/components/providers/PropertySearchProvider";
import { ActionButton } from "@/components/ui/ActionLink";
import { PropertyFilters } from "@/components/ui/PropertyFilters";
import { scrollToElement } from "@/lib/scroll";

export function PropertySearch() {
  const { filters, setFilters } = usePropertySearch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    scrollToElement("biens");
  }

  return (
    <div className="shell relative z-20 -mt-24 sm:-mt-28 lg:-mt-32">
      <form
        onSubmit={handleSubmit}
        aria-label="Rechercher un bien immobilier à Casablanca"
        className="rounded-sharp border border-line bg-card p-6 shadow-panel sm:p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <PropertyFilters
              filters={filters}
              onChange={setFilters}
              idPrefix="recherche"
            />
          </div>

          <div className="lg:col-span-4">
            <ActionButton type="submit" variant="gold" className="w-full lg:h-14">
              <Search className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              Rechercher
            </ActionButton>
          </div>
        </div>
      </form>
    </div>
  );
}
