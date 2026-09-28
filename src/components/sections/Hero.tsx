import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink lg:min-h-[92vh]"
    >
      <Image
        src="/images/hero/hero-villa-casablanca.jpg"
        alt="Villa contemporaine lumineuse à Casablanca, ouverte sur une piscine bordée de palmiers"
        fill
        sizes="100vw"
        quality={78}
        preload
        fetchPriority="high"
        className="object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/85"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent"
      />

      <div className="shell relative w-full pb-36 pt-32 sm:pb-40 lg:pb-48 lg:pt-40">
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            Immobilier d&apos;exception à Casablanca
          </p>

          <h1 id="hero-title" className="mt-6 text-hero text-paper">
            Trouvez un lieu
            <br />
            qui vous ressemble.
          </h1>

          <p className="mt-6 max-w-xl text-lede leading-relaxed text-paper/75">
            Découvrez une sélection de biens soigneusement choisis dans les quartiers les
            plus recherchés de Casablanca.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ActionLink href="#biens" variant="gold" withArrow>
              Découvrir nos biens
            </ActionLink>
            <ActionLink href="#confier-mon-bien" variant="outlineLight">
              Confier mon bien
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
