import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Mandal } from "@/data/heritage";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro"><div className="archive-container"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-primary md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{description}</p></div></section>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="max-w-2xl">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="mt-3 font-display text-3xl text-primary md:text-5xl">{title}</h2>{description && <p className="mt-4 leading-7 text-muted-foreground">{description}</p>}</div>;
}

/** Card used on Home and Explore — shows the first field photo of a mandal. */
export function MandalCard({ mandal }: { mandal: Mandal }) {
  const cover = mandal.photos[0];
  return (
    <article className="archive-card group flex flex-col overflow-hidden">
      <Link to="/mandals/$mandalId" params={{ mandalId: mandal.id }} className="relative block aspect-[4/3] overflow-hidden">
        <img src={cover.src} alt={cover.caption} width={1200} height={900} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-bold text-primary-foreground"><Sparkles className="size-3" />{mandal.highlight}</span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-primary"><Camera className="size-3" />{mandal.photos.length}</span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"><MapPin className="size-3.5" />{mandal.category} · {mandal.theme}</p>
        <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">{mandal.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{mandal.summary}</p>
        <Button asChild variant="link" className="mt-4 h-auto self-start p-0"><Link to="/mandals/$mandalId" params={{ mandalId: mandal.id }}>View details <ArrowRight /></Link></Button>
      </div>
    </article>
  );
}

export function ProcessLine({ steps }: { steps: string[] }) {
  return <ol className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-6">{steps.map((step, index) => <li key={step} className="process-step"><span className="text-xs font-bold text-accent-foreground/70">{String(index + 1).padStart(2, "0")}</span><strong className="mt-3 block text-sm uppercase tracking-[0.1em] text-primary">{step}</strong>{index < steps.length - 1 && <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden text-gold lg:block" aria-hidden="true" />}</li>)}</ol>;
}
