import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      id="temoignages"
      aria-labelledby="temoignages-title"
      className="py-20 sm:py-24 lg:py-32"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Ils nous font confiance"
            title={<span id="temoignages-title">Une relation qui dure</span>}
            description="Notre accompagnement se mesure dans la satisfaction de nos clients, et dans la plupart des cas, dans leur recommandation."
            align="center"
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.id} delay={0.07 * index} className="h-full list-none">
              <figure className="flex h-full flex-col rounded-sharp border border-line bg-card p-7 shadow-card sm:p-8">
                <Quote
                  className="h-7 w-7 shrink-0 text-gold/70"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />

                <blockquote className="mt-6 flex-1">
                  <p className="font-[family-name:var(--font-display)] text-[1.375rem] leading-[1.4] text-ink">
                    «&nbsp;{testimonial.quote}&nbsp;»
                  </p>
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3.5 border-t border-line-soft pt-6">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink font-[family-name:var(--font-display)] text-base tracking-wide text-paper"
                  >
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block text-[0.9375rem] font-medium text-ink">
                      {testimonial.name}
                    </span>
                    <span className="block text-[0.8125rem] text-muted">
                      {testimonial.context}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-center text-[0.75rem] text-muted-light">
          Témoignages de démonstration, à remplacer par des avis clients vérifiés.
        </p>
      </div>
    </section>
  );
}
