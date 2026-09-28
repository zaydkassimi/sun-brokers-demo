import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: string;
  href: string;
  points: string[];
};

const services: Service[] = [
  {
    id: "acheter",
    index: "01",
    title: "Acheter",
    description:
      "Trouvez le bien qui correspond réellement à votre style de vie et à vos ambitions.",
    image: "/images/services/acheter.jpg",
    imageAlt:
      "Remise des clés d'un appartement à un acquéreur, symbolisant une acquisition accompagnée",
    cta: "Découvrir les biens à vendre",
    href: "/biens?transaction=vente",
    points: ["Recherche sur mesure", "Visites accompagnées", "Négociation suivie"],
  },
  {
    id: "louer",
    index: "02",
    title: "Louer",
    description:
      "Accédez rapidement à une sélection de locations dans les quartiers les plus recherchés de Casablanca.",
    image: "/images/services/louer.jpg",
    imageAlt: "Intérieur d'un appartement de location meublé à Casablanca, prêt à emménager",
    cta: "Voir les locations",
    href: "/biens?transaction=location",
    points: ["Dossiers simplifiés", "Contrats transparents", "Mise en service rapide"],
  },
  {
    id: "confier-mon-bien",
    index: "03",
    title: "Confier mon bien",
    description:
      "Vous souhaitez vendre ou louer votre propriété ? Bénéficiez d'un accompagnement personnalisé de l'estimation à la conclusion.",
    image: "/images/services/confier-mon-bien.jpg",
    imageAlt:
      "Façade d'une propriété de standing confiée à l'agence, photographiée en lumière naturelle",
    cta: "Faire estimer mon bien",
    href: "#contact",
    points: ["Estimation argumentée", "Reportage photo", "Diffusion ciblée"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-y border-line bg-paper-deep py-20 sm:py-24 lg:py-32"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Nos services"
            title={<span id="services-title">Trois parcours, un même exigence</span>}
            description="Acheter, louer ou confier son bien : chaque projet est conduit par un interlocuteur unique, du premier échange à la signature."
          />
        </Reveal>

        <div className="mt-14 lg:mt-20">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 border-t border-line py-12 first:border-t-0 first:pt-0 lg:py-16"
              >
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  <Reveal
                    className={`lg:col-span-4 ${isReversed ? "lg:order-3 lg:col-start-9" : "lg:order-1"}`}
                  >
                    <div className="relative aspect-4/5 overflow-hidden bg-sand">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="media-zoom object-cover"
                        quality={72}
                      />
                      <span
                        aria-hidden="true"
                        className="absolute left-5 top-5 font-[family-name:var(--font-display)] text-5xl leading-none text-white/85"
                      >
                        {service.index}
                      </span>
                    </div>
                  </Reveal>

                  <Reveal
                    delay={0.08}
                    className={`lg:col-span-7 ${
                      isReversed
                        ? "lg:order-2 lg:col-start-1 lg:row-start-1"
                        : "lg:order-2 lg:col-start-6"
                    }`}
                  >
                    <h3 className="text-display">{service.title}</h3>
                    <p className="mt-4 max-w-xl text-lede leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2.5 text-[0.8125rem] uppercase tracking-[0.12em] text-ink-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="h-px w-5 bg-gold"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <ActionLink href={service.href} variant="outline" withArrow>
                        {service.cta}
                      </ActionLink>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
