import { ArrowUpRight, Bath, BedDouble, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { transactionLabels } from "@/data/properties";
import type { Property } from "@/types";

type PropertyCardProps = {
  property: Property;
  priority?: boolean;
};

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  const isRental = property.transaction === "location";

  return (
    <article id={property.slug} className="group relative h-full scroll-mt-32">
      <div className="relative aspect-3/2 overflow-hidden bg-sand">
        <Image
          src={property.image}
          alt={property.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="media-zoom object-cover"
          quality={72}
          {...(priority ? { preload: true } : {})}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-sharp px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] ${
              isRental
                ? "bg-paper/95 text-ink"
                : "bg-ink/85 text-paper backdrop-blur-sm"
            }`}
          >
            {transactionLabels[property.transaction]}
          </span>
          {property.isNew ? (
            <span className="rounded-sharp bg-gold px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white">
              Nouveau
            </span>
          ) : null}
        </div>
      </div>

      <div className="pt-5">
        <p className="flex items-center gap-1.5 text-[0.8125rem] text-muted">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
          {property.location}
        </p>

        <h3 className="mt-2.5 text-title">
          <Link
            href={`/biens#${property.slug}`}
            className="transition-colors duration-300 group-hover:text-gold-deep"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {property.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-[0.9375rem] font-medium tracking-[0.01em] text-ink">
          {property.priceLabel}
        </p>

        <div className="mt-4 flex items-center gap-5 border-t border-line-soft pt-4 text-[0.8125rem] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-gold" strokeWidth={1.4} aria-hidden="true" />
            {property.bedrooms} ch.
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-gold" strokeWidth={1.4} aria-hidden="true" />
            {property.bathrooms} sdb.
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-gold" strokeWidth={1.4} aria-hidden="true" />
            {property.area} m²
          </span>

          <ArrowUpRight
            className="ml-auto h-4 w-4 shrink-0 text-gold opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
}
