import type { Property, PropertyType, SearchFilters, TransactionType } from "@/types";

export const transactionLabels: Record<TransactionType, string> = {
  vente: "À vendre",
  location: "À louer",
};

export const propertyTypes: PropertyType[] = [
  "Appartement",
  "Villa",
  "Studio",
  "Duplex",
  "Maison",
];

export const neighborhoodOptions = [
  "Racine",
  "Gauthier",
  "Oasis",
  "Casa Finance City",
  "Riviera",
  "Ferme Bretonne",
  "Les Hôpitaux",
] as const;

export const emptyFilters: SearchFilters = {
  transaction: "all",
  type: "all",
  neighborhood: "",
};

/** Données de démonstration — à remplacer par les biens réels de l'agence. */
export const properties: Property[] = [
  {
    id: 1,
    slug: "appartement-moderne-racine",
    title: "Appartement moderne",
    location: "Racine, Casablanca",
    neighborhood: "Racine",
    type: "Appartement",
    transaction: "location",
    price: 13500,
    priceLabel: "13 500 MAD / mois",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    image: "/images/properties/appartement-moderne-racine.jpg",
    imageAlt:
      "Salon contemporain d'un appartement moderne à Racine, Casablanca, avec baies vitrées et mobilier épuré",
    featured: true,
    isNew: true,
  },
  {
    id: 2,
    slug: "studio-contemporain-cfc",
    title: "Studio contemporain",
    location: "Casa Finance City, Casablanca",
    neighborhood: "Casa Finance City",
    type: "Studio",
    transaction: "location",
    price: 8500,
    priceLabel: "8 500 MAD / mois",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    image: "/images/properties/studio-contemporain-cfc.jpg",
    imageAlt:
      "Studio contemporain épuré à Casa Finance City avec coin cuisine et lumière naturelle",
    featured: true,
  },
  {
    id: 3,
    slug: "villa-jardin-oasis",
    title: "Villa avec jardin",
    location: "Oasis, Casablanca",
    neighborhood: "Oasis",
    type: "Villa",
    transaction: "vente",
    price: 4900000,
    priceLabel: "4 900 000 MAD",
    bedrooms: 4,
    bathrooms: 3,
    area: 420,
    image: "/images/properties/villa-jardin-oasis.jpg",
    imageAlt:
      "Villa contemporaine avec piscine et jardin paysager à Oasis, Casablanca",
    featured: true,
    isNew: true,
  },
  {
    id: 4,
    slug: "appartement-lumineux-gauthier",
    title: "Appartement lumineux",
    location: "Gauthier, Casablanca",
    neighborhood: "Gauthier",
    type: "Appartement",
    transaction: "vente",
    price: 2650000,
    priceLabel: "2 650 000 MAD",
    bedrooms: 3,
    bathrooms: 2,
    area: 165,
    image: "/images/properties/appartement-lumineux-gauthier.jpg",
    imageAlt:
      "Séjour lumineux d'un appartement familial à Gauthier, Casablanca, parquet clair et grandes fenêtres",
    featured: true,
  },
  {
    id: 5,
    slug: "appartement-premium-ferme-bretonne",
    title: "Appartement premium",
    location: "Ferme Bretonne, Casablanca",
    neighborhood: "Ferme Bretonne",
    type: "Appartement",
    transaction: "location",
    price: 11000,
    priceLabel: "11 000 MAD / mois",
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    image: "/images/properties/appartement-premium-ferme-bretonne.jpg",
    imageAlt:
      "Cuisine ouverte d'un appartement premium à Ferme Bretonne, Casablanca, en matériaux naturels",
    featured: true,
  },
  {
    id: 6,
    slug: "duplex-contemporain-riviera",
    title: "Duplex contemporain",
    location: "Riviera, Casablanca",
    neighborhood: "Riviera",
    type: "Duplex",
    transaction: "vente",
    price: 3900000,
    priceLabel: "3 900 000 MAD",
    bedrooms: 3,
    bathrooms: 3,
    area: 240,
    image: "/images/properties/duplex-contemporain-riviera.jpg",
    imageAlt:
      "Double séjour d'un duplex contemporain à Riviera, Casablanca, avec mezzanine et lumière zénithale",
    featured: true,
    isNew: true,
  },
  {
    id: 7,
    slug: "villa-contemporaine-hopitaux",
    title: "Villa contemporaine",
    location: "Les Hôpitaux, Casablanca",
    neighborhood: "Les Hôpitaux",
    type: "Villa",
    transaction: "vente",
    price: 7350000,
    priceLabel: "7 350 000 MAD",
    bedrooms: 5,
    bathrooms: 4,
    area: 380,
    image: "/images/properties/villa-contemporaine-hopitaux.jpg",
    imageAlt:
      "Façade contemporaine d'une villa aux Hôpitaux, Casablanca, en béton clair et verre",
  },
  {
    id: 8,
    slug: "studio-standing-gauthier",
    title: "Studio standing",
    location: "Gauthier, Casablanca",
    neighborhood: "Gauthier",
    type: "Studio",
    transaction: "location",
    price: 6200,
    priceLabel: "6 200 MAD / mois",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    image: "/images/properties/studio-standing-gauthier.jpg",
    imageAlt: "Studio meublé standing à Gauthier, Casablanca, avec tapis clair et mobilier contemporain",
    isNew: true,
  },
  {
    id: 9,
    slug: "appartement-vue-mer-riviera",
    title: "Appartement vue mer",
    location: "Riviera, Casablanca",
    neighborhood: "Riviera",
    type: "Appartement",
    transaction: "location",
    price: 16500,
    priceLabel: "16 500 MAD / mois",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    image: "/images/properties/appartement-vue-mer-riviera.jpg",
    imageAlt:
      "Salon ouvert sur une terrasse avec vue dégagée d'un appartement à Riviera, Casablanca",
  },
  {
    id: 10,
    slug: "villa-angle-oasis",
    title: "Villa d'angle",
    location: "Oasis, Casablanca",
    neighborhood: "Oasis",
    type: "Villa",
    transaction: "vente",
    price: 5600000,
    priceLabel: "5 600 000 MAD",
    bedrooms: 4,
    bathrooms: 3,
    area: 510,
    image: "/images/properties/villa-angle-oasis.jpg",
    imageAlt:
      "Villa d'angle à Oasis, Casablanca, avec terrasse ombragée et piscine à débordement",
  },
  {
    id: 11,
    slug: "appartement-familial-racine",
    title: "Appartement familial",
    location: "Racine, Casablanca",
    neighborhood: "Racine",
    type: "Appartement",
    transaction: "vente",
    price: 3200000,
    priceLabel: "3 200 000 MAD",
    bedrooms: 4,
    bathrooms: 2,
    area: 190,
    image: "/images/properties/appartement-familial-racine.jpg",
    imageAlt:
      "Salle à manger d'un appartement familial à Racine, Casablanca, avec buffet en bois foncé",
  },
  {
    id: 12,
    slug: "penthouse-cfc",
    title: "Penthouse CFC",
    location: "Casa Finance City, Casablanca",
    neighborhood: "Casa Finance City",
    type: "Duplex",
    transaction: "vente",
    price: 6400000,
    priceLabel: "6 400 000 MAD",
    bedrooms: 3,
    bathrooms: 3,
    area: 210,
    image: "/images/properties/penthouse-cfc.jpg",
    imageAlt:
      "Terrasse d'un penthouse à Casa Finance City, Casablanca, avec vue sur la ville au coucher du soleil",
    isNew: true,
  },
];

export const featuredProperties = properties.filter((property) => property.featured);

export function matchesFilters(property: Property, filters: SearchFilters): boolean {
  const matchesTransaction =
    filters.transaction === "all" || property.transaction === filters.transaction;

  const matchesType = filters.type === "all" || property.type === filters.type;

  const matchesNeighborhood =
    filters.neighborhood === "" || property.neighborhood === filters.neighborhood;

  return matchesTransaction && matchesType && matchesNeighborhood;
}

export function hasActiveFilters(filters: SearchFilters): boolean {
  return (
    filters.transaction !== "all" || filters.type !== "all" || filters.neighborhood !== ""
  );
}
