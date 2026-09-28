"use client";

import { ChevronDown } from "lucide-react";
import { neighborhoodOptions } from "@/data/properties";
import { transactionOptions, typeOptions } from "@/lib/filters";
import type { SearchFilters, TypeFilter } from "@/types";

type PropertyFiltersProps = {
  filters: SearchFilters;
  onChange: (filters: SearchFilters) => void;
  variant?: "compact" | "full";
  idPrefix?: string;
};

export function PropertyFilters({
  filters,
  onChange,
  variant = "compact",
  idPrefix = "filtres",
}: PropertyFiltersProps) {
  const isFull = variant === "full";
  const typeSelectId = `${idPrefix}-type`;
  const neighborhoodSelectId = `${idPrefix}-quartier`;
  const transactionGroupName = `${idPrefix}-transaction`;

  function update(patch: Partial<SearchFilters>) {
    onChange({ ...filters, ...patch });
  }

  return (
    <div className={isFull ? "grid gap-8 sm:grid-cols-3" : "grid gap-6"}>
      <fieldset>
        <legend className="eyebrow mb-3 text-muted">Je souhaite</legend>
        <div className="flex w-full rounded-sharp border border-line bg-paper-deep p-1">
          {transactionOptions.map((option) => (
            <label key={option.value} className="flex-1 cursor-pointer">
              <input
                type="radio"
                name={transactionGroupName}
                value={option.value}
                checked={filters.transaction === option.value}
                onChange={() => update({ transaction: option.value })}
                className="peer sr-only"
              />
              <span className="block rounded-[1px] px-4 py-2.5 text-center text-[0.8125rem] font-medium text-muted transition-colors duration-300 hover:text-ink peer-checked:bg-card peer-checked:text-ink peer-checked:shadow-[0_1px_2px_rgb(23_23_23/0.1)] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-gold">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor={typeSelectId} className="eyebrow mb-3 block text-muted">
          Type de bien
        </label>
        <div className="relative">
          <select
            id={typeSelectId}
            value={filters.type}
            onChange={(event) => update({ type: event.target.value as TypeFilter })}
            className="field-control cursor-pointer pr-8"
          >
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <SelectIndicator />
        </div>
      </div>

      <div>
        <label htmlFor={neighborhoodSelectId} className="eyebrow mb-3 block text-muted">
          Quartier
        </label>
        <div className="relative">
          <select
            id={neighborhoodSelectId}
            value={filters.neighborhood}
            onChange={(event) => update({ neighborhood: event.target.value })}
            className="field-control cursor-pointer pr-8"
          >
            <option value="">Tous les quartiers</option>
            {neighborhoodOptions.map((neighborhood) => (
              <option key={neighborhood} value={neighborhood}>
                {neighborhood}
              </option>
            ))}
          </select>
          <SelectIndicator />
        </div>
      </div>
    </div>
  );
}

function SelectIndicator() {
  return (
    <ChevronDown
      className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gold"
      strokeWidth={1.5}
      aria-hidden="true"
    />
  );
}
