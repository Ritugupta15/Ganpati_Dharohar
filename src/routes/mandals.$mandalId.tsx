import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Share2, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/site/lightbox";
import { mandals } from "@/data/heritage";

export const Route = createFileRoute("/mandals/$mandalId")({
  loader: ({ params }) => { const mandal = mandals.find((m) => m.id === params.mandalId); if (!mandal) throw notFound(); return mandal; },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.name} — Ganpati Dharohar` : "Heritage entry unavailable — Ganpati Dharohar" },
    { name: "description", content: loaderData?.summary ?? "This heritage archive entry is unavailable." },
    { property: "og:title", content: loaderData?.name ?? "Heritage entry unavailable" },
    { property: "og:description", content: loaderData?.summary ?? "This heritage archive entry is unavailable." },
    { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: MandalDetails,
  notFoundComponent: () => <div className="archive-container py-24 text-center"><h1 className="font-display text-5xl text-primary">Heritage entry not found</h1><Button asChild className="mt-6"><Link to="/explore">Return to Explore</Link></Button></div>,
});

function MandalDetails() {
  const m = Route.useLoaderData();
  const [tab, setTab] = useState(0); // which of the 5 story sections is open
  const [photo, setPhoto] = useState<number | null>(null);
  const idx = mandals.findIndex((x) => x.id === m.id);
  const next = mandals[(idx + 1) % mandals.length];
  const hero = m.photos[0];
  const share = async () => {
    const url = window.location.href;
    if (navigator.share) { try { await navigator.share({ title: m.name, url }); } catch { /* cancelled */ } }
    else { await navigator.clipboard.writeText(url); toast.success("Link copied"); }
  };

  return <>
    <section className="relative min-h-[62vh] overflow-hidden bg-primary">
      <img src={hero.src} alt={hero.caption} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/10" />
      <div className="archive-container relative flex min-h-[62vh] items-end pb-12 text-primary-foreground"><div>
        <div className="flex gap-2"><Button asChild variant="secondary" size="sm"><Link to="/explore"><ArrowLeft />Explore</Link></Button><Button variant="secondary" size="sm" onClick={share}><Share2 />Share</Button></div>
        <p className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-gold-light"><MapPin className="size-4" />{m.location}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">{m.name}</h1>
        <div className="mt-5 flex flex-wrap gap-2"><span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground"><Sparkles className="size-3" />{m.highlight}</span><span className="rounded-full border border-primary-foreground/40 px-3 py-1 text-xs">Theme: {m.theme}</span></div>
      </div></div>
    </section>

    {/* Five story sections as interactive tabs */}
    <section className="py-16"><div className="archive-container grid gap-12 lg:grid-cols-[1fr_20rem]">
      <div>
        <p className="eyebrow">Heritage story · 5 sections</p>
        <div role="tablist" aria-label="Heritage sections" className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {m.sections.map((s, i) => <button key={s.title} role="tab" aria-selected={tab === i} onClick={() => setTab(i)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${tab === i ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"}`}><span className="mr-1.5 opacity-60">0{i + 1}</span>{s.title}</button>)}
        </div>
        <article key={tab} role="tabpanel" className="archive-card mt-5 animate-in fade-in slide-in-from-bottom-2 p-7 md:p-10">
          <h2 className="font-display text-3xl text-primary md:text-4xl">{m.sections[tab].title}</h2>
          <p className="mt-5 text-lg leading-8 text-foreground/85">{m.sections[tab].body}</p>
          <div className="mt-8 flex justify-between"><Button variant="ghost" disabled={tab === 0} onClick={() => setTab(tab - 1)}><ArrowLeft />Previous</Button><Button variant="ghost" disabled={tab === 4} onClick={() => setTab(tab + 1)}>Next<ArrowRight /></Button></div>
        </article>
        <div className="mt-5 flex flex-wrap gap-2">{m.tags.map((t) => <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">#{t}</span>)}</div>
      </div>
      <aside><div className="sticky top-24 border border-border bg-muted p-6">
        <p className="eyebrow">Field visit</p>
        <dl className="mt-5 space-y-4 text-sm">{m.visits.map((v) => <div key={v.label}><dt className="flex items-center gap-1.5 font-bold text-primary"><CalendarDays className="size-4" />{v.label}</dt><dd className="mt-1 text-muted-foreground">{v.value}</dd></div>)}
          <div><dt className="font-bold text-primary">Documented by</dt><dd className="mt-1 text-muted-foreground">Ganpati Dharohar field visit (CEP)</dd></div></dl>
      </div></aside>
    </div></section>

    <section className="border-t border-border bg-muted/40 py-16"><div className="archive-container">
      <h2 className="font-display text-4xl text-primary">Field Photographs</h2>
      <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3">{m.photos.map((p, i) => <button key={p.src} onClick={() => setPhoto(i)} className="group overflow-hidden rounded-md text-left"><img src={p.src} alt={p.caption} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="mt-2 block text-xs text-muted-foreground">{p.caption}</span></button>)}</div>
      <div className="mt-12 flex justify-end"><Button asChild variant="outline" size="lg"><Link to="/mandals/$mandalId" params={{ mandalId: next.id }}>Next mandal: {next.name.split(" ").slice(0, 3).join(" ")}<ArrowRight /></Link></Button></div>
    </div></section>
    {photo !== null && <Lightbox items={m.photos.map((p) => ({ ...p, mandal: m.name }))} index={photo} onChange={setPhoto} onClose={() => setPhoto(null)} />}
  </>;
}
