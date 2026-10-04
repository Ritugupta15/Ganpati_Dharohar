import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Mandal } from "@/data/heritage";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="archive-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-primary md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl text-primary md:text-5xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-muted-foreground">{description}</p>}
    </div>
  );
}

/** Card used on Home and Explore — shows the primary field photo of a mandal. */
export function MandalCard({ mandal }: { mandal: Mandal }) {
  const cover = mandal.idolPhoto ?? mandal.photos[0]!;
  return (
    <article className="archive-card group flex flex-col overflow-hidden">
      <Link
        to="/mandals/$mandalId"
        params={{ mandalId: mandal.id }}
        className="relative block aspect-[4/3] overflow-hidden bg-muted"
      >
        <img
          src={cover.src}
          alt={cover.alt || cover.caption}
          width={1200}
          height={900}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-primary/92 px-3 py-1 text-[11px] font-bold text-primary-foreground shadow-sm">
          <Sparkles className="size-3 text-gold-light" />
          {mandal.highlight}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full border border-border/80 bg-background/95 px-2.5 py-1 text-[11px] font-semibold text-primary">
          <Camera className="size-3 text-terracotta" />
          {mandal.photos.length}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-terracotta">
          <MapPin className="size-3.5 shrink-0" />
          <span>
            {mandal.category} · {mandal.theme}
          </span>
        </p>
        <h3 className="mt-3 font-display text-2xl leading-tight text-primary">{mandal.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-foreground/85">{mandal.summary}</p>
        <Button asChild variant="link" className="mt-4 h-auto self-start p-0 text-primary">
          <Link to="/mandals/$mandalId" params={{ mandalId: mandal.id }}>
            Explore Story <ArrowRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}

export function ProcessLine({ steps }: { steps: readonly string[] }) {
  const gridCols =
    steps.length === 5 ? "md:grid-cols-3 lg:grid-cols-5" : "md:grid-cols-3 lg:grid-cols-6";
  return (
    <ol className={`mt-10 grid gap-4 ${gridCols}`}>
      {steps.map((step, index) => (
        <li key={step} className="process-step">
          <span className="text-xs font-bold text-terracotta">
            {String(index + 1).padStart(2, "0")}
          </span>
          <strong className="mt-3 block text-sm uppercase tracking-[0.1em] text-primary">
            {step}
          </strong>
          {index < steps.length - 1 && (
            <ArrowRight
              className="absolute -right-4 top-1/2 z-10 hidden size-4 -translate-y-1/2 text-gold lg:block"
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
