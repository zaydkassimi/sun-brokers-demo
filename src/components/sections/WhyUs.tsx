import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  {
    value: "Casablanca",
    label: "Expertise locale",
    detail: "Une connaissance fine des quartiers, des prix et de leur évolution.",
  },
  {
    value: "7j/7",
    label: "Accompagnement",
    detail: "Visites et échanges organisés selon vos disponibilités.",
  },
  {
    value: "100%",
    label: "Approche personnalisée",
    detail: "Un interlocuteur unique du premier contact à la signature.",
  },
];

const commitments = [
  {
    title: "Sélection rigoureuse",
    text: "Chaque bien est visité et vérifié avant d'être proposé. Nous ne publions que ce que nous assumons.",
  },
  {
    title: "Réactivité",
    text: "Une réponse claire et rapide, y compris pour les demandes hors créneau.",
  },
  {
    title: "Confidentialité",
    text: "Vos critères de recherche et vos échanges restent strictement confidentiels.",
  },
  {
    title: "Transparence",
    text: "Des prix annoncés cohérents, sans surcoût ni commission cachée.",
  },
];

export function WhyUs() {
  return (
    <section
      id="a-propos"
      aria-labelledby="a-propos-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Pourquoi Sun Brokers"
              title={<span id="a-propos-title">L&apos;immobilier, autrement.</span>}
            />

            <p className="mt-6 max-w-2xl text-lede leading-relaxed text-muted">
              Nous préférons la précision au volume. Nos convictions : bien connaître un
              quartier vaut mieux qu&apos;annoncer beaucoup de biens, et informer
              honnêtement vaut mieux qu&apos;un affichage agressif.
            </p>

            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {commitments.map((commitment) => (
                <div key={commitment.title} className="border-t border-line pt-5">
                  <h3 className="text-[1.0625rem] font-medium tracking-[0.01em]">
                    {commitment.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {commitment.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-sharp bg-ink p-8 text-paper sm:p-10">
              <p className="eyebrow text-gold">En quelques mots</p>

              <dl className="mt-9 flex flex-col">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`py-7 ${
                      index > 0 ? "border-t border-paper/15" : ""
                    }`}
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-[family-name:var(--font-display)] text-[2.25rem] leading-none text-paper">
                        {stat.value}
                      </span>
                      <span className="mt-3 block text-[0.8125rem] uppercase tracking-[0.16em] text-gold">
                        {stat.label}
                      </span>
                      <span className="mt-2.5 block text-[0.875rem] leading-relaxed text-paper/60">
                        {stat.detail}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
