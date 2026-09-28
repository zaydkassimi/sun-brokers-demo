import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { step: "01", label: "Échange et visite du bien" },
  { step: "02", label: "Estimation argumentée" },
  { step: "03", label: "Reportage et diffusion" },
  { step: "04", label: "Visites, négociation, conclusion" },
];

export function OwnerCTA() {
  return (
    <section
      id="confier-mon-bien"
      aria-labelledby="owner-title"
      className="scroll-mt-24 bg-ink py-20 text-paper sm:py-24 lg:py-32"
    >
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden bg-ink-soft">
              <Image
                src="/images/owner/estimation-architecture.jpg"
                alt="Architecture contemporaine casablancaise photographiée en fin de journée, destinée à illustrer l'estimation d'un bien"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="media-zoom object-cover"
                quality={72}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
              Confier mon bien
            </p>

            <h2 id="owner-title" className="mt-5 text-display text-paper">
              Vous avez un bien à vendre ou à louer&nbsp;?
            </h2>

            <p className="mt-5 max-w-xl text-lede leading-relaxed text-paper/70">
              Confiez votre propriété à une équipe qui connaît le marché de Casablanca et
              valorise chaque bien avec attention.
            </p>

            <ol className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {steps.map((item) => (
                <li
                  key={item.step}
                  className="flex items-baseline gap-4 border-t border-paper/15 pt-4"
                >
                  <span className="font-[family-name:var(--font-display)] text-lg text-gold">
                    {item.step}
                  </span>
                  <span className="text-[0.9375rem] text-paper/75">{item.label}</span>
                </li>
              ))}
            </ol>

            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <ActionLink href="#contact" variant="gold" withArrow>
                Demander une estimation
              </ActionLink>
              <ActionLink href="#contact" variant="outlineLight">
                Nous contacter
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
