import Image from "next/image";
import { siteConfig } from "@/config/site";
import { instagramPosts } from "@/data/instagram";
import { ActionLink } from "@/components/ui/ActionLink";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";

export function InstagramSection() {
  const instagramUrl = siteConfig.instagram;
  const hasInstagramUrl = Boolean(instagramUrl);

  return (
    <section
      id="instagram"
      aria-labelledby="instagram-title"
      className="border-y border-line bg-paper-deep py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 id="instagram-title" className="text-display">
              Suivez notre sélection au quotidien
            </h2>
            <p className="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-muted">
              Nouveaux biens, coulisses d&apos;un reportage photo, quartiers à découvrir.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            {hasInstagramUrl ? (
              <ActionLink href={instagramUrl} variant="solid" withArrow>
                Nous suivre sur Instagram
              </ActionLink>
            ) : (
              <p className="text-[0.8125rem] uppercase tracking-[0.14em] text-muted-light">
                Lien Instagram à configurer
              </p>
            )}
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {instagramPosts.map((post, index) => (
            <Reveal as="li" key={post.id} delay={0.05 * index} className="h-full list-none">
              {hasInstagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative block aspect-square overflow-hidden bg-sand"
                  aria-label="Voir la publication sur Instagram"
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="media-zoom object-cover"
                    quality={70}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <InstagramIcon className="h-7 w-7 text-paper" />
                  </span>
                </a>
              ) : (
                <div className="relative aspect-square overflow-hidden bg-sand">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                    quality={70}
                  />
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
