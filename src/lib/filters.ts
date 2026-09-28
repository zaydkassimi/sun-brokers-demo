import { neighborhoodOptions, propertyTypes } from "@/data/properties";
import type {
  SearchFilters,
  TransactionFilter,
  TransactionType,
  TypeFilter,
} from "@/types";

export const transactionOptions: { value: TransactionType; label: string }[] = [
  { value: "vente", label: "Acheter" },
  { value: "location", label: "Louer" },
];

export const typeOptions: { value: TypeFilter; label: string }[] = [
  { value: "all", label: "Tous les types" },
  ...propertyTypes.map((type) => ({ value: type as TypeFilter, label: type })),
];

function isTransactionFilter(value: string): value is TransactionFilter {
  return value === "vente" || value === "location";
}

function isTypeFilter(value: string): value is TypeFilter {
  return typeOptions.some((option) => option.value === value);
}

function isKnownNeighborhood(value: string): boolean {
  return neighborhoodOptions.some((neighborhood) => neighborhood === value);
}

export function parseFiltersFromParams(params: URLSearchParams): SearchFilters {
  const transaction = params.get("transaction") ?? "";
  const type = params.get("type") ?? "";
  const quartier = params.get("quartier") ?? "";

  return {
    transaction: isTransactionFilter(transaction) ? transaction : "all",
    type: isTypeFilter(type) ? type : "all",
    neighborhood: isKnownNeighborhood(quartier) ? quartier : "",
  };
}
