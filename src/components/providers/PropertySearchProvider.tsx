"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { emptyFilters } from "@/data/properties";
import type { SearchFilters } from "@/types";

type PropertySearchContextValue = {
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  resetFilters: () => void;
  isFiltered: boolean;
};

const PropertySearchContext = createContext<PropertySearchContextValue | null>(null);

export function PropertySearchProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(emptyFilters);

  const resetFilters = useCallback(() => setFilters(emptyFilters), []);

  const value = useMemo(
    () => ({
      filters,
      setFilters,
      resetFilters,
      isFiltered:
        filters.transaction !== emptyFilters.transaction ||
        filters.type !== emptyFilters.type ||
        filters.neighborhood !== emptyFilters.neighborhood,
    }),
    [filters, resetFilters],
  );

  return (
    <PropertySearchContext.Provider value={value}>{children}</PropertySearchContext.Provider>
  );
}

export function usePropertySearch(): PropertySearchContextValue {
  const context = useContext(PropertySearchContext);

  if (!context) {
    throw new Error("usePropertySearch doit être utilisé dans un PropertySearchProvider.");
  }

  return context;
}
