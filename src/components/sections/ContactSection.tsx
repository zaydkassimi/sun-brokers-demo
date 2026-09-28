"use client";

import { Check, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { contactChannels } from "@/config/site";
import { ActionButton } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContactChannel } from "@/config/site";
import type { ProjectType } from "@/types";

const projectTypes: ProjectType[] = [
  "Acheter",
  "Louer",
  "Vendre",
  "Mettre en location",
  "Autre",
];

type FormValues = {
  name: string;
  phone: string;
  email: string;
  project: ProjectType | "";
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  project: "",
  message: "",
};

const channelIcons: Record<ContactChannel, typeof Phone> = {
  whatsapp: MessageCircle,
  telephone: Phone,
  email: Mail,
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Merci d'indiquer votre nom.";
  }

  if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Ce numéro semble incomplet.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Merci d'indiquer une adresse email valide.";
  }

  if (!values.project) {
    errors.project = "Sélectionnez l'objet de votre projet.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Décrivez votre projet en quelques mots.";
  }

  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hasChannels = contactChannels.length > 0;

  function updateField<Key extends keyof FormValues>(key: Key, value: FormValues[Key]) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      if (!previous[key]) return previous;
      const next = { ...previous };
      delete next[key];
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitted(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title={<span id="contact-title">Parlons de votre projet immobilier.</span>}
              description="Décrivez-nous votre recherche ou votre bien. Nous revenons vers vous avec une première réponse concrète."
            />

            {hasChannels ? (
              <ul className="mt-10 flex flex-col gap-4">
                {contactChannels.map((channel) => {
                  const Icon = channelIcons[channel.key];
                  return (
                    <li key={channel.key}>
                      <a
                        href={channel.href}
                        className="group flex items-center gap-4 rounded-sharp border border-line bg-card px-5 py-4 transition-colors duration-300 hover:border-gold"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper-deep transition-colors duration-300 group-hover:bg-gold/15">
                          <Icon className="h-4.5 w-4.5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="eyebrow block text-muted">{channel.label}</span>
                          <span className="mt-1 block text-[0.9375rem] text-ink">
                            {channel.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="mt-10 rounded-sharp border border-dashed border-line p-6">
                <p className="eyebrow text-muted">Coordonnées</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  Les coordonnées définitives de l&apos;agence seront ajoutées dès
                  validation du projet. Vous pouvez déjà tester le formulaire
                  ci-contre pour découvrir son fonctionnement.
                </p>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-sharp border border-line bg-card p-7 shadow-panel sm:p-10">
              {isSubmitted ? (
                <div role="status" className="flex flex-col items-start py-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-6 w-6 text-gold" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 text-title">Merci pour votre message.</h3>
                  <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">
                    Votre demande a été validée dans cette démonstration. Le parcours
                    complet sera relié à notre CRM lors de la mise en ligne du site.
                  </p>
                  <p className="mt-6 rounded-sharp border border-dashed border-line bg-paper px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
                    Démonstration&nbsp;: aucun formulaire n&apos;est relié à un serveur. Vos
                    informations n&apos;ont pas été transmises ni enregistrées.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setValues(emptyValues);
                      setIsSubmitted(false);
                    }}
                    className="mt-8 text-[0.8125rem] font-medium text-gold-deep underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      id="contact-nom"
                      label="Nom"
                      error={errors.name}
                      value={values.name}
                      onChange={(value) => updateField("name", value)}
                      autoComplete="name"
                      placeholder="Votre nom complet"
                    />
                    <FormField
                      id="contact-telephone"
                      label="Téléphone"
                      type="tel"
                      error={errors.phone}
                      value={values.phone}
                      onChange={(value) => updateField("phone", value)}
                      autoComplete="tel"
                      placeholder="+212 6 00 00 00 00"
                    />
                  </div>

                  <FormField
                    id="contact-email"
                    label="Email"
                    type="email"
                    error={errors.email}
                    value={values.email}
                    onChange={(value) => updateField("email", value)}
                    autoComplete="email"
                    placeholder="vous@exemple.com"
                  />

                  <div>
                    <label htmlFor="contact-projet" className="eyebrow mb-3 block text-muted">
                      Votre projet
                    </label>
                    <div className="relative">
                      <select
                        id="contact-projet"
                        value={values.project}
                        onChange={(event) =>
                          updateField("project", event.target.value as ProjectType | "")
                        }
                        aria-invalid={Boolean(errors.project)}
                        aria-describedby={errors.project ? "contact-projet-erreur" : undefined}
                        className="field-control cursor-pointer pr-8"
                      >
                        <option value="">Sélectionnez une option</option>
                        {projectTypes.map((project) => (
                          <option key={project} value={project}>
                            {project}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.project ? (
                      <p id="contact-projet-erreur" className="mt-2 text-[0.8125rem] text-[#b4543f]">
                        {errors.project}
                      </p>
                    ) : null}
                  </div>

                  <FormField
                    id="contact-message"
                    label="Message"
                    as="textarea"
                    error={errors.message}
                    value={values.message}
                    onChange={(value) => updateField("message", value)}
                    placeholder="Budget, quartier, surface, échéance… tout ce qui nous aide à mieux vous répondre."
                  />

                  <ActionButton type="submit" variant="solid" withArrow className="mt-2 self-start">
                    Envoyer ma demande
                  </ActionButton>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "tel" | "email";
  placeholder?: string;
  autoComplete?: string;
  as?: "input" | "textarea";
  error?: string;
};

function FormField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  as = "input",
  error,
}: FormFieldProps) {
  const errorId = `${id}-erreur`;
  const sharedProps = {
    id,
    name: id,
    value,
    placeholder,
    autoComplete,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => onChange(event.target.value),
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    className: "field-control",
  };

  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-3 block text-muted">
        {label}
      </label>

      {as === "textarea" ? (
        <textarea {...sharedProps} rows={4} className="field-control resize-y" />
      ) : (
        <input {...sharedProps} type={type} />
      )}

      {error ? (
        <p id={errorId} className="mt-2 text-[0.8125rem] text-[#b4543f]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
