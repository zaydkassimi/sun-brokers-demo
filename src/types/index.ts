export type PropertyType = "Appartement" | "Villa" | "Studio" | "Duplex" | "Maison";

export type TransactionType = "vente" | "location";

export type Property = {
  id: number;
  slug: string;
  title: string;
  location: string;
  neighborhood: string;
  type: PropertyType;
  transaction: TransactionType;
  price: number;
  priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
  isNew?: boolean;
};

export type Neighborhood = {
  id: number;
  name: string;
  slug: string;
  propertyCount: number;
  description: string;
  image: string;
  imageAlt: string;
  offset: 0 | 1 | 2;
};

export type Testimonial = {
  id: number;
  name: string;
  initials: string;
  context: string;
  quote: string;
};

export type TransactionFilter = TransactionType | "all";

export type TypeFilter = PropertyType | "all";

export type SearchFilters = {
  transaction: TransactionFilter;
  type: TypeFilter;
  neighborhood: string;
};

export type ProjectType = "Acheter" | "Louer" | "Vendre" | "Mettre en location" | "Autre";
