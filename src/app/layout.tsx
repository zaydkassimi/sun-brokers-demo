import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const title = `${siteConfig.name} | Immobilier à Casablanca`;
const description =
  "Découvrez une sélection de biens immobiliers à vendre et à louer dans les quartiers les plus recherchés de Casablanca.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description,
  applicationName: siteConfig.name,
  keywords: [
    "immobilier Casablanca",
    "appartement à vendre Casablanca",
    "location Casablanca",
    "villa Casablanca",
    "Racine",
    "Gauthier",
    "Oasis",
    "Casa Finance City",
    "Riviera",
    "Sun Brokers",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "real estate",
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-sharp focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Aller au contenu principal
        </a>

        <Navbar />

        <main id="contenu">{children}</main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
