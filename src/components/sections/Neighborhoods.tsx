import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { neighborhoods } from "@/data/neighborhoods";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const offsetClasses = ["lg:translate-y-0", "lg:translate-y-12", "lg:translate-y-24"] as const;

export function Neighborhoods() {
  return (
    <section
      id="quartiers"
      aria-labelledby="quartiers-title"
      className="scroll-mt-24 border-y border-line bg-paper-deep py-20 sm:py-24 lg:py-32"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Nos quartiers"
              title={<span id="quartiers-title">Explorez Casablanca</span>}
              description="Six secteurs, six caractères. Découvrir le bon quartier, c'est déjà choisir la vie que l'on veut."
            />
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-8 lg:pb-24">
          {neighborhoods.map((neighborhood, index) => (
            <Reveal
              as="li"
              key={neighborhood.id}
              delay={0.05 * (index % 3)}
              className={`${offsetClasses[neighborhood.offset]} h-full list-none`}
            >
              <Link
                href={`/biens?quartier=${encodeURIComponent(neighborhood.name)}`}
                className="group relative block h-full overflow-hidden bg-ink"
                aria-label={`Voir les biens à ${neighborhood.name} (${neighborhood.propertyCount} biens en démonstration)`}
              >
                <div className="media-zoom relative aspect-4/5">
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    quality={72}
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent transition-opacity duration-500 group-hover:from-ink/90"
                />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="eyebrow text-gold">{neighborhood.propertyCount} biens</span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.75rem] leading-tight text-paper">
                    {neighborhood.name}
                  </h3>
                  <p className="mt-2 max-w-xs text-[0.875rem] leading-relaxed text-paper/0 transition-[color,opacity] duration-500 group-hover:text-paper/70 group-focus-visible:text-paper/70">
                    {neighborhood.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-paper/30 text-paper opacity-0 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:opacity-100 group-focus-visible:border-gold group-focus-visible:bg-gold group-focus-visible:opacity-100"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
