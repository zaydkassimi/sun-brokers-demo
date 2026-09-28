export const siteConfig = {
  name: "Sun Brokers Agency",
  shortName: "Sun Brokers",
  city: "Casablanca",
  country: "Maroc",
  tagline: "Votre partenaire immobilier à Casablanca.",
  url: "https://www.sunbrokers.ma",

  // Coordonnées à compléter avec les informations vérifiées de l'agence.
  // Une valeur vide masque automatiquement le canal concerné dans l'interface.
  phone: "",
  whatsapp: "",
  email: "",

  instagram: "",
  facebook: "",
  linkedin: "",

  demoNotice: "Concept web — démonstration non officielle",
};

export type ContactChannel = "whatsapp" | "telephone" | "email";

export type ContactChannelInfo = {
  key: ContactChannel;
  label: string;
  value: string;
  href: string;
};

function buildChannels(): ContactChannelInfo[] {
  const channels: ContactChannelInfo[] = [];

  if (siteConfig.whatsapp) {
    channels.push({
      key: "whatsapp",
      label: "WhatsApp",
      value: siteConfig.whatsapp,
      href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
    });
  }

  if (siteConfig.phone) {
    channels.push({
      key: "telephone",
      label: "Téléphone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    });
  }

  if (siteConfig.email) {
    channels.push({
      key: "email",
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    });
  }

  return channels;
}

/** Canaux de contact réellement renseignés. La section contact s'adapte à cette liste. */
export const contactChannels = buildChannels();

export type NavLink = { label: string; href: string };

/** Les ancres utilisent la forme `/#id` pour rester valides depuis toutes les pages. */
export const primaryNav: NavLink[] = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Acheter", href: "/#acheter" },
  { label: "Louer", href: "/#louer" },
  { label: "Nos biens", href: "/biens" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
];

export const ownerCtaHref = "/#confier-mon-bien";

export const footerNav: NavLink[] = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Acheter", href: "/#acheter" },
  { label: "Louer", href: "/#louer" },
  { label: "Nos biens", href: "/biens" },
];

export const footerAgency: NavLink[] = [
  { label: "À propos", href: "/#a-propos" },
  { label: "Confier mon bien", href: "/#confier-mon-bien" },
  { label: "Contact", href: "/#contact" },
];

export const footerNeighborhoods: NavLink[] = [
  { label: "Racine", href: "/biens?quartier=Racine" },
  { label: "Gauthier", href: "/biens?quartier=Gauthier" },
  { label: "Oasis", href: "/biens?quartier=Oasis" },
  { label: "Casa Finance City", href: "/biens?quartier=Casa%20Finance%20City" },
];
