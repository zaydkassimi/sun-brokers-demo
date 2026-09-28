import type { Testimonial } from "@/types";

/**
 * Témoignages de démonstration.
 * Ces profils ne correspondent pas à des clients réels : ils seront remplacés
 * par des avis vérifiés (avec autorisation de publication) sur le site final.
 * Ne pas ajouter de note Google ni de vérification non obtenue.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amine R.",
    initials: "AR",
    context: "Location — Racine",
    quote:
      "Une équipe disponible et professionnelle qui a parfaitement compris ma recherche.",
  },
  {
    id: 2,
    name: "Sarah B.",
    initials: "SB",
    context: "Achat — Casa Finance City",
    quote:
      "Tout s'est fait avec beaucoup de clarté : visites, prix, négociation et finalisation.",
  },
  {
    id: 3,
    name: "Youssef M.",
    initials: "YM",
    context: "Vente — Oasis",
    quote:
      "Une écoute réelle et des conseils honnêtes. Mon appart a trouvé preneur en quelques semaines.",
  },
];
